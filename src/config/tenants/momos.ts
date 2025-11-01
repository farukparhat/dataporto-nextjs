import { TenantConfig } from "./types";

export const momosConfig: TenantConfig = {
  id: "momos",
  name: "Momos",
  logo: "/brands/icons/momos.svg",
  datasets: [
    {
      id: "orders",
      name: "Orders",
      description: "Restaurant order history and transaction data",
      tables: ["orders", "order_items", "payments", "delivery_tracking"],
      size: "3.8 GB",
      rows: "24.5M",
    },
    {
      id: "menu-items",
      name: "Menu & Inventory",
      description: "Menu items, pricing, and inventory levels",
      tables: ["menu_items", "categories", "inventory", "suppliers"],
      size: "850 MB",
      rows: "2.1M",
    },
    {
      id: "locations",
      name: "Locations & Staff",
      description: "Restaurant locations, staff, and operational data",
      tables: ["locations", "staff", "shifts", "performance_metrics"],
      size: "420 MB",
      rows: "980K",
    },
    {
      id: "customer-feedback",
      name: "Customer Feedback",
      description: "Reviews, ratings, and customer satisfaction data",
      tables: ["reviews", "ratings", "feedback", "loyalty_program"],
      size: "1.6 GB",
      rows: "9.3M",
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
