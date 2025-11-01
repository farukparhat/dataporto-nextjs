import { TenantConfig } from "./types";

export const defaultConfig: TenantConfig = {
  id: "default",
  name: "Senti",
  logo: "/brands/senti.png",
  datasets: [
    {
      id: "customer-analytics",
      name: "Customer Analytics",
      description: "Comprehensive customer behavior and interaction data",
      tables: ["customers", "interactions", "sessions", "events"],
      size: "2.4 GB",
      rows: "12.5M",
    },
    {
      id: "reviews",
      name: "Customer Reviews",
      description: "Customer feedback, ratings, and sentiment analysis",
      tables: ["reviews", "ratings", "sentiment", "feedback"],
      size: "1.2 GB",
      rows: "8.7M",
    },
    {
      id: "support-tickets",
      name: "Support Tickets",
      description: "Customer support interactions and resolution data",
      tables: ["tickets", "conversations", "resolutions", "agents"],
      size: "950 MB",
      rows: "3.2M",
    },
  ],
  branding: {
    primaryColor: "#2970ff",
  },
};

