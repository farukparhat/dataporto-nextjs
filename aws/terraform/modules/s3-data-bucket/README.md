S3 Data Bucket Module

This module provisions a secure S3 bucket suitable for data lake style workloads, including RDS → S3 exports (Parquet) and later S3 → Snowflake ingestion.

Features
- Bucket with secure defaults: public access blocked, bucket owner enforced, ACLs disabled
- Default server-side encryption (SSE-S3) or optional KMS encryption
- Optional creation of a dedicated KMS key with rotation
- Versioning (enabled by default) and basic lifecycle for multipart uploads
- TLS-only bucket policy (deny non-TLS requests)

Inputs
- `name_prefix` (string): Prefix used to name resources
- `bucket_name` (string, optional): Explicit bucket name; if omitted, a random suffix is appended to `name_prefix`
- `add_random_suffix` (bool): Append a short random suffix to bucket name when `bucket_name` is not provided (default: true)
- `versioning_enabled` (bool): Enable bucket versioning (default: true)
- `force_destroy` (bool): Allow force destroy (default: true for demos)
- `kms_key_arn` (string, optional): Use this KMS key for encryption
- `create_kms_key` (bool): Create a dedicated KMS key (default: false)
- `tags` (map(string)): Tags to apply

Outputs
- `bucket_name` (string)
- `bucket_arn` (string)
- `bucket_id` (string)
- `kms_key_arn` (string, nullable)

Example
```hcl
module "data_bucket" {
  source           = "../../../../modules/s3-data-bucket"
  name_prefix      = "acme-demo"
  versioning_enabled = true
  create_kms_key   = true

  tags = {
    Project = "Acme"
    Env     = "demo"
  }
}
```

