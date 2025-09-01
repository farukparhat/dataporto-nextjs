# Network configuration now comes from the VPC module; no inputs needed here

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
