---
name: Landing Page Value Prop Update
overview: Update the landing page to reflect the new enterprise-focused value proposition emphasizing data team empowerment, universal warehouse compatibility, and revenue growth.
todos:
  - id: stage-1-hero
    content: "Update Hero Section: headline, tagline, subheadline, platform logos"
    status: pending
  - id: stage-2-how-it-works
    content: "Update How It Works Section: header and descriptions"
    status: pending
  - id: stage-3-features
    content: "Update Core Features Section: Catalog/Share/Govern pillars"
    status: pending
  - id: stage-4-data-sharing
    content: "Update Data Sharing Methods Section: expand warehouse support"
    status: pending
  - id: stage-5-portal
    content: "Update Self-Serve Portal Section: premium datasets, expansion"
    status: pending
  - id: stage-6-differentiators
    content: Update Before/After and Differentiators sections
    status: pending
  - id: stage-7-cta
    content: Update final CTA section
    status: pending
  - id: icons
    content: Add new warehouse icons (BigQuery component, Redshift, Fabric)
    status: pending
---

# Landing Page Value Proposition Update

## New Core Messaging

**Headline:** "Unlock the best enterprise data experience for your largest customers."
**Tagline:** "Empower data teams. Drive revenue. Win enterprise."
**Key themes:** Self-serve one-click connections, universal warehouse support, turn data teams into champions, premium dataset expansion

---

## Stage 1: Hero Section (lines 36-147)

**Current:**

- Badge: "Multi-Platform Data Sharing as a Service"
- H1: "Unlock Enterprise-Grade Data Sharing for Your Customers"
- Subheadline: "With dataporto, you can support Snowflake, Databricks, and sFTP data sharing right away — for your biggest customers."
- Platform logos: Snowflake, Databricks, sFTP (bottom); Snowflake, Databricks, AWS (trust bar)

**Proposed changes:**

1. Update badge to emphasize enterprise data teams
2. Update H1 to new headline
3. Update subheadline to incorporate "empower data teams" + "self-serve, one-click" + "direct-to-warehouse"
4. Add new tagline below H1: "Empower data teams. Drive revenue. Win enterprise."
5. Expand platform logos to include BigQuery, Redshift, Microsoft Fabric

**Files to modify:**

- `src/app/page.tsx` (lines 39-50, 127-146)
- `src/components/brand-icons.tsx` (add BigQueryIcon, RedshiftIcon, FabricIcon)
- May need to source/add SVG files for Redshift and Fabric

---

## Stage 2: How It Works Section (lines 149-174)

**Current:**

- H2: "There's a smarter way to share data"
- Subtitle: "Connect your sources, catalog your data, share with governance — all from a single control plane."

**Proposed changes:**

1. Update H2 to emphasize enterprise-grade direct-to-warehouse simplicity
2. Update subtitle to incorporate "one-click connection" and "day one" readiness
3. Update bottom text to emphasize universal compatibility

---

## Stage 3: Core Features Section - Catalog/Share/Govern (lines 176-378)

**Current:** Technical feature-focused pillars

**Proposed changes:**

1. Update section header to emphasize customer empowerment outcome
2. Enhance "Share" pillar to highlight self-serve, one-click experience
3. Add emphasis on turning data teams into internal champions
4. Update "Supporting Features" to include revenue/expansion messaging

---

## Stage 4: Data Sharing Methods Section (lines 380-403)

**Current:** "Three Ways to Deliver Data" - Snowflake, Databricks, sFTP

**Proposed changes:**

1. Update to reflect all 5+ warehouses (Snowflake, Databricks, BigQuery, Redshift, Fabric)
2. Emphasize "eliminate integration costs" and "support everyone instantly"
3. Add "accelerate technical sign-off" messaging

**Files to modify:**

- `src/app/page.tsx` (section header)
- `src/components/data-sharing-methods.tsx` (likely needs warehouse expansion)

---

## Stage 5: Self-Serve Data Portal Section (lines 405-474)

**Current:** Focus on embeddable portals and engineering time savings

**Proposed changes:**

1. Update to emphasize catalog preview and premium dataset subscription
2. Add "expand your footprint" and "productize data" messaging
3. Highlight "seamless path" to revenue expansion

---

## Stage 6: Before/After + Differentiators Sections (lines 602-868)

**Current:** Focus on pipeline replacement and governance

**Proposed changes:**

1. Add "turn data teams into internal champions" differentiator
2. Emphasize "accelerate technical sign-off" benefit
3. Update "Why Teams Choose dataporto" to include revenue/growth outcomes

---

## Stage 7: CTA Section (lines 982-1001)

**Current:** "Stop Wasting Engineering Resources..."

**Proposed changes:**

1. Update headline to tie back to enterprise wins and revenue
2. Update subtitle to emphasize business outcomes

---

## Icon Assets Needed

| Warehouse | Status |
|-----------|--------|
| Snowflake | Exists (SnowflakeIcon) |
| Databricks | Exists (DatabricksIcon) |
| BigQuery | SVG exists (`big-query.svg`), need component |
| Redshift | Need to add SVG + component |
| Microsoft Fabric | Need to add SVG + component |