**Sidebar Navigation**
- 🏠 Home / Overview — snapshot of shares, clients, alerts
- 🔌 Data Sources — manage connected databases (Postgres, Redshift, MySQL, S3)
- 📤 Data Shares — create/manage Snowflake shares, track usage, revoke
- 👥 Clients — provision accounts, assign permissions, view activity
- 🛡️ Governance — masking rules, row/column-level filters, audit access
- 📊 Monitoring & Logs — pipeline health, credit usage, alerts, logs
- ⚙️ Settings — billing, users, API keys, integrations

**Home Dashboard**
- Cards: Active Shares · Clients · Data Sources · Last Sync
- Chart: Data volume shared (last 30 days)
- Table: Top consuming clients

**Data Source Detail**
- Connection status & metadata
- Sync frequency & latency
- Exposed tables/views list with schema previews
- Recent sync logs

**Data Share Detail**
- Assigned clients & permissions
- Usage graph (queries/day, GB scanned)
- Policy tab (filters/masking applied)
- Toggle: pause/revoke access

**Client Detail**
- Access granted (shares, schemas, tables)
- Activity log
- Reader account details
- Billing (if monetized per client)

**Governance**
- Data masking rules
- Row/column-level filters
- Access policies
- Audit logs (who accessed what, when)

**Monitoring & Logs**
- Pipeline health (last sync, latency, errors)
- Snowflake credit usage
- Alerts (schema drift, ingestion failure)
- Downloadable logs

**Settings**
- Org-level: billing, subscription, API keys
- User-level: profile, notifications
- Integrations: Slack, PagerDuty, email alerts