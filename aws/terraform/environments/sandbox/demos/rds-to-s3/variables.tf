# Network configuration
variable "vpc_id" {
  description = "VPC ID where resources will be deployed"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs for RDS and DMS (should be in different AZs)"
  type        = list(string)
}

variable "vpc_cidr" {
  description = "VPC CIDR block for security group rules"
  type        = string
  default     = "10.0.0.0/16"
}

# S3 configuration
variable "s3_bucket" {
  description = "S3 bucket name for data exports"
  type        = string
}

variable "s3_kms_key_arn" {
  description = "KMS key ARN for S3 encryption (optional)"
  type        = string
  default     = null
}
