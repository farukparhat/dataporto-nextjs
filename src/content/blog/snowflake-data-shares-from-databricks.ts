import DataSharingWorkflowDiagramClient from "@/components/data-sharing-workflow-diagram-client";

export const snowflakeFromDatabricks = {
  id: "snowflake-data-shares-from-databricks",
  title: "How to Enable Snowflake Data Shares from Databricks (AWS RDS Source)",
  excerpt:
    "Practical architectures to expose Databricks-managed data to Snowflake consumers when your system of record is AWS RDS—trade-offs, onboarding complexity, and a simpler alternative.",
  author: "DataPorto Team",
  date: "2025-08-28",
  readTime: "11 min read",
  category: "Technical Guide",
  featured: true,
  headerComponent: DataSharingWorkflowDiagramClient,
  content: `
# How to Enable Snowflake Data Shares from Databricks (AWS RDS Source)

Many providers store operational data in Amazon RDS and use Databricks for transformation, governance, and ML. Yet many of their clients consume data in Snowflake and prefer native Snowflake Data Shares. This guide explains how to publish Databricks-governed data to Snowflake consumers and compares multiple approaches in terms of engineering effort, cost, and reliability.

## Context and Goals

- **Source system**: AWS RDS (e.g., PostgreSQL/MySQL)
- **Primary platform**: Databricks (Delta Lake + Unity Catalog)
- **Consumer preference**: Snowflake data sharing (zero-copy experience inside Snowflake)
- **Goal**: Share governed, curated datasets with Snowflake consumers while minimizing data drift, latency, and operational load.

## Baseline Architecture

1. Ingest from [AWS RDS](https://docs.aws.amazon.com/rds/) into a bronze layer (incremental/CDC).
2. Transform into curated [Delta tables](https://docs.databricks.com/en/delta/index.html) (silver/gold) in Databricks.
3. Publish governed views/objects to consumers using [Unity Catalog](https://docs.databricks.com/en/data-governance/unity-catalog/index.html).

The question is: how do we expose step 3 to Snowflake consumers in a way that is reliable and economical?

---

## Option 1: Replicate Curated Data into Snowflake, Then Share Natively

Create canonical datasets in Snowflake (copies of your curated Delta tables), then use **[Snowflake Data Sharing](https://docs.snowflake.com/en/user-guide/data-sharing-intro)** to expose them to consumers.

### Implementation Paths

- **[AWS DMS](https://docs.aws.amazon.com/dms/) → S3 → [Snowpipe](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro)**: Use DMS for CDC from RDS or curated exports, land files in S3, ingest with Snowpipe/Tasks into Snowflake.
- **[Databricks → JDBC/ODBC Writer](https://docs.databricks.com/en/external-data/snowflake.html)**: Databricks jobs write curated tables directly to Snowflake using connectors.
- **ETL Vendor (e.g., Fivetran/Matillion)**: Managed replication from Databricks outputs or RDS into Snowflake.

### Pros

- **Native Snowflake sharing**: Best consumer UX once data is inside Snowflake.
- **Predictable governance inside Snowflake**: RBAC, masking, secure views, reader accounts.
- **Mature tooling**: Many teams/partners are familiar with these pipelines.

### Cons and Challenges

- **Data duplication**: Additional storage and egress costs; dual-governance overhead.
- **Latency**: Batch ingestion and copy steps add minutes to hours.
- **Complexity**: Jobs, retries, schema drift handling, cost monitoring across two platforms.
- **Operational toil**: Two sets of lineage/monitoring and incident runbooks.

### When to choose

- Strict requirement for fully native Snowflake experience and features.
- Consumers run heavy workloads that must stay in Snowflake.

---

## Option 2: Delta Lake UniForm → Iceberg Metadata → Snowflake External Tables

Use **[Delta Lake UniForm](https://docs.databricks.com/en/delta/uniform.html)** to expose Delta tables through Iceberg-compatible metadata. Snowflake can read [Iceberg tables as external tables](https://docs.snowflake.com/en/user-guide/tables-iceberg) on S3, then you can create **Snowflake Data Shares** over those external tables.

### Implementation Steps

1. Enable [UniForm on curated Delta tables](https://docs.databricks.com/en/delta/uniform.html#enable-uniform-on-a-table) in Unity Catalog.
2. Store UniForm/Iceberg metadata alongside Delta data on [S3](https://docs.aws.amazon.com/s3/).
3. In Snowflake, create [External Volume/Stage](https://docs.snowflake.com/en/sql-reference/sql/create-stage) and define [External Tables](https://docs.snowflake.com/en/user-guide/tables-external-intro) over the Iceberg metadata.
4. Build [secure views](https://docs.snowflake.com/en/user-guide/views-secure) and share via Snowflake Data Sharing.

### Pros

- **Near zero-copy**: Avoids full duplication into Snowflake tables.
- **One storage of truth**: Single S3 data lake backing both Databricks and Snowflake.
- **Good consumer UX**: Data is queryable in Snowflake; can still use shares.

### Cons and Challenges

- **Advanced setup**: UniForm/Iceberg details, permissions, and metadata lifecycle.
- **Consistency windows**: Cross-engine metadata refresh and partition discovery delays.
- **Performance tuning**: Requires file sizing/compaction best practices.
- **Feature mismatch**: Some Snowflake features behave differently with external tables vs native tables.

### When to choose

- You want to minimize data duplication while still serving Snowflake consumers.
- Your team can own Iceberg/Delta UniForm operational complexity.

---

## Option 3: S3 Parquet Snapshots → Snowflake External Tables → Shares

Publish periodic [Parquet snapshots](https://docs.databricks.com/en/ingestion/file-upload/upload-to-s3.html) (or CDC appends) from Databricks to S3 locations that Snowflake maps as **[External Tables](https://docs.snowflake.com/en/user-guide/tables-external-intro)**. Then create **secure views** and **share** them.

### Implementation Steps

1. [Databricks jobs](https://docs.databricks.com/en/jobs/index.html) write partitioned Parquet to S3 (append or snapshot).
2. In Snowflake, create [External Stage](https://docs.snowflake.com/en/sql-reference/sql/create-stage) and [External Tables](https://docs.snowflake.com/en/user-guide/tables-external-intro) on those paths.
3. Use [Tasks/Streams](https://docs.snowflake.com/en/user-guide/tasks-intro) to maintain merged views and consumer-friendly schemas.
4. Share secure views via [Snowflake Data Sharing](https://docs.snowflake.com/en/user-guide/data-sharing-intro).

### Pros

- **Simple, low-cost**: No continuous replication tool required.
- **Clear control**: You choose snapshot cadence and retention.
- **Good enough** for many analytics consumers.

### Cons and Challenges

- **Eventual consistency**: Metadata refresh timing and late files.
- **Schema drift**: Requires contracts and automated evolution routines.
- **Governance duplication**: Masking/filters in both Databricks and Snowflake layers.

### When to choose

- Consumers accept batch cadences (e.g., hourly/daily).
- You prefer explicit, file-based interfaces with low vendor lock-in.

---

## Snowflake Onboarding Complexity to Expect

Regardless of the option, plan for the following Snowflake-specific onboarding steps and risks:

- **Organization/Region alignment**: Cross-region sharing requires replication and may add costs and lead time.
- **[Reader accounts](https://docs.snowflake.com/en/user-guide/data-sharing-reader-create)**: Useful for consumers without Snowflake, but introduce extra admin, limits, and cost considerations.
- **Network topology**: [PrivateLink](https://docs.snowflake.com/en/user-guide/admin-security-privatelink), VPC routing, and allowlists must be designed for both provider and consumer.
- **RBAC mapping**: Translate [Unity Catalog permissions](https://docs.databricks.com/en/data-governance/unity-catalog/manage-privileges/index.html) to [Snowflake roles](https://docs.snowflake.com/en/user-guide/security-access-control-overview), secure views, and [masking policies](https://docs.snowflake.com/en/user-guide/security-column-ddm-intro).
- **Cost governance**: Who pays for compute? Quotas/warehouses for reader accounts vs consumer-owned accounts.
- **Schema evolution**: Contract changes must propagate across engines without breaking consumers.
- **Observability**: End-to-end lineage, delivery SLOs, failed refreshes, and anomaly detection across two platforms.

---

## Decision Guide (Quick Heuristics)

- **Need native Snowflake features/performance** → Choose Option 1.
- **Minimize duplication; accept cross-engine ops** → Choose Option 2.
- **Batch sharing with low cost/complexity** → Choose Option 3.

If uncertain, pilot Option 3 to validate consumer needs, then graduate to Option 1 or 2 for scale/performance.

---

## A Simpler Path with DataPorto

Engineering teams often spend weeks stitching together replication jobs, external tables, governance policies, and onboarding runbooks. **DataPorto** removes this overhead:

- **One-click Snowflake share provisioning**: Automatically creates databases, schemas, secure views, masking, and share objects (or reader accounts) based on catalog policies.
- **No-copy or replicated delivery**: Choose UniForm/Iceberg external tables or managed replication without writing glue code.
- **Contract-aware schema evolution**: Safe alter/add with consumer impact analysis and rollout plans.
- **End-to-end monitoring**: Health, freshness, costs, and consumer usage across Databricks and Snowflake.
- **Network automation**: PrivateLink, stages, and cross-account permissions handled for you.

Result: **faster onboarding, lower engineering cost, and higher reliability**—while your clients enjoy a native Snowflake experience.

**Want to see it in action?** [Book a demo](/demo) and we’ll configure a Snowflake data share from your Databricks-curated datasets in minutes.
  `,
};
