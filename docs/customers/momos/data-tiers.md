# 🧩 Momos → RBI Data Share Catalog (Powered by Dataporto)

> A simplified tiered catalog showing how Momos can monetize their customer-experience data via Snowflake Data Sharing — securely managed by **Dataporto**.

---

## Pricing Scenario 1: 1,000 Locations

### 🟢 Tier 1: Base Feeds (Raw Data Layer)

**Purpose:** Provide RBI with unified, raw feedback data directly from all digital channels.

| Friendly Name | Table Name       | Description                                                 | Refresh Rate | Pricing Model         | Est. Annual Fee (1k sites) |
| ------------- | ---------------- | ----------------------------------------------------------- | ------------ | --------------------- | -------------------------- |
| **Reviews**   | `reviews_fact`   | All customer reviews from Google, app stores, and surveys.  | Daily        | $1 / location / month | **$12k / yr**              |
| **Responses** | `responses_fact` | Review responses and resolution timestamps for each review. | Daily        | Included in Base      | —                          |
| **Reviewers** | `reviewer_dim`   | De-identified reviewer profiles for repeat-guest analytics. | Monthly      | Included in Base      | —                          |

💡 _Buyer:_ RBI Data Engineering & Analytics  
📈 _Tier 1 Potential:_ ≈ **$12k / yr**

### 🟠 Tier 2: Enriched Insights (Operational Layer)

**Purpose:** Add analytical enrichment — detect, classify, and trend incidents, sentiment, and product-level performance.

| Friendly Name        | Table Name             | Description                                                                                                                                                                   | Refresh Rate | Pricing Model            | Est. Annual Fee (1k sites) |
| -------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------ | -------------------------- |
| **Incident Feed**    | `incident_logs`        | Unified incident dataset combining reviews, tickets, and DMs with severity & SLA status.                                                                                      | Daily        | +$1 / location / month   | **$12k / yr**              |
| **Sentiment Trends** | `sentiment_trends_agg` | Daily sentiment and rating trends per location, channel, and category.                                                                                                        | Daily        | +$2 / location / month   | **$24k / yr**              |
| **SKU Insights**     | `sku_insights_agg`     | Aggregated feedback and incident metrics by product/SKU (e.g., Whopper, Iced Coffee, Chicken Sandwich). Includes product sentiment, issue frequency, and satisfaction deltas. | Weekly       | +$1.5 / location / month | **$18k / yr**              |

💡 _Buyer:_ RBI Brand Ops, CX, and Menu Strategy teams  
📈 _Tier 2 Potential:_ ≈ **$54k / yr**

### 🔵 Tier 3: Premium Benchmarks (Strategic Layer)

**Purpose:** Deliver cross-brand and regional performance benchmarking — the highest strategic value.

| Friendly Name           | Table Name               | Description                                                   | Refresh Rate | Pricing Model          | Est. Annual Fee (1k sites) |
| ----------------------- | ------------------------ | ------------------------------------------------------------- | ------------ | ---------------------- | -------------------------- |
| **Cohort Benchmarks**   | `cohort_benchmarks`      | Peer-group comparison by brand, region, and store type.       | Monthly      | +$5 / location / month | **$60k / yr**              |
| **Competitive Heatmap** | `competitive_heatmap`    | Aggregated anonymized competitor ranking and relative scores. | Monthly      | +$3 / location / month | **$36k / yr**              |
| **Best Practices**      | `best_practices_summary` | Identifies top-performing stores and best practice patterns.  | Monthly      | Included in Premium    | —                          |

💡 _Buyer:_ RBI Strategy & Executive Leadership  
📈 _Tier 3 Potential:_ ≈ **$96k / yr**

### 💰 Summary (1,000 Locations)

| Tier         | Description                            | Avg Price (/ site / mo) | Est. Annual Revenue (1k sites) |
| ------------ | -------------------------------------- | ----------------------- | -----------------------------: |
| **Base**     | Raw reviews & responses                | $1                      |                           $12k |
| **Enriched** | Incidents + sentiment + SKU insights   | $4.5–5                  |                        $54–60k |
| **Premium**  | Benchmarks + heatmaps + best practices | $8–9                    |                       $96–108k |
| **Total**    | Full Momos → RBI suite                 | $13.5+                  |               **≈ $162k / yr** |

---

## Pricing Scenario 2: 30,000 Locations

### 🟢 Tier 1: Base Feeds (Raw Data Layer)

