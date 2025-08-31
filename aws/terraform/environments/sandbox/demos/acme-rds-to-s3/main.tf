provider "aws" {
  region = "us-west-1"
}

module "rds_to_s3" {
  source      = "../../../../modules/dms-rds-to-s3"
  name_prefix = "acme-demo"

  vpc_id     = "vpc-0123456789abcdef0"
  subnet_ids = ["subnet-aaa", "subnet-bbb", "subnet-ccc"]

  rds_security_group_id = "sg-0rds12345"               # Your existing RDS instance SG
  rds_engine            = "postgres"
  rds_hostname          = "mydb.abc123xyz.us-east-1.rds.amazonaws.com"
  rds_port              = 5432
  rds_database          = "appdb"

  # Option A: plaintext (for quick demo only)
  rds_username = var.rds_username
  rds_password = var.rds_password

  # Option B (prefer): Secrets Manager
  # rds_secrets_manager_secret_arn      = "arn:aws:secretsmanager:...:secret:my-rds-creds"
  # rds_secrets_manager_access_role_arn = "arn:aws:iam::123456789012:role/SecretsManagerReadRoleForDMS"

  include_schemas = ["public"]
  exclude_tables  = [
    { schema = "public", table = "etl_audit_*" }
  ]

  s3_bucket      = "my-company-data-lake"
  s3_prefix      = "rds/appdb/"
  s3_kms_key_arn = null                        # or "arn:aws:kms:...:key/..."
  s3_data_format = "parquet"
  cdc_path       = "cdc/"
  enable_cdc     = true                       # flip to true to keep changes flowing

  tags = {
    Project = "Acme"
    Env     = "demo"
  }
}

variable "rds_username" { type = string }
variable "rds_password" { type = string }