terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0"
    }
  }
}

locals {
  name = "${var.name_prefix}-dms"
}

# --- Networking ---
resource "aws_dms_replication_subnet_group" "this" {
  replication_subnet_group_id          = "${var.name_prefix}-subnets"
  replication_subnet_group_description = "Subnets for DMS replication instance"
  subnet_ids                           = var.subnet_ids
  tags                                 = var.tags
}

resource "aws_security_group" "dms" {
  name        = "${local.name}-sg"
  description = "Security group for DMS replication instance"
  vpc_id      = var.vpc_id
  tags        = var.tags
}

# Allow DMS to talk to the RDS instance on its port
resource "aws_security_group_rule" "rds_ingress_from_dms" {
  type                     = "ingress"
  from_port                = var.rds_port
  to_port                  = var.rds_port
  protocol                 = "tcp"
  security_group_id        = var.rds_security_group_id
  source_security_group_id = aws_security_group.dms.id
  description              = "Allow DMS to connect to RDS"
}

# Optional: open egress for DMS to S3 and internet (NAT recommended)
resource "aws_security_group_rule" "dms_egress_all" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  security_group_id = aws_security_group.dms.id
  cidr_blocks       = ["0.0.0.0/0"]
  description       = "Allow all egress"
}

# --- IAM for S3 target endpoint writes ---
data "aws_iam_policy_document" "dms_s3_trust" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = [
        "dms.amazonaws.com",
        "dms.${var.region}.amazonaws.com"
      ]
    }
  }
}

resource "aws_iam_role" "dms_s3" {
  name               = "${local.name}-s3-role"
  assume_role_policy = data.aws_iam_policy_document.dms_s3_trust.json
  tags               = var.tags
}

data "aws_iam_policy_document" "dms_s3_access" {
  statement {
    sid    = "S3Access"
    effect = "Allow"
    actions = [
      "s3:PutObject",
      "s3:AbortMultipartUpload",
      "s3:ListBucket",
      "s3:GetBucketLocation"
    ]
    resources = [
      "arn:aws:s3:::${var.s3_bucket}",
      "arn:aws:s3:::${var.s3_bucket}/${trim(var.s3_prefix, "/")}/*"
    ]
  }

  dynamic "statement" {
    for_each = var.s3_kms_key_arn == null ? [] : [1]
    content {
      sid     = "KMS"
      effect  = "Allow"
      actions = ["kms:Encrypt", "kms:Decrypt", "kms:GenerateDataKey*", "kms:DescribeKey"]
      resources = [
        var.s3_kms_key_arn
      ]
    }
  }
}

resource "aws_iam_policy" "dms_s3_access" {
  name   = "${local.name}-s3-policy"
  policy = data.aws_iam_policy_document.dms_s3_access.json
}

resource "aws_iam_role_policy_attachment" "dms_s3_access" {
  role       = aws_iam_role.dms_s3.name
  policy_arn = aws_iam_policy.dms_s3_access.arn
}

# --- IAM for Secrets Manager access (for source endpoint credentials) ---
data "aws_iam_policy_document" "dms_secrets_trust" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = [
        "dms.amazonaws.com",
        "dms.${var.region}.amazonaws.com"
      ]
    }
  }
}

resource "aws_iam_role" "dms_secrets" {
  name               = "${local.name}-secrets-role"
  assume_role_policy = data.aws_iam_policy_document.dms_secrets_trust.json
  tags               = var.tags
}

data "aws_iam_policy_document" "dms_secrets_access" {
  statement {
    sid     = "SecretsManagerRead"
    effect  = "Allow"
    actions = [
      "secretsmanager:GetSecretValue",
      "secretsmanager:DescribeSecret"
    ]
    resources = [
      var.rds_secrets_manager_secret_arn
    ]
  }
}

resource "aws_iam_policy" "dms_secrets_access" {
  name   = "${local.name}-secrets-policy"
  policy = data.aws_iam_policy_document.dms_secrets_access.json
}

resource "aws_iam_role_policy_attachment" "dms_secrets_access" {
  role       = aws_iam_role.dms_secrets.name
  policy_arn = aws_iam_policy.dms_secrets_access.arn
}

