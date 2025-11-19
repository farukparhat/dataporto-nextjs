import { TenantConfig } from "./types";

export const qualtricsConfig: TenantConfig = {
  id: "qualtrics",
  name: "Qualtrics",
  logo: "/brands/icons/qualtrics.jpeg",
  datasets: [
    // Tier 1: Core Experience Data
    {
      id: "customer-surveys",
      name: "Customer Experience Surveys",
      description:
        "Customer feedback surveys including NPS, CSAT, CES scores with response data, sentiment analysis, and demographics",
      tagline: "Complete customer feedback and satisfaction data",
      tables: [
        "Survey Responses",
        "NPS Scores",
        "CSAT Metrics",
        "Customer Sentiment",
        "Response Metadata",
      ],
      size: "156.8 GB",
      rows: "892M",
      tier: 1,
      locked: false,
      pricing: "$6 / 10k responses / month",
      refreshRate: "Real-time",
    },
    {
      id: "employee-engagement",
      name: "Employee Experience Data",
      description:
        "Employee engagement surveys, pulse checks, exit interviews, onboarding feedback, and sentiment tracking",
      tagline: "Employee feedback and engagement analytics",
      tables: [
        "Engagement Surveys",
        "Pulse Responses",
        "Exit Interviews",
        "Onboarding Feedback",
        "Sentiment Trends",
      ],
      size: "78.4 GB",
      rows: "324M",
      tier: 1,
      locked: false,
      pricing: "$5 / 10k responses / month",
      refreshRate: "Daily",
    },
    // Tier 2: Analytics & Insights
    {
      id: "journey-analytics",
      name: "Journey Analytics",
      description:
        "Customer journey mapping data, touchpoint analysis, experience paths, and conversion tracking across channels",
      tagline: "Multi-touchpoint journey and experience tracking",
      tables: [
        "Journey Maps",
        "Touchpoint Data",
        "Experience Paths",
        "Channel Interactions",
        "Conversion Events",
      ],
      size: "124.6 GB",
      rows: "567M",
      tier: 2,
      locked: true,
      pricing: "+$8 / 10k responses / month",
      refreshRate: "Hourly",
    },
    {
      id: "text-analytics",
      name: "Text & Sentiment Analytics",
      description:
        "AI-powered text analysis, sentiment classification, topic modeling, emotion detection, and trend identification",
      tagline: "Advanced NLP and sentiment insights",
      tables: [
        "Text Analysis",
        "Sentiment Scores",
        "Topic Models",
        "Emotion Detection",
        "Trend Insights",
      ],
      size: "210.3 GB",
      rows: "1.1B",
      tier: 2,
      locked: true,
      pricing: "+$10 / 10k responses / month",
      refreshRate: "Hourly",
    },
    {
      id: "action-planning",
      name: "Action Planning & Workflows",
      description:
        "Automated action triggers, workflow executions, alert history, task assignments, and closed-loop feedback tracking",
      tagline: "Experience improvement workflows and actions",
      tables: [
        "Action Triggers",
        "Workflow Logs",
        "Alert History",
        "Task Assignments",
        "Closed Loop Tracking",
      ],
      size: "45.9 GB",
      rows: "198M",
      tier: 2,
      locked: true,
      pricing: "+$4 / 10k responses / month",
      refreshRate: "Real-time",
    },
  ],
  branding: {
    primaryColor: "#00B2A9",
    accentColor: "#E6F7F6",
  },
  user: {
    name: "Ryan Smith",
    email: "ryan@qualtrics.com",
  },
};
