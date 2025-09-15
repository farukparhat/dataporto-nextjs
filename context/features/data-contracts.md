# Data Contracts (by Dataporto)

**Data Contracts are the backbone of governed, reliable data sharing.**

A **Data Contract** is a formal agreement inside Dataporto that defines:

- What data is shared (tables, views, schemas, metrics)
- How it’s delivered (Snowflake Data Share, Databricks Delta Share, sFTP, API, etc.)
- Who can access it (specific clients, teams, or accounts)
- Rules & guarantees (refresh frequency, data quality SLAs, masking policies, retention)

---

## Why Data Contracts Matter

- **Consistency**: Every client sees the same governed definitions, preventing ad-hoc or one-off pipelines.
- **Trust**: Vendors can enforce guarantees on schema stability, update cadence, and governance controls.
- **Scalability**: New clients can be onboarded instantly by “signing” into an existing contract.
- **Auditability**: Each Data Contract is tracked — versioned, logged, and revocable.

---

## How Dataporto Uses Them

When a vendor wants to share data:

1. They define a **Data Contract** in Dataporto (like an API contract for data).
2. Dataporto enforces it across the chosen delivery mechanism (Snowflake, Databricks, sFTP, etc.).
3. Clients subscribe to the contract through a **Data Dock** or direct provisioning.

Think of it as **the “API spec” for enterprise data sharing** — but with governance, versioning, and compliance built in.
