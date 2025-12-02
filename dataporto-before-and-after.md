# How Data Providers & SaaS Companies Solve Client Data Sharing Today

## 1. The Typical “Custom Build” Approach Today

When clients demand data in **their preferred method** (Snowflake share, Databricks, sFTP, API, etc.), vendors often respond by **building one-off pipelines per client**.

**Common setup process:**

1. **Gather client requirements**
   - “We want our data as parquet files in S3.”
   - “We want nightly CSV drops on an sFTP server.”
   - “We want a live Snowflake Data Share.”

2. **Spin up infrastructure**
   - **Databricks** → create Delta tables, configure Delta Sharing endpoints.
   - **AWS** → set up S3 buckets, IAM roles, and sometimes AWS Data Exchange.
   - **FTP servers** → self-host (EC2, managed Linux VM) or use third-party hosting; configure credentials and folder permissions.

3. **Build and schedule pipelines**
   - Use tools like Databricks jobs, AWS Glue, Lambda functions, Airflow, or custom Python scripts to extract data from the source and transform it into the client’s required format.
   - Deploy and test transformations for each client’s schema.

4. **Manage changes manually**
   - Schema changes require updating each client’s pipeline individually.
   - Governance (masking, filtering) is coded directly into the pipeline.

5. **Monitor and troubleshoot**
   - Alerts must be configured separately for each delivery method.
   - Failures often require engineering intervention.

---

## 2. Pain Points with This Approach

| Pain Point                  | Why It Hurts                                                                                   |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| **High engineering load**   | Each client is essentially a separate project, requiring pipelines, infra, and maintenance.    |
| **Inconsistent governance** | Access controls and masking logic live in multiple places; risk of human error and data leaks. |
| **Slow onboarding**         | New clients take weeks to set up because infra + pipeline + security steps are manual.         |
| **Schema change chaos**     | A small source schema change can break 10+ custom pipelines, each needing manual updates.      |
| **Siloed monitoring**       | No single view of all data deliveries; each method has its own logs/metrics.                   |
| **Platform mismatch**       | Vendor may need to buy & manage Databricks or Snowflake just to serve one client.              |

---

## 3. How Dataporto Replaces This

Instead of **dozens of custom-built, fragile delivery pipelines**, Dataporto offers:

- **One connection to your source** (Snowflake, Databricks, Postgres, AWS, etc.)
- **One control plane** for governance, masking, filtering, and client-by-client permissions.
- **Multiple delivery methods** out of the box (Snowflake Data Share, Databricks Delta Share, sFTP) without rebuilding pipelines for each.
- **Automated lifecycle management** for onboarding, schema changes, and revocation.
- **Unified audit and monitoring** for all deliveries.
