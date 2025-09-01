# Terraform RDS Demo

This project spins up a **PostgreSQL RDS instance** in AWS using Terraform and seeds it with sample data for testing and demos.

## 📂 Project Structure
```
terraform-rds-demo/
├── main.tf              # Main Terraform config (RDS + security group)
├── variables.tf         # Input variable definitions
├── terraform.tfvars     # Your environment-specific values (username, password, IP)
├── seed/
│   └── seed.sql         # SQL script to create tables and insert sample data
└── README.md
```

---

## 🚀 Getting Started

### 1. Configure variables
Edit **terraform.tfvars** with your values:

```hcl
project     = "dataporto"
aws_region  = "us-west-1"
db_username = "demo_user"
db_password = "ChangeMe123!Strong"
my_ip_cidr  = "95.98.37.17/32"   # Your IP address with /32
```

> ⚠️ If your ISP changes your IP, update `my_ip_cidr` and re-run `terraform apply`.

---

### 2. Deploy infrastructure
```bash
terraform init
terraform apply -auto-approve
```

This will:
- Create a PostgreSQL RDS instance in your default VPC
- Restrict access to only your IP address

---

### 3. Seed database
Once RDS is ready, run:

```bash
PGPASSWORD='ChangeMe123!Strong' psql \
  "host=$(terraform output -raw rds_endpoint) port=5432 user=demo_user dbname=demo sslmode=require" \
  -f ./seed/seed.sql
```

This will create `demo.customers` and `demo.orders` tables with sample data.

---

### 4. Connect to the database

#### 🔗 From CLI
```bash
PGPASSWORD='ChangeMe123!Strong' psql \
  "host=$(terraform output -raw rds_endpoint) port=5432 user=demo_user dbname=demo sslmode=require"
```

#### 🐘 DBeaver
1. **Database → New Database Connection → PostgreSQL**
2. Host: `terraform output -raw rds_endpoint`
3. Port: `5432`
4. Database: `demo`
5. User: `demo_user`
6. Password: `ChangeMe123!Strong`
7. SSL: Require → Test Connection → Finish

#### 💻 VS Code
- Install **PostgreSQL** extension (`ms-ossdata.vscode-postgresql`)  
  or **SQLTools + PostgreSQL Driver** (`mtxr.sqltools`, `mtxr.sqltools-driver-pg`).  
- Add a new connection with the same host/port/credentials above.

---

### 5. Tear down
```bash
terraform destroy -auto-approve
```

---

## 📊 Sample Queries

```sql
select * from demo.customers;
select * from demo.orders;
```

---

## 📝 Notes
- State file (`terraform.tfstate`) is local in this demo. In real projects, use a **remote backend** (S3 + DynamoDB, Terraform Cloud, etc.).
- RDS is **publicly accessible** in this setup for simplicity. For production, run it in private subnets and connect via VPN, bastion, or SSM.
- Database password is stored in plain text here — for real deployments, use **AWS Secrets Manager** or **SSM Parameter Store**.
