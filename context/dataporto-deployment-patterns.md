## Dataporto Deployment Strategies

### 1. Fully Managed (SaaS)
- **How it works:** Customer connects their database or S3 bucket; Dataporto runs both control plane and data plane in our managed cloud.
- **Pros:** Fastest onboarding, no infra for customer to manage, Dataporto handles scaling and upgrades.
- **Cons:** Requires secure connectivity into customer’s data source; some customers may prefer data not leaving their cloud.
- **Best for:** SaaS vendors, agencies, or data providers wanting minimal ops overhead.

---

### 2. Hybrid (Control Plane in SaaS, Data Plane in Customer VPC)
- **How it works:** Control plane runs in Dataporto SaaS (UI, governance, config), while a lightweight Dataporto Agent runs in the customer’s VPC and keeps all data processing inside their environment/Snowflake.
- **Pros:** Data never leaves customer’s environment, aligns with compliance/security requirements, flexible governance.
- **Cons:** Slightly more setup effort; customer manages Snowflake costs and compute.
- **Best for:** Enterprises with strict data control or existing Snowflake investments.

---

### 3. Dedicated Private Deployment (Single-Tenant in Customer Cloud)
- **How it works:** Dataporto provisions a fully isolated instance of both control plane and data plane in the customer’s own AWS/Azure/GCP account.
- **Pros:** Maximum isolation and sovereignty, customer fully controls the environment, satisfies strict regulatory needs.
- **Cons:** More complex to upgrade/support, higher costs since resources are not shared across tenants.
- **Best for:** Highly regulated industries (finance, healthcare, government) requiring all software in their own cloud.