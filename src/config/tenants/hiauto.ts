import { TenantConfig } from "./types";

export const hiautoConfig: TenantConfig = {
  id: "hiauto",
  name: "Hi Auto",
  logo: "/brands/icons/hi-auto.png",
  datasets: [
    // Tier 1: Core Order & Conversation Data
    {
      id: "drive-thru-recordings",
      name: "Drive-Thru Recordings & Transcripts",
      description:
        "Complete audio recordings and AI transcripts of drive-thru orders with customer interactions, order modifications, and conversation analytics",
      tagline: "Full drive-thru conversation history and transcripts",
      tables: [
        "Order Recordings",
        "Order Transcripts",
        "Conversation Analytics",
        "Audio Metadata",
        "Language Detection",
      ],
      size: "2.4 TB",
      rows: "1.8B",
      tier: 1,
      locked: false,
      pricing: "$6 / 1000 orders / month",
      refreshRate: "Real-time",
    },
    {
      id: "order-performance",
      name: "Order Performance Metrics",
      description:
        "Order completion rates (93%+), accuracy metrics (96%), average ticket size, upsell success rates, and order timing analytics",
      tagline: "Comprehensive order accuracy and completion tracking",
      tables: [
        "Order Metrics",
        "Completion Rates",
        "Accuracy Scores",
        "Upsell Performance",
        "Timing Analytics",
        "Error Logs",
      ],
      size: "124.6 GB",
      rows: "687M",
      tier: 1,
      locked: false,
      pricing: "$4 / 1000 orders / month",
      refreshRate: "Real-time",
    },
    // Tier 2: Operational & Customer Intelligence
    {
      id: "team-operational-insights",
      name: "Team Operational Insights",
      description:
        "Store team performance analytics, labor efficiency metrics, AI handoff rates, staff intervention patterns, and training insights",
      tagline: "Team productivity and operational efficiency analytics",
      tables: [
        "Team Performance",
        "Labor Efficiency",
        "AI Handoffs",
        "Staff Interventions",
        "Training Insights",
        "Stress Indicators",
      ],
      size: "89.3 GB",
      rows: "342M",
      tier: 2,
      locked: true,
      pricing: "+$5 / 1000 orders / month",
      refreshRate: "Daily",
    },
    {
      id: "customer-insights",
      name: "Customer Insights & Sentiment",
      description:
        "Customer sentiment analysis, voice tone detection, satisfaction indicators, complaint patterns, and preference tracking from drive-thru interactions",
      tagline: "AI-powered customer sentiment and preference insights",
      tables: [
        "Sentiment Analysis",
        "Voice Tone Detection",
        "Satisfaction Scores",
        "Complaint Patterns",
        "Customer Preferences",
        "Frustration Points",
      ],
      size: "156.8 GB",
      rows: "892M",
      tier: 2,
      locked: true,
      pricing: "+$7 / 1000 orders / month",
      refreshRate: "Real-time",
    },
    {
      id: "menu-optimization",
      name: "Menu & Upsell Optimization",
      description:
        "Dynamic upsell performance, menu item popularity, LTO effectiveness, regional offer analysis, and AI recommendation success rates",
      tagline: "Data-driven menu and upsell strategy insights",
      tables: [
        "Upsell Analytics",
        "Menu Item Performance",
        "LTO Effectiveness",
        "Regional Offers",
        "Recommendation Success",
        "Check Size Impact",
      ],
      size: "67.4 GB",
      rows: "298M",
      tier: 2,
      locked: true,
      pricing: "+$6 / 1000 orders / month",
      refreshRate: "Hourly",
    },
  ],
  branding: {
    primaryColor: "#6B3FFF",
    accentColor: "#F3F0FF",
  },
  user: {
    name: "Crystal Deaderick",
    email: "crystal@hi.auto",
  },
};

