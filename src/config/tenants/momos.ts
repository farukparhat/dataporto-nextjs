import { TenantConfig } from "./types";

export const momosConfig: TenantConfig = {
  id: "momos",
  name: "Momos",
  logo: "/brands/icons/momos.svg",
  datasets: [
    // Tier 1: Base Feeds (Raw Data Layer) - Available
    {
      id: "reviews",
      name: "Reviews",
      description: "All customer reviews from Google, app stores, and surveys",
      tagline: "Customer feedback across all channels",
      tables: ["Customer Reviews", "Review Responses", "Reviewer Profiles"],
      size: "1.6 GB",
      rows: "9.3M",
      tier: 1,
      locked: false,
      pricing: "$1 / location / month",
      refreshRate: "Daily",
    },
    {
      id: "platform-reviews",
      name: "Platform Reviews",
      description:
        "Reviews from Google, Yelp, and other local business platforms",
      tagline: "Google, Yelp, and local platform reviews",
      tables: ["Google Reviews", "Yelp Reviews", "Local Platform Reviews"],
      size: "1.2 GB",
      rows: "7.8M",
      tier: 1,
      locked: true,
      pricing: "$0.75 / location / month",
      refreshRate: "Daily",
    },
    {
      id: "app-reviews",
      name: "App Reviews",
      description: "Customer reviews from iOS App Store and Google Play Store",
      tagline: "iOS and Android app store reviews",
      tables: ["iOS App Reviews", "Android App Reviews", "App Ratings"],
      size: "680 MB",
      rows: "4.2M",
      tier: 1,
      locked: true,
      pricing: "$0.50 / location / month",
      refreshRate: "Daily",
    },
    // Tier 2: Enriched Insights (Operational Layer) - Locked
    {
      id: "incident-feed",
      name: "Incident Feed",
      description:
        "Unified incident dataset combining reviews, tickets, and DMs with severity & SLA status",
      tagline: "Unified incident tracking with severity & SLA",
      tables: ["Incident Logs", "Severity Tracking", "SLA Status"],
      size: "2.8 GB",
      rows: "15.2M",
      tier: 2,
      locked: true,
      pricing: "+$1 / location / month",
      refreshRate: "Daily",
    },
    {
      id: "sku-insights",
      name: "SKU Insights",
      description:
        "Aggregated feedback and incident metrics by product/SKU (e.g., Whopper, Iced Coffee). Includes product sentiment, issue frequency, and satisfaction deltas.",
      tagline: "Product-level feedback and performance metrics",
      tables: [
        "Product Feedback",
        "SKU Performance",
        "Issue Frequency",
        "Satisfaction Metrics",
      ],
      size: "850 MB",
      rows: "5.8M",
      tier: 2,
      locked: true,
      pricing: "+$1.5 / location / month",
      refreshRate: "Weekly",
    },
    // Tier 3: Premium Benchmarks (Strategic Layer) - Locked
    {
      id: "cohort-benchmarks",
      name: "Cohort Benchmarks",
      description: "Peer-group comparison by brand, region, and store type",
      tagline: "Compare performance across brands and regions",
      tables: [
        "Brand Comparison",
        "Regional Performance",
        "Store Type Analysis",
      ],
      size: "320 MB",
      rows: "1.2M",
      tier: 3,
      locked: true,
      pricing: "+$5 / location / month",
      refreshRate: "Monthly",
    },
  ],
  branding: {
    primaryColor: "#2970ff",
  },
  user: {
    name: "Sai Alluri",
    email: "sai@momos.com",
  },
};
