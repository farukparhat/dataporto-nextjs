# Tenant Configuration System

This directory contains the tenant-specific configurations for customer demos. The system allows you to customize branding, logos, and mock datasets for different customers during demos.

## Overview

The tenant configuration system enables you to:
- Display customer-specific logos throughout the app
- Show tenant-specific mock datasets in Data Dock
- Customize branding colors (if needed)
- Provide a personalized demo experience

## How to Use

### Setting the Tenant ID

Set the `NEXT_PUBLIC_TENANT_ID` environment variable to activate a tenant configuration:

```bash
# For local development
NEXT_PUBLIC_TENANT_ID=momos npm run dev
```

Or add it to your `.env.local` file:

```env
NEXT_PUBLIC_TENANT_ID=momos
```

### Available Tenants

Currently configured tenants:

- **default** - Default configuration with Senti branding (used when no tenant ID is set)
- **momos** - Momos restaurant chain configuration

## Adding a New Tenant

To add a new tenant configuration:

### 1. Create a Tenant Configuration File

Create a new file in this directory (e.g., `customer-name.ts`):

```typescript
import { TenantConfig } from "./types";

export const customerNameConfig: TenantConfig = {
  id: "customer-name",
  name: "Customer Display Name",
  logo: "/brands/customer-logo.png", // or .svg
  datasets: [
    {
      id: "dataset-1",
      name: "Dataset Name",
      description: "Description of the dataset",
      tables: ["table1", "table2", "table3"],
      size: "1.5 GB",
      rows: "5.2M",
    },
    // Add more datasets as needed
  ],
  branding: {
    primaryColor: "#2970ff", // Optional: customize primary color
  },
  user: {
    name: "Contact Name",
    email: "contact@customer.com",
  },
};
```

### 2. Add Logo to Public Directory

Add the customer's logo to `/public/brands/customer-logo.png` (or .svg)

### 3. Register the Configuration

Add your new configuration to `index.ts`:

```typescript
import { customerNameConfig } from "./customer-name";

const tenantConfigs: Record<string, TenantConfig> = {
  default: defaultConfig,
  momos: momosConfig,
  "customer-name": customerNameConfig, // Add your new config
};
```

### 4. Test the Configuration

Run the app with the new tenant ID:

```bash
NEXT_PUBLIC_TENANT_ID=customer-name npm run dev
```

## Where Tenant Branding Appears

The tenant configuration is used in the following places:

- **Sidebar**: 
  - Displays tenant logo and name in a "Demo Mode" badge
  - Uses tenant logo as user avatar in the footer
  - Shows tenant user name and email in the user menu
- **Page Headers**: Shows tenant logo and name in all `/app` page headers
- **Data Dock**: Displays tenant logo and uses tenant-specific datasets in the embed widget
- **Dashboard**: Shows tenant branding in the main dashboard

## Dataset Configuration

Each tenant can have multiple datasets configured. Each dataset represents a schema/collection of tables that will be shown in the Data Dock widget.

Dataset properties:
- `id`: Unique identifier for the dataset
- `name`: Display name of the dataset/schema
- `description`: Brief description of what the dataset contains
- `tables`: Array of table names in this dataset
- `size`: Human-readable size (e.g., "2.4 GB")
- `rows`: Human-readable row count (e.g., "12.5M")

## User Configuration

Each tenant can optionally specify a default user to display in the demo:

User properties:
- `name`: The full name of the contact person (e.g., "Sai Alluri")
- `email`: The email address of the contact (e.g., "sai@momos.com")

The tenant logo will automatically be used as the user avatar in the sidebar footer. If no user is specified, it defaults to "Demo User" with "demo@dataporto.com".

## Tips for Effective Demos

1. **Industry-Specific Data**: Create datasets that match the customer's industry (e.g., restaurant data for Momos)
2. **Realistic Numbers**: Use realistic sizes and row counts for credibility
3. **Relevant Schemas**: Name tables based on what the customer would actually track
4. **Logo Quality**: Use high-quality logos (SVG preferred) for best display

## Environment Variables Reference

- `NEXT_PUBLIC_TENANT_ID`: The tenant configuration to use (runtime variable)
  - Must start with `NEXT_PUBLIC_` to be available in client-side code
  - Can be changed without rebuilding the app
  - Falls back to "default" if not set or invalid

## Troubleshooting

**Logo not displaying?**
- Check that the logo file exists in `/public/brands/`
- Verify the file extension matches the path in the config
- Ensure the logo is a supported format (png, svg, jpg)

**Tenant config not loading?**
- Verify `NEXT_PUBLIC_TENANT_ID` is set correctly
- Check the browser console for any error messages
- Ensure the tenant ID matches the key in `tenantConfigs`

**Datasets not showing?**
- Verify the datasets array is properly formatted
- Check that each dataset has all required properties
- Ensure you're passing the datasets prop to DataDockEmbedWidget

