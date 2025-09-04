# RDS to S3 Migration Demo

This demo showcases a complete end-to-end data migration pipeline from RDS (PostgreSQL) to S3 using AWS Database Migration Service (DMS). It creates a PostgreSQL RDS instance populated with sample e-commerce data and then migrates it to S3 in Parquet format.

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   RDS Instance  │    │   DMS Service   │    │   S3 Bucket     │
│                 │    │                 │    │                 │
│ • PostgreSQL    │───▶│ • Replication   │───▶│ • Parquet Files │
│ • Sample Data   │    │   Instance      │    │ • Partitioned   │
│ • Demo Schema   │    │ • Migration     │    │ • Compressed    │
│                 │    │   Tasks         │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## What This Demo Creates

### 1. RDS Instance with Sample Data

- **Engine**: PostgreSQL 15.4
- **Instance**: db.t3.micro (cost-effective for demo)
- **Sample Data**: E-commerce dataset with customers, products, orders, and order items
- **Security**: Credentials stored in AWS Secrets Manager
- **Networking**: Deployed in private subnets with appropriate security groups

### 2. DMS Migration Pipeline

- **Replication Instance**: dms.t3.micro
- **Migration Type**: Full load (CDC disabled for demo simplicity)
- **Source**: PostgreSQL RDS instance
- **Target**: S3 bucket with Parquet format
- **Schema**: Migrates the entire 'demo' schema

### 3. Sample Data Schema

The demo creates realistic e-commerce data:

- **customers** (5 sample records)
  - customer_id, name, email, created_at
- **products** (5 sample records)
  - product_id, name, description, price_cents, category, created_at
- **orders** (6 sample records)
  - order_id, customer_id, order_date, status, total_cents, created_at
- **order_items** (11 sample records)
  - order_item_id, order_id, product_id, quantity, unit_price_cents, created_at

## Prerequisites

1. **AWS CLI** configured with appropriate credentials
2. **Terraform** >= 1.0 installed
3. **PostgreSQL client** (`psql`) for sample data population
4. **VPC and Subnets** in at least 2 availability zones
5. **S3 bucket** for data exports

## Usage

### 1. Configure Variables

Copy the example variables file and customize:

```bash
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` with your AWS resources:

```hcl
# Network configuration
vpc_id = "vpc-0123456789abcdef0"
subnet_ids = [
  "subnet-0123456789abcdef0",  # us-west-1a
  "subnet-0123456789abcdef1",  # us-west-1b
]
vpc_cidr = "10.0.0.0/16"

# S3 configuration
s3_bucket = "your-demo-data-lake-bucket"
```

### 2. Deploy the Infrastructure

```bash
# Initialize Terraform
terraform init

# Review the plan
terraform plan

# Deploy the resources
terraform apply
```

### 3. Monitor the Migration

The deployment will:

1. Create the RDS instance (~5-10 minutes)
2. Populate it with sample data (~1-2 minutes)
3. Create DMS resources (~5 minutes)
4. Start the migration task automatically

You can monitor progress in the AWS DMS console.

### 4. Verify the Results

Check the S3 bucket for exported data:

```bash
aws s3 ls s3://your-demo-data-lake-bucket/rds-exports/demo/ --recursive
```

Expected output structure:

```
rds-exports/demo/demo/customers/
rds-exports/demo/demo/products/
rds-exports/demo/demo/orders/
rds-exports/demo/demo/order_items/
```

### 5. Connect to the Database (Optional)

Retrieve the database password from Secrets Manager:

```bash
# Get the secret name from Terraform output
SECRET_NAME=$(terraform output -raw rds_secrets_manager_secret_name)

# Retrieve the password
aws secretsmanager get-secret-value --secret-id $SECRET_NAME \
  --query SecretString --output text | jq -r .password
```

Connect using psql:

```bash
ENDPOINT=$(terraform output -raw rds_endpoint)
psql -h $ENDPOINT -U demo_user -d demo
```

Query the sample data:

```sql
-- View all tables
\dt demo.*

-- Sample queries
SELECT count(*) FROM demo.customers;
SELECT count(*) FROM demo.orders;
SELECT count(*) FROM demo.order_items;

-- Join query example
SELECT
  c.name as customer_name,
  o.order_date,
  o.status,
  o.total_cents / 100.0 as total_dollars
FROM demo.customers c
JOIN demo.orders o ON c.customer_id = o.customer_id
ORDER BY o.order_date DESC;
```

## Outputs

After deployment, you'll see outputs including:

- `rds_endpoint`: Database connection endpoint
- `s3_export_location`: Where your data will be exported
- `connection_info`: Database connection details
- DMS resource ARNs for monitoring

## Cleanup

To avoid ongoing costs, destroy the resources when done:

```bash
terraform destroy
```

## Cost Estimation

This demo uses cost-effective resources:

- **db.t3.micro RDS**: ~$13/month (if left running)
- **dms.t3.micro DMS**: ~$25/month (if left running)
- **S3 storage**: Minimal for demo data
- **Data transfer**: Negligible for demo dataset

**Recommendation**: Run the demo and destroy resources when finished to minimize costs.

## Troubleshooting

### Common Issues

1. **"Subnet group needs at least 2 subnets in different AZs"**
   - Ensure your `subnet_ids` includes subnets from at least 2 availability zones

2. **"S3 bucket does not exist"**
   - Create the S3 bucket before running terraform, or add it to your terraform configuration

3. **"PostgreSQL client not found"**
   - Install PostgreSQL client: `brew install postgresql` (macOS) or equivalent

4. **DMS task fails**
   - Check DMS console for detailed error messages
   - Verify security groups allow communication between DMS and RDS
   - Ensure the demo schema exists (should be created automatically)

### Logs and Monitoring

- **RDS logs**: Available in CloudWatch Logs
- **DMS logs**: Available in DMS console and CloudWatch
- **Migration progress**: Monitor in DMS console

## Next Steps

After running this demo, you can:

1. **Enable CDC**: Set `enable_cdc = true` to capture ongoing changes
2. **Try different formats**: Change `s3_data_format` to "csv"
3. **Add transformations**: Modify the DMS task to include data transformations
4. **Scale up**: Use larger instance sizes for production workloads
5. **Add monitoring**: Set up CloudWatch alarms for migration tasks

## Files in This Demo

- `main.tf`: Main Terraform configuration
- `variables.tf`: Input variables
- `outputs.tf`: Output values
- `terraform.tfvars.example`: Example variable values
- `README.md`: This documentation
