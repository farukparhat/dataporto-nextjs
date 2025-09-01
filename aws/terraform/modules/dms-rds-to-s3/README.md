# dms-rds-to-s3 (Terraform Module)

Provision an AWS Database Migration Service (DMS) pipeline that extracts data from an existing Amazon RDS database and lands it into Amazon S3 as Parquet or CSV files. Supports full load only or full load + CDC.

## What this module creates

- DMS networking:
  - `aws_dms_replication_subnet_group`
  - `aws_security_group` for the DMS instance
  - `aws_security_group_rule` to allow DMS to reach your RDS security group on its port
- IAM:
  - Role and policy for DMS to write to S3 (optionally with KMS)
  - Role and policy for DMS to read credentials from AWS Secrets Manager
- DMS components:
  - `aws_dms_replication_instance`
  - Source endpoint for RDS using Secrets Manager
  - Target S3 endpoint with Parquet/CSV configuration
  - Table mappings based on included schemas and excluded tables
  - `aws_dms_replication_task` configured for full-load or full-load-and-cdc

Note: The task is created but not automatically started. You can start it from the AWS Console or using the AWS CLI after `terraform apply`.

## Prerequisites

- An existing VPC and private subnets with NAT egress so DMS can reach S3 and Secrets Manager
- An existing RDS instance (PostgreSQL or MySQL) reachable from the DMS instance subnets
- The RDS instance's security group ID (so the module can allow DMS ingress on the DB port)
- An S3 bucket for data landing (optionally encrypted with a customer-managed KMS key)
- A Secrets Manager secret containing RDS credentials in the standard format for DMS
- Engine-specific configuration for CDC (only if `enable_cdc = true`):
  - PostgreSQL: logical replication enabled (e.g., `rds.logical_replication = 1`) and a replication-capable user
  - MySQL: binary logging enabled with appropriate binlog format and retention

### Secrets Manager secret format (example)

```json
{
  "username": "demo_user",
  "password": "your-strong-password",
  "engine": "postgres", // or "mysql"
  "host": "rds-instance.abc123.us-west-1.rds.amazonaws.com",
  "port": 5432,
  "dbname": "demo"
}
```

## Usage

Minimal example (see full demo under `aws/terraform/environments/sandbox/demos/rds-to-s3`):

```hcl
module "rds_to_s3" {
  source      = "../../../../modules/dms-rds-to-s3"
  name_prefix = "acme-demo"

  # Networking
  vpc_id     = module.network.vpc_id
  subnet_ids = module.network.private_subnet_ids

  # RDS connection
  rds_security_group_id          = module.rds_with_sample_data.rds_security_group_id
  rds_engine                     = module.rds_with_sample_data.rds_engine   # "postgres" or "mysql"
  rds_hostname                   = module.rds_with_sample_data.rds_hostname
  rds_port                       = module.rds_with_sample_data.rds_port
  rds_database                   = module.rds_with_sample_data.rds_database
  rds_secrets_manager_secret_arn = module.rds_with_sample_data.rds_secrets_manager_secret_arn

  # Selection
  include_schemas = ["demo"]
  exclude_tables  = []

  # S3 target
  s3_bucket      = module.data_bucket.bucket_name
  s3_prefix      = "rds-exports/demo/"
  s3_kms_key_arn = module.data_bucket.kms_key_arn
  s3_data_format = "parquet"  # or "csv"
  cdc_path       = "cdc/"

  # DMS instance sizing (for demo only)
  replication_instance_class    = "dms.t3.micro"
  replication_allocated_storage = 20

  # CDC disabled for initial full load
  enable_cdc = false

  tags = {
    Project = "Acme"
    Env     = "demo"
  }
}
```

After apply, start the task (one-time full load example):

```bash
aws dms start-replication-task \
  --replication-task-arn $(terraform output -raw replication_task_arn) \
  --start-replication-task-type start-replication
```

## Inputs

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name_prefix` | `string` | n/a | Prefix for all created resources |
| `vpc_id` | `string` | n/a | VPC ID hosting the DMS instance |
| `subnet_ids` | `list(string)` | n/a | Private subnet IDs for the DMS subnet group |
| `rds_security_group_id` | `string` | n/a | Existing RDS SG to allow DMS ingress into |
| `rds_engine` | `string` | n/a | `postgres` or `mysql` |
| `rds_hostname` | `string` | n/a | RDS endpoint hostname |
| `rds_port` | `number` | n/a | RDS port |
| `rds_database` | `string` | n/a | Database name |
| `rds_secrets_manager_secret_arn` | `string` | n/a | ARN of Secrets Manager secret with DB credentials |
| `include_schemas` | `list(string)` | n/a | Schemas to include, e.g., `["public"]` |
| `exclude_tables` | `list(object({ schema = string, table = string }))` | `[]` | Tables to exclude (supports wildcards like `audit_*`) |
| `s3_bucket` | `string` | n/a | Destination S3 bucket name |
| `s3_prefix` | `string` | `"rds_exports/"` | Prefix/folder under the bucket |
| `s3_kms_key_arn` | `string` | `null` | KMS key ARN for S3 server-side encryption |
| `s3_data_format` | `string` | `"parquet"` | `parquet` or `csv` |
| `s3_compression_type` | `string` | `"GZIP"` | `GZIP` or `NONE` |
| `cdc_path` | `string` | `"cdc/"` | Path for CDC files under `s3_prefix` |
| `timestamp_column_name` | `string` | `"_ingested_at"` | Column name for DMS-added ingestion timestamp |
| `max_file_mb` | `number` | `128` | Max file size for S3 target files (MB) |
| `replication_instance_class` | `string` | `"dms.t3.medium"` | DMS instance class |
| `replication_allocated_storage` | `number` | `100` | Storage (GB) for the DMS instance |
| `multi_az` | `bool` | `false` | Whether to deploy the DMS instance across AZs |
| `engine_version` | `string` | `"3.5.1"` | DMS engine version |
| `source_extra_connection_attributes` | `string` | `""` | DMS extra attributes for source endpoint |
| `enable_cdc` | `bool` | `false` | Use `full-load-and-cdc` when `true` |
| `tags` | `map(string)` | `{}` | Tags applied to created resources |

## Outputs

| Name | Description |
|------|-------------|
| `replication_instance_arn` | ARN of the DMS replication instance |
| `replication_task_arn` | ARN of the DMS replication task |
| `source_endpoint_arn` | ARN of the DMS source endpoint (RDS) |
| `target_endpoint_arn` | ARN of the DMS target endpoint (S3) |
| `dms_security_group_id` | Security group ID attached to the DMS instance |

## Notes and tips

- Ensure your DMS instance subnets have NAT access; otherwise S3 and Secrets Manager calls will fail.
- For PostgreSQL, consider setting `source_extra_connection_attributes` with useful flags like `useTaskStartTimeForFullLoadTimestamp=true`.
- For large tables, tune `max_file_mb` and consider compression to balance object counts and size.
- When enabling CDC, validate engine-specific settings and IAM/S3 lifecycle policies for ongoing write volume.
- Deleting the replication task does not delete files written to S3; manage lifecycle with S3 policies.

## Cleaning up

- Stop the DMS task (if running), then `terraform destroy` this module and any dependent modules (RDS, S3) to avoid ongoing costs.

---

For a working end-to-end example, see `aws/terraform/environments/sandbox/demos/rds-to-s3` in this repository.
