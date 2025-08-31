variable "name_prefix" { type = string }

variable "vpc_id" { type = string }
variable "subnet_ids" { type = list(string) }

# Existing RDS SG to allow DMS ingress into
variable "rds_security_group_id" { type = string }

# RDS connection
variable "rds_engine" { type = string } # "postgres" or "mysql"
variable "rds_hostname" { type = string }
variable "rds_port" { type = number }
variable "rds_database" { type = string }

# Secrets Manager
variable "rds_secrets_manager_secret_arn" {
  type    = string
}

# What to move
variable "include_schemas" {
  type        = list(string)
  description = "Schemas to include (e.g., [\"public\"])"
}

variable "exclude_tables" {
  description = "Tables to exclude, list of objects: { schema = \"public\", table = \"audit_*\" }"
  type = list(object({
    schema = string
    table  = string
  }))
  default = []
}

# S3 target
variable "s3_bucket" { type = string }
variable "s3_prefix" {
  type    = string
  default = "rds_exports/"
}

variable "s3_kms_key_arn" {
  type    = string
  default = null
}

variable "s3_data_format" {
  type    = string
  default = "parquet"
} # "parquet" or "csv"

variable "s3_compression_type" {
  type    = string
  default = "GZIP"
} # "GZIP" or "NONE"

variable "cdc_path" {
  type    = string
  default = "cdc/"
}

variable "timestamp_column_name" {
  type    = string
  default = "_ingested_at"
}

variable "max_file_mb" {
  type    = number
  default = 128
}

# DMS instance sizing
variable "replication_instance_class" {
  type    = string
  default = "dms.t3.medium"
}

variable "replication_allocated_storage" {
  type    = number
  default = 100
}

variable "multi_az" {
  type    = bool
  default = false
}

variable "engine_version" {
  type    = string
  default = "3.5.1"
}

variable "maintenance_window" {
  type    = string
  default = "Sun:03:00-Sun:04:00"
}

# Source endpoint tuning
variable "source_extra_connection_attributes" {
  type        = string
  default     = ""
  description = "DMS extra attributes, e.g. 'useTaskStartTimeForFullLoadTimestamp=true'"
}

# CDC on/off
variable "enable_cdc" {
  type    = bool
  default = false
}

# Tags
variable "tags" {
  type    = map(string)
  default = {}
}