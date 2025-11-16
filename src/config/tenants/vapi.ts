import { TenantConfig } from "./types";

export const vapiConfig: TenantConfig = {
  id: "vapi",
  name: "Vapi",
  logo: "/brands/icons/vapi.svg",
  datasets: [
    // Tier 1: Core Data
    {
      id: "calls-transcripts",
      name: "Calls & Transcripts",
      description:
        "Complete call records with AI-generated transcripts, timestamps, duration, direction, and call outcomes",
      tagline: "Full call history with real-time transcripts",
      tables: [
        "Calls",
        "Call Transcripts",
        "Call Participants",
        "Call Metadata",
        "Sentiment Analysis",
      ],
      size: "342.8 GB",
      rows: "1.2B",
      tier: 1,
      locked: false,
      pricing: "$5 / 1000 calls / month",
      refreshRate: "Real-time",
    },
    {
      id: "voice-recordings",
      name: "Voice Recordings",
      description:
        "Audio files of all voice interactions with metadata, quality metrics, and S3/GCP storage references",
      tagline: "Complete audio archives with metadata",
      tables: [
        "Recordings",
        "Audio Metadata",
        "Storage References",
        "Quality Metrics",
      ],
      size: "2.8 TB",
      rows: "850M",
      tier: 1,
      locked: false,
      pricing: "$8 / 1000 calls / month",
      refreshRate: "Real-time",
    },
    // Tier 2: Integration & Performance Data
    {
      id: "webhook-logs",
      name: "Webhook & API Logs",
      description:
        "Complete webhook event logs, API request/response data, integration status, and performance metrics",
      tagline: "Full integration and API activity tracking",
      tables: [
        "Webhook Events",
        "API Requests",
        "Response Logs",
        "Integration Status",
        "Error Logs",
        "Rate Limits",
      ],
      size: "156.4 GB",
      rows: "2.4B",
      tier: 2,
      locked: true,
      pricing: "+$3 / 1000 calls / month",
      refreshRate: "Real-time",
    },
    {
      id: "assistant-performance",
      name: "Assistant Performance Analytics",
      description:
        "AI assistant performance metrics, latency data, success rates, tool calling analytics, and A/B test results",
      tagline: "Comprehensive AI performance insights",
      tables: [
        "Assistant Metrics",
        "Latency Stats",
        "Success Rates",
        "Tool Calling Logs",
        "A/B Test Results",
        "Model Performance",
      ],
      size: "89.2 GB",
      rows: "645M",
      tier: 2,
      locked: true,
      pricing: "+$6 / 1000 calls / month",
      refreshRate: "Hourly",
    },
    {
      id: "messaging-data",
      name: "SMS & Messaging",
      description:
        "SMS messages, message delivery status, conversation threads, and cross-channel communication logs",
      tagline: "Multi-channel messaging data",
      tables: [
        "SMS Messages",
        "Delivery Status",
        "Conversation Threads",
        "Message Metadata",
      ],
      size: "42.6 GB",
      rows: "328M",
      tier: 2,
      locked: true,
      pricing: "+$2 / 1000 messages / month",
      refreshRate: "Real-time",
    },
  ],
  branding: {
    primaryColor: "#6366F1",
    accentColor: "#EEF2FF",
  },
  user: {
    name: "Jordan Dearsley",
    email: "jordan@vapi.ai",
  },
};

