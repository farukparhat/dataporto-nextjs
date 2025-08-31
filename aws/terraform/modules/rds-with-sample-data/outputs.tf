# RDS instance information
output "rds_instance_id" {
  description = "RDS instance identifier"
  value       = aws_db_instance.main.identifier
}

output "rds_endpoint" {
  description = "RDS instance endpoint"
  value       = aws_db_instance.main.endpoint
}

output "rds_hostname" {
  description = "RDS instance hostname (endpoint without port)"
  value       = aws_db_instance.main.address
}

output "rds_port" {
  description = "RDS instance port"
  value       = aws_db_instance.main.port
}

output "rds_engine" {
  description = "RDS engine type"
  value       = aws_db_instance.main.engine
}

output "rds_database" {
  description = "RDS database name"
  value       = aws_db_instance.main.db_name
}

output "rds_username" {
  description = "RDS master username"
  value       = aws_db_instance.main.username
  sensitive   = true
}

# Security group information
output "rds_security_group_id" {
  description = "Security group ID for RDS instance"
  value       = aws_security_group.rds.id
}

# Secrets Manager information
output "rds_secrets_manager_secret_arn" {
  description = "ARN of the Secrets Manager secret containing RDS credentials"
  value       = aws_secretsmanager_secret.rds_credentials.arn
}

output "rds_secrets_manager_secret_name" {
  description = "Name of the Secrets Manager secret containing RDS credentials"
  value       = aws_secretsmanager_secret.rds_credentials.name
}

# Connection string helper outputs
output "connection_string_postgres" {
  description = "PostgreSQL connection string (only if engine is postgres)"
  value       = var.engine == "postgres" ? "postgresql://${aws_db_instance.main.username}:${random_password.db_password.result}@${aws_db_instance.main.endpoint}/${aws_db_instance.main.db_name}" : null
  sensitive   = true
}

output "connection_string_mysql" {
  description = "MySQL connection string (only if engine is mysql)"
  value       = var.engine == "mysql" ? "mysql://${aws_db_instance.main.username}:${random_password.db_password.result}@${aws_db_instance.main.endpoint}:${aws_db_instance.main.port}/${aws_db_instance.main.db_name}" : null
  sensitive   = true
}
