export const whatAreDataContracts = {
  id: "what-are-data-contracts",
  title: "What Are Data Contracts? The Foundation of Governed Data Sharing",
  excerpt:
    "Understand data contracts, why they matter, and how they transform client data sharing from ad-hoc pipelines into governed, scalable products.",
  author: "Dataporto Team",
  date: "2025-09-15",
  readTime: "7 min read",
  category: "Concepts",
  featured: false,
  content: `
# What Are Data Contracts? The Foundation of Governed Data Sharing

> TL;DR: Data contracts turn ad‑hoc data deliveries into governed, versioned products. Publish once, deliver anywhere (Snowflake, Delta Sharing, sFTP) with the same policies and SLAs.

---

## The Problem (You’ve Likely Lived It)

If you’ve shared data with more than a few clients, you’ve probably watched a tidy setup turn into a patchwork of one-offs. A CSV here, a Snowflake reader account there, and a special Delta share for the team that swears they “only need it for a week.” Each exception becomes another moving part—and another place a schema change can ruin someone’s Monday.

- One‑off pipelines per client and platform
- Surprising schema breaks and dashboard outages
- Ticket-driven onboarding and IAM sprawl
- Little visibility into access, freshness, or SLAs

---

## What Is a Data Contract?

A data contract is a human‑ and machine‑readable agreement about a dataset. It captures what’s being shared, how it’s delivered, who is allowed to see it, and the rules it must follow. Think of it as the API spec for your data products—with governance and versioning built in.

- **What**: datasets, tables, views, metrics
- **How**: delivery method (Snowflake share, Delta Sharing, sFTP, API)
- **Who**: clients, teams, accounts, entitlements
- **Rules**: freshness, data quality, masking, retention

---

## Without vs With Data Contracts

The contrast is stark. Without contracts, you’re shipping bespoke integrations and hoping changes don’t break consumers. With contracts, you publish one definition that multiple delivery methods can honor—policies and SLAs included.

### Without
- Bespoke pipelines per client/destination
- Inconsistent schemas, no central versioning
- Manual onboarding and per-client credentials
- Duplicated governance logic across systems
- Limited observability and unclear SLAs

### With
- One governed spec; many delivery options
- Versioned schema evolution with deprecation windows
- Self-serve subscriptions with least-privilege access
- Central policies (RLS, masking, retention) applied everywhere
- Built-in auditability: access logs, freshness, SLA status

---

## What Changes for Your Team

Data contracts turn client delivery from “projects” into “products.” Your team spends less time building glue code and more time improving the data itself.

- **Onboarding**: Publish once → clients subscribe; zero bespoke builds
- **Evolution**: Versioned changes with compatibility rules
- **Governance**: Policies live in one place, enforced across platforms
- **Observability**: Contract-level telemetry for access and freshness
- **Security**: Revoke at the contract, not 12 different credentials

---

## What Goes Into a Good Contract

Good contracts are specific enough to be enforceable and flexible enough to evolve. Aim for clarity, not complexity.

- **Dataset definition**: scope, docs, consumer-friendly schemas
- **Entitlements**: who gets what slice and why
- **Security**: masking, tokenization, row-level filters (PII/PHI aware)
- **SLOs**: freshness targets, delivery cadence, retry rules
- **Lifecycle**: versioning, deprecation policy, retention, revocation

---

## How It Works in Dataporto

In Dataporto, you write the contract once and let the platform enforce it across delivery mechanisms. Policies, access, and SLAs follow the contract—no copy‑pasting logic across systems.

1. **Define** the contract once (what, how, who, rules)
2. **Enforce** consistently across Snowflake, Databricks Delta Sharing, sFTP, or API
3. **Subscribe** via the Data Dock or direct provisioning

One definition powers many delivery paths — without duplicating governance.

---

## Getting Started (Practical Steps)

You don’t need a full rewrite to begin. Start with one high‑value dataset and prove the model.

1. Inventory current client deliveries and common datasets
2. Draft your first contract with governance and SLOs
3. Map delivery options (Snowflake, Delta Sharing, sFTP) to the same spec
4. Roll out versioning, change management, and monitoring

Ready to turn client data sharing into a product? **[Talk to our team](/demo)** and see Dataporto’s data contracts in action.
  `,
};