**Purpose:** Provide RBI with unified, raw feedback data directly from all digital channels.

| Friendly Name | Table Name       | Description                                                 | Refresh Rate | Pricing Model         | Est. Annual Fee (30k sites) |
| ------------- | ---------------- | ----------------------------------------------------------- | ------------ | --------------------- | --------------------------- |
| **Reviews**   | `reviews_fact`   | All customer reviews from Google, app stores, and surveys.  | Daily        | $1 / location / month | **$360k / yr**              |
| **Responses** | `responses_fact` | Review responses and resolution timestamps for each review. | Daily        | Included in Base      | —                           |
| **Reviewers** | `reviewer_dim`   | De-identified reviewer profiles for repeat-guest analytics. | Monthly      | Included in Base      | —                           |

💡 _Buyer:_ RBI Data Engineering & Analytics  
📈 _Tier 1 Potential:_ ≈ **$360k / yr**

### 🟠 Tier 2: Enriched Insights (Operational Layer)

**Purpose:** Add analytical enrichment — detect, classify, and trend incidents, sentiment, and product-level performance.

| Friendly Name        | Table Name             | Description                                                                                                                                                                   | Refresh Rate | Pricing Model            | Est. Annual Fee (30k sites) |
| -------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------ | --------------------------- |
| **Incident Feed**    | `incident_logs`        | Unified incident dataset combining reviews, tickets, and DMs with severity & SLA status.                                                                                      | Daily        | +$1 / location / month   | **$360k / yr**              |
| **Sentiment Trends** | `sentiment_trends_agg` | Daily sentiment and rating trends per location, channel, and category.                                                                                                        | Daily        | +$2 / location / month   | **$720k / yr**              |
| **SKU Insights**     | `sku_insights_agg`     | Aggregated feedback and incident metrics by product/SKU (e.g., Whopper, Iced Coffee, Chicken Sandwich). Includes product sentiment, issue frequency, and satisfaction deltas. | Weekly       | +$1.5 / location / month | **$540k / yr**              |

💡 _Buyer:_ RBI Brand Ops, CX, and Menu Strategy teams  
📈 _Tier 2 Potential:_ ≈ **$1.62M / yr**

### 🔵 Tier 3: Premium Benchmarks (Strategic Layer)

**Purpose:** Deliver cross-brand and regional performance benchmarking — the highest strategic value.

| Friendly Name           | Table Name               | Description                                                   | Refresh Rate | Pricing Model          | Est. Annual Fee (30k sites) |
| ----------------------- | ------------------------ | ------------------------------------------------------------- | ------------ | ---------------------- | --------------------------- |
| **Cohort Benchmarks**   | `cohort_benchmarks`      | Peer-group comparison by brand, region, and store type.       | Monthly      | +$5 / location / month | **$1.8M / yr**              |
| **Competitive Heatmap** | `competitive_heatmap`    | Aggregated anonymized competitor ranking and relative scores. | Monthly      | +$3 / location / month | **$1.08M / yr**             |
| **Best Practices**      | `best_practices_summary` | Identifies top-performing stores and best practice patterns.  | Monthly      | Included in Premium    | —                           |

💡 _Buyer:_ RBI Strategy & Executive Leadership  
📈 _Tier 3 Potential:_ ≈ **$2.88M / yr**

### 💰 Summary (30,000 Locations)

| Tier         | Description                            | Avg Price (/ site / mo) | Est. Annual Revenue (30k sites) |
| ------------ | -------------------------------------- | ----------------------- | ------------------------------: |
| **Base**     | Raw reviews & responses                | $1                      |                           $360k |
| **Enriched** | Incidents + sentiment + SKU insights   | $4.5–5                  |                       $1.6–1.8M |
| **Premium**  | Benchmarks + heatmaps + best practices | $8–9                    |                       $2.9–3.2M |
| **Total**    | Full Momos → RBI suite                 | $13.5+                  |                **≈ $4.9M / yr** |

---

### 🧠 Strategic Takeaways

- SKU-level data introduces a **new commercial lens** — aligning guest feedback to menu performance and product quality.
- Each tier can be its own **Snowflake schema** (`MOMOS_BASE`, `MOMOS_ENRICHED`, `MOMOS_PREMIUM`).
- RBI can start with **Base**, upgrade to **Enriched**, and unlock **Premium** later.
- Dataporto manages **sharing, governance, usage metering, and billing**.
- This SKU framework can be replicated for other QSR clients — enabling product-level feedback monetization.
