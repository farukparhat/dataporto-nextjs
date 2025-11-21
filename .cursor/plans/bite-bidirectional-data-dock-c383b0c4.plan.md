<!-- c383b0c4-5c56-46f9-ad9a-18bed2b9bfa2 6b88a199-aca7-4502-9a14-3cb5e4a23d9c -->
# Bite Bidirectional Data Dock Demo

## Overview

Extend the existing data dock embed widget to support bidirectional data sharing with a tab interface. Customers will be able to toggle between "Receive Data from Bite" and "Send Data to Bite".

## Implementation Steps

### 1. Update Tenant Config Types

Extend `src/config/tenants/types.ts`:

- Add optional `customerDatasets?: Dataset[]` field to `TenantConfig` interface
- This will store the datasets that customers can share back to the vendor

### 2. Add Customer Datasets to Bite Config

Update `src/config/tenants/bite.ts`:

- Add `customerDatasets` array with restaurant-specific datasets:
- Store/Location Information
- Menu Information
- Marketing Campaigns
- Guest Loyalty Data
- Guest Order History

### 3. Extend DataDockEmbedWidget Component

Update `src/components/data-dock-embed-widget.tsx`:

- Add Tabs UI from `@/components/ui/tabs` at the top of the widget (after brand header)
- Create two tabs: "Receive Data from Bite" and "Send Data to Bite"
- Add new prop `customerDatasets?: Dataset[]` to component interface
- Add new prop `mode?: 'unidirectional' | 'bidirectional'` to control if tabs should show (default: unidirectional for backward compatibility)
- For "Receive Data" tab: show existing flow (vendor datasets)
- For "Send Data" tab: create new flow with customer datasets:
- Same warehouse connection UI (left pane)
- Dataset selection showing customerDatasets (right pane)
- Button text changes to "Share Selected Datasets" instead of "Subscribe & Connect"
- Add simple "Active Shares" section showing mockup of shared datasets with status badges

## Key Design Decisions

- Backward compatible: existing widgets work as-is without changes
- Tabs provide clear separation between receive and send flows
- Reuse existing connection UI for consistency
- Visual mockup only (no backend integration needed)
- Restaurant-specific datasets make demo realistic for Bite's use case

### To-dos

- [x] Add customerDatasets field to TenantConfig interface
- [x] Add customer datasets array to Bite tenant config
- [x] Add tabs component to data-dock-embed-widget for receive/send toggle
- [x] Implement send data UI with customer datasets and active shares section
- [ ] Create bidirectional demo page for Bite