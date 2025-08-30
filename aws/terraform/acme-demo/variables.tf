variable "project" {
  type        = string
  description = "Project prefix"
}

variable "aws_region" {
  type        = string
  description = "AWS region"
  default     = "us-east-1"
}

variable "db_username" {
  type        = string
  description = "Postgres username"
}

variable "db_password" {
  type        = string
  description = "Postgres password"
  sensitive   = true
}

variable "my_ip_cidr" {
  type        = string
  description = "Your public IP in CIDR (e.g., 198.51.100.7/32)"
}