# RDS Subnet Group
resource "aws_db_subnet_group" "main" {
  name       = "${var.name_prefix}-rds-subnet-group"
  subnet_ids = var.subnet_ids

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-rds-subnet-group"
  })
}

# Security Group for RDS
resource "aws_security_group" "rds" {
  name_prefix = "${var.name_prefix}-rds-sg"
  vpc_id      = var.vpc_id
  description = "Security group for RDS instance"

  # Allow inbound connections on database port from allowed CIDR blocks
  ingress {
    from_port   = local.actual_port
    to_port     = local.actual_port
    protocol    = "tcp"
    cidr_blocks = var.allowed_cidr_blocks
    description = "Database access"
  }

  # Allow outbound traffic (for updates, etc.)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
    description = "All outbound traffic"
  }

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-rds-sg"
  })

  lifecycle {
    create_before_destroy = true
  }
}

# Random password for RDS
resource "random_password" "db_password" {
  length  = 16
  special = true
}

# Secrets Manager secret for RDS credentials
resource "aws_secretsmanager_secret" "rds_credentials" {
  name        = "${var.name_prefix}-rds-credentials"
  description = "RDS credentials for ${var.name_prefix}"

  tags = var.tags
}

resource "aws_secretsmanager_secret_version" "rds_credentials" {
  secret_id = aws_secretsmanager_secret.rds_credentials.id
  secret_string = jsonencode({
    username = var.db_username
    password = random_password.db_password.result
  })
}

# RDS Parameter Group
resource "aws_db_parameter_group" "main" {
  count       = var.engine == "postgres" ? 1 : 0
  family      = "postgres15"
  name        = "${var.name_prefix}-pg-params"
  description = "Parameter group for ${var.name_prefix} PostgreSQL"

  parameter {
    name  = "log_statement"
    value = "all"
  }

  parameter {
    name  = "log_min_duration_statement"
    value = "1000"
  }

  tags = var.tags

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_db_parameter_group" "mysql" {
  count       = var.engine == "mysql" ? 1 : 0
  family      = "mysql8.0"
  name        = "${var.name_prefix}-mysql-params"
  description = "Parameter group for ${var.name_prefix} MySQL"

  parameter {
    name  = "general_log"
    value = "1"
  }

  parameter {
    name  = "slow_query_log"
    value = "1"
  }

  tags = var.tags

  lifecycle {
    create_before_destroy = true
  }
}

# RDS Instance
resource "aws_db_instance" "main" {
  identifier = "${var.name_prefix}-rds"

  # Engine configuration
  engine         = var.engine
  engine_version = local.actual_version
  instance_class = var.instance_class

  # Database configuration
  db_name  = var.db_name
  username = var.db_username
  password = random_password.db_password.result
  port     = local.actual_port

  # Storage configuration
  allocated_storage     = var.allocated_storage
  max_allocated_storage = var.max_allocated_storage
  storage_type          = var.storage_type
  storage_encrypted     = var.storage_encrypted

  # Network configuration
  db_subnet_group_name   = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.rds.id]
  publicly_accessible    = var.publicly_accessible

  # Parameter group
  parameter_group_name = var.engine == "postgres" ? aws_db_parameter_group.main[0].name : aws_db_parameter_group.mysql[0].name

  # Backup configuration
  backup_retention_period = var.backup_retention_period
  backup_window          = var.backup_window
  maintenance_window     = var.maintenance_window

  # Monitoring
  monitoring_interval = var.monitoring_interval
  monitoring_role_arn = var.monitoring_interval > 0 ? aws_iam_role.rds_enhanced_monitoring[0].arn : null

  # Other settings
  multi_az               = var.multi_az
  auto_minor_version_upgrade = var.auto_minor_version_upgrade
  deletion_protection    = var.deletion_protection
  skip_final_snapshot    = var.skip_final_snapshot
  final_snapshot_identifier = var.skip_final_snapshot ? null : "${var.name_prefix}-final-snapshot-${formatdate("YYYY-MM-DD-hhmm", timestamp())}"

  # Enable logging
  enabled_cloudwatch_logs_exports = var.engine == "postgres" ? ["postgresql"] : ["error", "general", "slow"]

  tags = merge(var.tags, {
    Name = "${var.name_prefix}-rds"
  })

  depends_on = [
    aws_db_subnet_group.main,
    aws_security_group.rds
  ]
}

# Enhanced monitoring IAM role (conditional)
resource "aws_iam_role" "rds_enhanced_monitoring" {
  count = var.monitoring_interval > 0 ? 1 : 0
  name  = "${var.name_prefix}-rds-monitoring-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "monitoring.rds.amazonaws.com"
        }
      }
    ]
  })

  tags = var.tags
}

resource "aws_iam_role_policy_attachment" "rds_enhanced_monitoring" {
  count      = var.monitoring_interval > 0 ? 1 : 0
  role       = aws_iam_role.rds_enhanced_monitoring[0].name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonRDSEnhancedMonitoringRole"
}

# Null resource to populate sample data
resource "null_resource" "populate_sample_data" {
  count = var.populate_sample_data ? 1 : 0

  # Trigger on RDS instance changes
  triggers = {
    rds_endpoint = aws_db_instance.main.endpoint
    sample_data  = var.engine == "postgres" ? filemd5("${path.module}/sample-data-postgres.sql") : filemd5("${path.module}/sample-data-mysql.sql")
  }

  # Wait for RDS to be available
  depends_on = [aws_db_instance.main]

  provisioner "local-exec" {
    command = var.engine == "postgres" ? local.postgres_populate_command : local.mysql_populate_command
    environment = {
      DB_HOST     = aws_db_instance.main.endpoint
      DB_PORT     = aws_db_instance.main.port
      DB_NAME     = aws_db_instance.main.db_name
      DB_USERNAME = aws_db_instance.main.username
      DB_PASSWORD = random_password.db_password.result
    }
  }
}

locals {
  postgres_populate_command = <<-EOT
    export PGPASSWORD="$DB_PASSWORD"
    # Wait for RDS to be ready (with timeout)
    timeout=300
    elapsed=0
    until pg_isready -h $DB_HOST -p $DB_PORT -U $DB_USERNAME; do
      if [ $elapsed -ge $timeout ]; then
        echo "Timeout waiting for PostgreSQL to be ready"
        exit 1
      fi
      echo "Waiting for PostgreSQL to be ready... ($elapsed/$timeout seconds)"
      sleep 5
      elapsed=$((elapsed + 5))
    done
    echo "PostgreSQL is ready, executing sample data script..."
    # Execute the sample data script
    psql -h $DB_HOST -p $DB_PORT -U $DB_USERNAME -d $DB_NAME -f ${path.module}/sample-data-postgres.sql
  EOT

  mysql_populate_command = <<-EOT
    # Wait for MySQL to be ready (with timeout)
    timeout=300
    elapsed=0
    until mysqladmin ping -h $DB_HOST -P $DB_PORT -u $DB_USERNAME -p$DB_PASSWORD --silent; do
      if [ $elapsed -ge $timeout ]; then
        echo "Timeout waiting for MySQL to be ready"
        exit 1
      fi
      echo "Waiting for MySQL to be ready... ($elapsed/$timeout seconds)"
      sleep 5
      elapsed=$((elapsed + 5))
    done
    echo "MySQL is ready, executing sample data script..."
    # Execute the sample data script
    mysql -h $DB_HOST -P $DB_PORT -u $DB_USERNAME -p$DB_PASSWORD $DB_NAME < ${path.module}/sample-data-mysql.sql
  EOT
}
