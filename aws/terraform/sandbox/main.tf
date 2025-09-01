terraform {
  required_version = ">= 1.6.0"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.56" }
    random = { source = "hashicorp/random", version = "~> 3.6" }
  }
}

provider "aws" {
  region = var.aws_region
}

# Grab default VPC + subnets so we don't create networking
data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# DB subnet group from default subnets
resource "aws_db_subnet_group" "this" {
  name       = "${var.project}-demo-subnets"
  subnet_ids = data.aws_subnets.default.ids
}

# Security group that only allows your IP to reach Postgres
resource "aws_security_group" "rds" {
  name        = "${var.project}-demo-rds-sg"
  description = "Allow Postgres from your IP"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = [var.my_ip_cidr]   # e.g., "203.0.113.5/32"
    description = "Your IP only"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Random suffix so identifier is unique
resource "random_string" "sfx" {
  length  = 4
  upper   = false
  special = false
}

resource "aws_db_instance" "postgres" {
  identifier                = "${var.project}-demo"
  engine                    = "postgres"
  engine_version            = "16.3"
  instance_class            = "db.t4g.micro"
  allocated_storage         = 20
  username                  = var.db_username
  password                  = var.db_password
  db_name                   = "demo"
  port                      = 5432
  publicly_accessible       = true              # keep simple for demo
  vpc_security_group_ids    = [aws_security_group.rds.id]
  db_subnet_group_name      = aws_db_subnet_group.this.name
  skip_final_snapshot       = true
  deletion_protection       = false
  storage_encrypted         = true
  backup_retention_period   = 0                # demo
  apply_immediately         = true
  auto_minor_version_upgrade = true

  tags = { Name = "${var.project}-demo" }
}

output "rds_endpoint" {
  value = aws_db_instance.postgres.address
}

output "psql_conn_string" {
  value = "psql \"host=${aws_db_instance.postgres.address} port=5432 user=${var.db_username} dbname=demo sslmode=require\""
}

output "seed_command" {
  value = "PGPASSWORD='${var.db_password}' psql \"host=${aws_db_instance.postgres.address} port=5432 user=${var.db_username} dbname=demo sslmode=require\" -f ./seed/seed.sql"
  sensitive = true
}