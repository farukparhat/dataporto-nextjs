provider "aws" {
  region = "us-west-1"
}

# Create RDS instance with sample data
module "rds_with_sample_data" {
  source = "../../../../modules/rds-with-sample-data"

  name_prefix = "acme-demo"
  vpc_id      = var.vpc_id
  subnet_ids  = var.subnet_ids

  # Database configuration
  engine         = "postgres"
  instance_class = "db.t3.micro"
  db_name        = "demo"
  db_username    = "demo_user"

  # Network security - allow access from VPC
  allowed_cidr_blocks = [var.vpc_cidr]

  # Enable sample data population
  populate_sample_data = true

  # Storage configuration
  allocated_storage     = 20
  max_allocated_storage = 100
  storage_encrypted     = true

  # Backup and maintenance
  backup_retention_period = 7
  skip_final_snapshot     = true  # For demo purposes

  tags = {
    Project = "Acme"
    Env     = "demo"
    Purpose = "RDS-to-S3-migration-demo"
  }
}

# Migrate data from RDS to S3 using DMS
module "rds_to_s3" {
  source      = "../../../../modules/dms-rds-to-s3"
  name_prefix = "acme-demo"

  vpc_id     = var.vpc_id
  subnet_ids = var.subnet_ids

  # Use outputs from the RDS module
  rds_security_group_id = module.rds_with_sample_data.rds_security_group_id
  rds_engine            = module.rds_with_sample_data.rds_engine
  rds_hostname          = module.rds_with_sample_data.rds_hostname
  rds_port              = module.rds_with_sample_data.rds_port
  rds_database          = module.rds_with_sample_data.rds_database

  # Use Secrets Manager for credentials (preferred approach)
  rds_secrets_manager_secret_arn = module.rds_with_sample_data.rds_secrets_manager_secret_arn

  # Include the demo schema created by the sample data
  include_schemas = ["demo"]
  exclude_tables  = []  # Include all tables for demo

  # S3 destination configuration
  s3_bucket      = var.s3_bucket
  s3_prefix      = "rds-exports/demo/"
  s3_kms_key_arn = var.s3_kms_key_arn
  s3_data_format = "parquet"
  cdc_path       = "cdc/"
  enable_cdc     = false  # Start with full load only for demo

  # DMS instance configuration
  replication_instance_class    = "dms.t3.micro"
  replication_allocated_storage = 20

  tags = {
    Project = "Acme"
    Env     = "demo"
    Purpose = "RDS-to-S3-migration-demo"
  }

  # Make sure RDS is ready before starting DMS
  depends_on = [module.rds_with_sample_data]
}