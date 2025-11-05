import { TenantConfig } from "./types";

export const hangConfig: TenantConfig = {
  id: "hang",
  name: "Hang",
  logo: "/brands/icons/hang.svg",
  datasets: [
    // Tier 1: Base Feeds - Available
    {
      id: "customer-profiles",
      name: "Customer Profiles",
      description: "Unified customer data from all channels and touchpoints",
      tagline: "360° customer view with unified CDP data",
      tables: ["Customer Profiles", "Preferences", "Contact Info", "Segments"],
      size: "3.2 GB",
      rows: "4.3M",
      tier: 1,
      locked: false,
      pricing: "$2 / customer / month",
      refreshRate: "Real-time",
    },
    {
      id: "loyalty-transactions",
      name: "Loyalty Transactions",
      description: "Points, rewards, redemptions, and loyalty program activity",
      tagline: "Points, rewards, and redemption activity",
      tables: ["Point Transactions", "Redemptions", "Rewards Catalog", "Balances"],
      size: "4.8 GB",
      rows: "28.7M",
      tier: 1,
      locked: true,
      pricing: "$1.50 / customer / month",
      refreshRate: "Real-time",
    },
    {
      id: "orders-purchases",
      name: "Orders & Purchases",
      description: "Online ordering, in-app purchases, and transaction history",
      tagline: "Order history and purchase behavior",
      tables: ["Orders", "Order Items", "Payment Methods", "Delivery Data"],
      size: "5.6 GB",
      rows: "32.5M",
      tier: 1,
      locked: true,
      pricing: "$1.75 / customer / month",
      refreshRate: "Real-time",
    },
    // Tier 2: Enriched Insights - Locked
    {
      id: "engagement-analytics",
      name: "Engagement Analytics",
      description:
        "App usage, social engagement, referrals, and gamification metrics",
      tagline: "Multi-channel engagement and activity tracking",
      tables: [
        "App Sessions",
        "Social Media Engagement",
        "Referral Activity",
        "Minigame Interactions",
      ],
      size: "6.2 GB",
      rows: "142.8M",
      tier: 2,
      locked: true,
      pricing: "+$1 / customer / month",
      refreshRate: "Hourly",
    },
    {
      id: "campaign-insights",
      name: "Campaign Insights",
      description: "AI-powered campaign performance and personalization data",
      tagline: "Campaign ROI and personalization metrics",
      tables: [
        "Campaign Performance",
        "Personalization Results",
        "A/B Test Results",
        "Cost Optimization",
      ],
      size: "2.4 GB",
      rows: "18.9M",
      tier: 2,
      locked: true,
      pricing: "+$1.25 / customer / month",
      refreshRate: "Daily",
    },
    // Tier 3: Premium Benchmarks - Locked
    {
      id: "predictive-analytics",
      name: "Predictive Analytics",
      description:
        "AI-generated customer lifetime value, churn prediction, and next-best-action",
      tagline: "AI-powered LTV, churn, and recommendations",
      tables: [
        "Lifetime Value Scores",
        "Churn Predictions",
        "Next Best Actions",
      ],
      size: "1.8 GB",
      rows: "4.3M",
      tier: 3,
      locked: true,
      pricing: "+$3 / customer / month",
      refreshRate: "Weekly",
    },
  ],
  branding: {
    primaryColor: "#2970ff",
  },
  user: {
    name: "Matt Smolin",
    email: "matt@hang.com",
  },
};