# --- DMS replication instance ---
resource "aws_dms_replication_instance" "this" {
  replication_instance_id      = "${local.name}-ri"
  replication_instance_class   = var.replication_instance_class
  allocated_storage            = var.replication_allocated_storage
  publicly_accessible          = false
  vpc_security_group_ids       = [aws_security_group.dms.id]
  replication_subnet_group_id  = aws_dms_replication_subnet_group.this.id
  multi_az                     = var.multi_az
  apply_immediately            = true
  auto_minor_version_upgrade   = true
  tags                         = var.tags
}

# --- Source endpoint (RDS) ---
resource "aws_dms_endpoint" "source" {
  endpoint_id   = "${local.name}-src"
  endpoint_type = "source"
  engine_name   = var.rds_engine # "postgres" or "mysql"

  # Required
  secrets_manager_access_role_arn = aws_iam_role.dms_secrets.arn
  secrets_manager_arn             = var.rds_secrets_manager_secret_arn

  database_name = var.rds_database

  # Postgres extra attribs commonly useful
  extra_connection_attributes = var.source_extra_connection_attributes

  tags = var.tags
}

# --- Target endpoint (S3) ---
resource "aws_dms_s3_endpoint" "target" {
  endpoint_id   = "${local.name}-tgt"
  endpoint_type = "target"

  bucket_name               = var.s3_bucket
  bucket_folder             = trim(var.s3_prefix, "/")
  service_access_role_arn   = aws_iam_role.dms_s3.arn
  compression_type          = var.s3_compression_type # "GZIP" or "NONE"
  data_format               = var.s3_data_format      # "parquet" or "csv"
  encoding_type             = "plain"
  date_partition_enabled    = true
  date_partition_delimiter  = "SLASH"
  cdc_inserts_only          = false
  parquet_version           = "parquet-2-0"
  timestamp_column_name     = var.timestamp_column_name # e.g. "_ingested_at"
  kms_key_arn               = var.s3_kms_key_arn
  max_file_size             = var.max_file_mb # MB
  external_table_definition = null
  cdc_path                  = var.cdc_path # e.g. "cdc/"
  add_column_name           = false
  dict_page_size_limit      = 1024

  tags = var.tags
}

# --- Table mapping (what to move) ---
locals {
  table_mappings = jsonencode({
    rules = concat(
      [
        for s in var.include_schemas : {
          rule-type = "selection"
          rule-id   = "schema-${s}"
          rule-name = "schema-${s}"
          object-locator = {
            schema-name = s
            table-name  = "%"
          }
          rule-action = "include"
        }
      ],
      [
        for ex in var.exclude_tables : {
          rule-type = "selection"
          rule-id   = "exclude-${replace(ex, "/[.*]/", "-")}"
          rule-name = "exclude-${replace(ex, "/[.*]/", "-")}"
          object-locator = {
            schema-name = ex.schema
            table-name  = ex.table
          }
          rule-action = "exclude"
        }
      ]
    )
  })
}

# --- Task settings (full load + optional CDC, Parquet files for Snowflake) ---
locals {
  task_settings = jsonencode({
    TargetMetadata = {
      TargetSchema         = ""
      SupportLobs          = true
      FullLobMode          = false
      LobChunkSize         = 64
    }
    FullLoadSettings = {
      TargetTablePrepMode = "DO_NOTHING"
      CommitRate          = 10000
    }
    Logging = { EnableLogging = true }
    ControlTablesSettings = {
      historyTimeslotInMinutes = 5
      ControlSchema            = "_dms_control"
    }
    StreamBufferSettings = {
      StreamBufferCount = 3
      StreamBufferSize  = 8
    }
    ErrorBehavior = {
      DataErrorPolicy        = "LOG_ERROR"
      TableErrorPolicy       = "SUSPEND_TABLE"
      RecoverableErrorCount  = -1
      FailOnNoTablesCaptured = false
    }
  })
}

resource "aws_dms_replication_task" "this" {
  replication_task_id       = "${local.name}-task"
  migration_type            = var.enable_cdc ? "full-load-and-cdc" : "full-load"
  replication_instance_arn  = aws_dms_replication_instance.this.replication_instance_arn
  source_endpoint_arn       = aws_dms_endpoint.source.endpoint_arn
  target_endpoint_arn       = aws_dms_s3_endpoint.target.endpoint_arn
  table_mappings            = local.table_mappings
  replication_task_settings = local.task_settings
  tags                      = var.tags
}