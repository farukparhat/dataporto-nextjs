import { TenantConfig } from "./types";

export const inceptaiConfig: TenantConfig = {
  id: "inceptai",
  name: "Incept AI",
  logo: "/brands/icons/inceptai.jpeg",
  datasets: [
    // Tier 1: Core Data
    {
      id: "call-logs",
      name: "Call Logs & Transcripts",
      description:
        "Complete call records with transcripts, timestamps, outcomes, and routing information for all AI-handled calls",
      tagline: "Full call history with transcripts and outcomes",
      tables: [
        "Call Logs",
        "Call Transcripts",
        "Call Outcomes",
        "Transfer Records",
        "Call Audio Metadata",
      ],
      size: "124.5 GB",
      rows: "458M",
      tier: 1,
      locked: false,
      pricing: "$3 / location / month",
      refreshRate: "Real-time",
    },
    {
      id: "voice-orders",
      name: "Voice Orders",
      description:
        "Orders placed via phone with item details, modifications, pricing, customer info, and fulfillment status",
      tagline: "Phone order data with complete item breakdown",
      tables: [
        "Voice Orders",
        "Order Items",
        "Order Modifications",
        "Customer Details",
        "Order Status",
        "POS Integration Logs",
      ],
      size: "67.8 GB",
      rows: "198M",
      tier: 1,
      locked: false,
      pricing: "$4 / location / month",
      refreshRate: "Real-time",
    },
    // Tier 2: Analytics
    {
      id: "call-analytics",
      name: "Call Performance Analytics",
      description:
        "Call volume trends, peak times, duration analysis, completion rates, transfer patterns, and capacity metrics",
      tagline: "Comprehensive call performance insights",
      tables: [
        "Call Metrics",
        "Volume Trends",
        "Peak Time Analysis",
        "Transfer Analytics",
        "Capacity Utilization",
        "Response Times",
      ],
      size: "24.6 GB",
      rows: "86.3M",
      tier: 2,
      locked: true,
      pricing: "+$5 / location / month",
      refreshRate: "Hourly",
    },
    {
      id: "order-accuracy",
      name: "Order Accuracy & Quality",
      description:
        "Order accuracy rates (97%+), error analysis, correction logs, customer satisfaction scores, and quality metrics",
      tagline: "Order accuracy tracking and quality assurance",
      tables: [
        "Accuracy Metrics",
        "Error Logs",
        "Corrections",
        "Satisfaction Scores",
        "Quality Audit Trails",
      ],
      size: "15.2 GB",
      rows: "45.8M",
      tier: 2,
      locked: true,
      pricing: "+$4 / location / month",
      refreshRate: "Daily",
    },
  ],
  branding: {
    primaryColor: "#3B82F6",
    accentColor: "#EFF6FF",
  },
  user: {
    name: "Umut Isik",
    email: "umut@incept.ai",
  },
};
