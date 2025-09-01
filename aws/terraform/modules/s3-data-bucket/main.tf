locals {
  random_suffix = var.add_random_suffix && var.bucket_name == null ? substr(replace(random_id.bucket_suffix.hex, "-", ""), 0, 6) : null
  computed_name = var.bucket_name != null ? var.bucket_name : (var.add_random_suffix ? "${var.name_prefix}-data-${local.random_suffix}" : "${var.name_prefix}-data")
}

resource "random_id" "bucket_suffix" {
  keepers = {
    prefix = var.name_prefix
  }
  byte_length = 4
}

resource "aws_s3_bucket" "this" {
  bucket        = local.computed_name
  force_destroy = var.force_destroy

  tags = merge(var.tags, {
    Name = local.computed_name
  })
}

resource "aws_s3_bucket_public_access_block" "this" {
  bucket = aws_s3_bucket.this.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "this" {
  bucket = aws_s3_bucket.this.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_versioning" "this" {
  bucket = aws_s3_bucket.this.id
  versioning_configuration {
    status = var.versioning_enabled ? "Enabled" : "Suspended"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = var.kms_key_arn != null || var.create_kms_key ? "aws:kms" : "AES256"
      kms_master_key_id = var.kms_key_arn != null ? var.kms_key_arn : (var.create_kms_key ? aws_kms_key.this[0].arn : null)
    }
    bucket_key_enabled = true
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    id     = "abort-multipart-uploads"
    status = "Enabled"
    filter {
      prefix = ""
    }
    abort_incomplete_multipart_upload {
      days_after_initiation = 7
    }
  }
}

data "aws_iam_policy_document" "tls_only" {
  statement {
    sid     = "DenyInsecureTransport"
    effect  = "Deny"
    actions = ["s3:*"]
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    resources = [
      aws_s3_bucket.this.arn,
      "${aws_s3_bucket.this.arn}/*"
    ]
    condition {
      test     = "Bool"
      variable = "aws:SecureTransport"
      values   = ["false"]
    }
  }
}

resource "aws_s3_bucket_policy" "tls_only" {
  bucket = aws_s3_bucket.this.id
  policy = data.aws_iam_policy_document.tls_only.json
}

resource "aws_kms_key" "this" {
  count                   = var.create_kms_key ? 1 : 0
  description             = "KMS key for ${local.computed_name}"
  enable_key_rotation     = true
  deletion_window_in_days = 7

  tags = var.tags
}

resource "aws_kms_alias" "this" {
  count      = var.create_kms_key ? 1 : 0
  name       = "alias/${local.computed_name}"
  target_key_id = aws_kms_key.this[0].key_id
}

