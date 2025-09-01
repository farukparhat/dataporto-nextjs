# RDS outputs
output "rds_endpoint" {
  description = "RDS instance endpoint"
  value       = module.rds_with_sample_data.rds_endpoint
}

output "rds_database" {
  description = "RDS database name"
  value       = module.rds_with_sample_data.rds_database
}

output "rds_secrets_manager_secret_name" {
  description = "Name of the Secrets Manager secret containing RDS credentials"
  value       = module.rds_with_sample_data.rds_secrets_manager_secret_name
}

# DMS outputs
output "dms_replication_instance_arn" {
  description = "DMS replication instance ARN"
  value       = module.rds_to_s3.replication_instance_arn
}

output "dms_replication_task_arn" {
  description = "DMS replication task ARN"
  value       = module.rds_to_s3.replication_task_arn
}

# S3 outputs
output "s3_export_location" {
  description = "S3 location where data will be exported"
  value       = "s3://${module.data_bucket.bucket_name}/rds-exports/demo/"
}

# Connection information for manual testing
output "connection_info" {
  description = "Information for connecting to the demo database"
  value = {
    endpoint = module.rds_with_sample_data.rds_endpoint
    database = module.rds_with_sample_data.rds_database
    username = "demo_user"
    secret_name = module.rds_with_sample_data.rds_secrets_manager_secret_name
  }
  sensitive = false
}
