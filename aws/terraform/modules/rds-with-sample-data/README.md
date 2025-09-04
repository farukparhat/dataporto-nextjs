# RDS with Sample Data Module

This Terraform module creates an RDS instance (PostgreSQL or MySQL) with sample data for demonstration purposes. It's designed to work seamlessly with the `dms-rds-to-s3` module for data migration scenarios.

## Features

- Creates RDS instance with configurable engine (PostgreSQL or MySQL)
- Sets up appropriate security groups and subnet groups
- Stores credentials securely in AWS Secrets Manager
- Automatically populates database with sample data
- Includes comprehensive monitoring and backup configuration
- Outputs all necessary connection details for DMS integration

## Sample Data Schema

The module creates a demo schema with the following tables:

- **customers**: Customer information with ID, name, email, and timestamps
- **products**: Product catalog with pricing and categories
- **orders**: Order records linked to customers
- **order_items**: Order line items linking orders and products

## Usage

```hcl
module "rds_with_sample_data" {
  source = "./modules/rds-with-sample-data"

  name_prefix = "demo"
  vpc_id      = var.vpc_id
  subnet_ids  = var.private_subnet_ids

  # Database configuration
  engine          = "postgres"  # or "mysql"
  instance_class  = "db.t3.micro"
  db_name         = "demo"
  db_username     = "demo_user"

  # Network security
  allowed_cidr_blocks = ["10.0.0.0/8"]

  # Sample data
  populate_sample_data = true

  tags = {
    Environment = "demo"
    Purpose     = "data-migration-demo"
  }
}
```

## Integration with DMS Module

This module outputs all the required variables for the `dms-rds-to-s3` module:

```hcl
module "dms_migration" {
  source = "./modules/dms-rds-to-s3"

  # Use outputs from this module
  rds_engine                        = module.rds_with_sample_data.rds_engine
  rds_hostname                      = module.rds_with_sample_data.rds_hostname
  rds_port                          = module.rds_with_sample_data.rds_port
  rds_database                      = module.rds_with_sample_data.rds_database
  rds_security_group_id            = module.rds_with_sample_data.rds_security_group_id
  rds_secrets_manager_secret_arn   = module.rds_with_sample_data.rds_secrets_manager_secret_arn

  # Other required variables...
  name_prefix = "demo"
  vpc_id      = var.vpc_id
  subnet_ids  = var.private_subnet_ids
  s3_bucket   = "your-demo-bucket"
}
```

## Requirements

- Terraform >= 1.0
- AWS Provider >= 5.0
- PostgreSQL client (`psql`) or MySQL client (`mysql`) on the machine running Terraform (for sample data population)

## Variables

| Name                 | Description                             | Type         | Default       | Required |
| -------------------- | --------------------------------------- | ------------ | ------------- | -------- |
| name_prefix          | Prefix for all resource names           | string       | -             | yes      |
| vpc_id               | VPC ID where RDS will be deployed       | string       | -             | yes      |
| subnet_ids           | List of subnet IDs for RDS subnet group | list(string) | -             | yes      |
| engine               | Database engine (postgres or mysql)     | string       | "postgres"    | no       |
| instance_class       | RDS instance class                      | string       | "db.t3.micro" | no       |
| populate_sample_data | Whether to populate with sample data    | bool         | true          | no       |

## Outputs

| Name                           | Description                       |
| ------------------------------ | --------------------------------- |
| rds_endpoint                   | RDS instance endpoint             |
| rds_hostname                   | RDS instance hostname             |
| rds_port                       | RDS instance port                 |
| rds_engine                     | RDS engine type                   |
| rds_database                   | RDS database name                 |
| rds_security_group_id          | Security group ID for RDS         |
| rds_secrets_manager_secret_arn | ARN of the Secrets Manager secret |

## Notes

- The module uses `local-exec` provisioner to populate sample data, which requires the appropriate database client on the Terraform execution environment
- Passwords are randomly generated and stored in AWS Secrets Manager
- The sample data includes realistic e-commerce data with customers, products, orders, and order items
- For production use, consider disabling `populate_sample_data` and using your own data initialization process
