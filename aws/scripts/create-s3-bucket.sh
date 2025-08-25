#!/bin/bash

# ===== CONFIGURE THESE =====
AWS_REGION="us-west-1"              # Change to your preferred region
BUCKET_NAME="dataporto-lab-demo-$RANDOM"   # Random suffix to ensure uniqueness
PROFILE_NAME="default"              # AWS CLI profile to use (set to match your AWS credentials)

echo "Creating S3 bucket: $BUCKET_NAME in region: $AWS_REGION"

# 1. Create bucket
aws s3api create-bucket \
    --bucket "$BUCKET_NAME" \
    --region "$AWS_REGION" \
    --create-bucket-configuration LocationConstraint="$AWS_REGION" \
    --profile "$PROFILE_NAME"

# 2. Block all public access
aws s3api put-public-access-block \
    --bucket "$BUCKET_NAME" \
    --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true \
    --profile "$PROFILE_NAME"

# 3. Enable versioning
aws s3api put-bucket-versioning \
    --bucket "$BUCKET_NAME" \
    --versioning-configuration Status=Enabled \
    --profile "$PROFILE_NAME"

# 4. Confirm
echo "Bucket '$BUCKET_NAME' created and secured."
echo "To upload sample data: aws s3 cp sample.csv s3://$BUCKET_NAME/demo/"