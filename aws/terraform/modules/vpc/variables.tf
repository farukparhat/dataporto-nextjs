variable "name_prefix" {
  description = "Prefix for all VPC resources"
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
}

variable "num_azs" {
  description = "Number of AZs to span (public+private subnets)"
  type        = number
  default     = 2
}

variable "tags" {
  description = "Common tags to apply to resources"
  type        = map(string)
  default     = {}
}


