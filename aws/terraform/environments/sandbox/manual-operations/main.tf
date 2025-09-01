provider "aws" {
    region = "us-west-1"
}

module "s3_bucket" {
  source           = "../../../modules/s3-data-bucket"
  name_prefix      = "manual-operations"
  versioning_enabled = true
  create_kms_key   = true

  tags = {
    Project = "Manual Operations"
    Env     = "manual-operations"
    Purpose = "Manual Operations"
  }
}