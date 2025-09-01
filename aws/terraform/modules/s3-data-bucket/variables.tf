variable "name_prefix" { type = string }

variable "bucket_name" {
  type        = string
  default     = null
  description = "Explicit bucket name. If null, name will be generated from name_prefix and random suffix"
}

variable "add_random_suffix" {
  type        = bool
  default     = true
}

variable "versioning_enabled" {
  type        = bool
  default     = true
}

variable "force_destroy" {
  type        = bool
  default     = true
}

variable "kms_key_arn" {
  type        = string
  default     = null
}

variable "create_kms_key" {
  type        = bool
  default     = false
}

variable "tags" {
  type        = map(string)
  default     = {}
}

