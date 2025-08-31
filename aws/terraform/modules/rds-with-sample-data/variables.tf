# Basic configuration
variable "name_prefix" {
  description = "Prefix for all resource names"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID where RDS will be deployed"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs for RDS subnet group (should be in different AZs)"
  type        = list(string)
  validation {
    condition     = length(var.subnet_ids) >= 2
    error_message = "At least 2 subnets in different AZs are required for RDS."
  }
}

variable "allowed_cidr_blocks" {
  description = "CIDR blocks allowed to connect to RDS"
  type        = list(string)
  default     = ["10.0.0.0/8"]
}

# Database configuration
variable "engine" {
  description = "Database engine (postgres or mysql)"
  type        = string
  default     = "postgres"
  validation {
    condition     = contains(["postgres", "mysql"], var.engine)
    error_message = "Engine must be either 'postgres' or 'mysql'."
  }
}

variable "engine_version" {
  description = "Database engine version"
  type        = string
  default     = null
}

variable "instance_class" {
  description = "RDS instance class"
  type        = string
  default     = "db.t3.micro"
}

variable "db_name" {
  description = "Name of the database to create"
  type        = string
  default     = "demo"
}

variable "db_username" {
  description = "Master username for the database"
  type        = string
  default     = "demo_user"
}

variable "db_port" {
  description = "Port for the database"
  type        = number
  default     = null
}

# Storage configuration
variable "allocated_storage" {
  description = "Initial storage allocation in GB"
  type        = number
  default     = 20
}

variable "max_allocated_storage" {
  description = "Maximum storage allocation in GB (enables storage autoscaling)"
  type        = number
  default     = 100
}

variable "storage_type" {
  description = "Storage type (gp2, gp3, io1, io2)"
  type        = string
  default     = "gp3"
}

variable "storage_encrypted" {
  description = "Enable storage encryption"
  type        = bool
  default     = true
}

# Network configuration
variable "publicly_accessible" {
  description = "Make RDS instance publicly accessible"
  type        = bool
  default     = false
}

# Backup and maintenance
variable "backup_retention_period" {
  description = "Backup retention period in days"
  type        = number
  default     = 7
}

variable "backup_window" {
  description = "Preferred backup window"
  type        = string
  default     = "03:00-04:00"
}

variable "maintenance_window" {
  description = "Preferred maintenance window"
  type        = string
  default     = "Sun:04:00-Sun:05:00"
}

# Monitoring
variable "monitoring_interval" {
  description = "Enhanced monitoring interval in seconds (0, 1, 5, 10, 15, 30, 60)"
  type        = number
  default     = 0
  validation {
    condition     = contains([0, 1, 5, 10, 15, 30, 60], var.monitoring_interval)
    error_message = "Monitoring interval must be one of: 0, 1, 5, 10, 15, 30, 60."
  }
}

# High availability
variable "multi_az" {
  description = "Enable Multi-AZ deployment"
  type        = bool
  default     = false
}

# Other settings
variable "auto_minor_version_upgrade" {
  description = "Enable automatic minor version upgrades"
  type        = bool
  default     = true
}

variable "deletion_protection" {
  description = "Enable deletion protection"
  type        = bool
  default     = false
}

variable "skip_final_snapshot" {
  description = "Skip final snapshot when deleting"
  type        = bool
  default     = true
}

# Sample data
variable "populate_sample_data" {
  description = "Whether to populate the database with sample data"
  type        = bool
  default     = true
}

# Tags
variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default     = {}
}

# Local values for default ports and versions
locals {
  default_ports = {
    postgres = 5432
    mysql    = 3306
  }
  
  default_versions = {
    postgres = "15.4"
    mysql    = "8.0.35"
  }
  
  actual_port = var.db_port != null ? var.db_port : local.default_ports[var.engine]
  actual_version = var.engine_version != null ? var.engine_version : local.default_versions[var.engine]
}
