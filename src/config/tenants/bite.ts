import { TenantConfig } from "./types";

export const biteConfig: TenantConfig = {
  id: "bite",
  name: "Bite",
  logo: "/brands/icons/bite.svg",
  datasets: [
    // Tier 1: Core Transactional Data
    {
      id: "kiosk-orders",
      name: "Kiosk Orders & Transactions",
      description:
        "Complete order history from all kiosks including items, customizations, payment methods, and check sizes",
      tagline: "Full transaction history across all kiosk locations",
      tables: [
        "Orders",
        "Order Items",
        "Customizations",
        "Payments",
        "Receipts",
        "Refunds",
      ],
      size: "89.4 GB",
      rows: "342M",
      tier: 1,
      locked: false,
      pricing: "$4 / location / month",
      refreshRate: "Real-time",
    },
    {
      id: "menu-performance",
      name: "Menu Performance",
      description:
        "Menu item analytics including popularity, prep times, upsell success rates, and BiteLift AI recommendation performance",
      tagline: "Menu optimization with AI recommendation insights",
      tables: [
        "Menu Items",
        "Item Performance",
        "Upsell Analytics",
        "BiteLift Recommendations",
        "Prep Time Metrics",
      ],
      size: "24.6 GB",
      rows: "86.3M",
      tier: 1,
      locked: false,
      pricing: "$3 / location / month",
      refreshRate: "Hourly",
    },
    // Tier 2: Operations & Analytics
    {
      id: "kiosk-performance",
      name: "Kiosk Operations",
      description:
        "Kiosk uptime, transaction speeds, error rates, session analytics, and peak time throughput metrics",
      tagline: "Comprehensive kiosk performance monitoring",
      tables: [
        "Kiosk Status",
        "Uptime Metrics",
        "Transaction Times",
        "Error Logs",
        "Session Analytics",
        "Peak Time Performance",
      ],
      size: "38.7 GB",
      rows: "156M",
      tier: 2,
      locked: true,
      pricing: "+$5 / location / month",
      refreshRate: "Real-time",
    },
    {
      id: "customer-behavior",
      name: "Customer Behavior Analytics",
      description:
        "Customer journey analysis, check size trends, order customization patterns, and loyalty insights",
      tagline: "Deep customer ordering behavior insights",
      tables: [
        "Customer Sessions",
        "Journey Analytics",
        "Check Size Trends",
        "Customization Patterns",
        "Repeat Customer Metrics",
      ],
      size: "52.3 GB",
      rows: "198M",
      tier: 2,
      locked: true,
      pricing: "+$6 / location / month",
      refreshRate: "Daily",
    },
    {
      id: "pos-integration",
      name: "POS Integration Logs",
      description:
        "POS system integration data, order sync status, kitchen display system routing, and integration health metrics",
      tagline: "POS and KDS integration monitoring",
      tables: [
        "POS Sync Logs",
        "Integration Status",
        "KDS Routing",
        "Order Fulfillment",
        "Error Resolution",
      ],
      size: "18.9 GB",
      rows: "124M",
      tier: 2,
      locked: true,
      pricing: "+$3 / location / month",
      refreshRate: "Real-time",
    },
  ],
  branding: {
    primaryColor: "#FF6B35",
    accentColor: "#FFF5F0",
  },
  user: {
    name: "Brandon Barton",
    email: "brandon@getbite.com",
  },
};

