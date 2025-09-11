"use client";

import AnimatedTabs, { TabOption } from "@/components/ui/tabs-animated";
import { Check, Shield, Lock } from "lucide-react";
import { IconBox } from "@tabler/icons-react";

const deploymentOptions: TabOption[] = [
  {
    id: "managed",
    title: "Fully Managed",
    subtitle: "Fastest Start",
    icon: <IconBox className="h-6 w-6" />,
    description: "Get going instantly — no infrastructure required.",
    features: [
      "No servers or infrastructure to maintain",
      "Setup completed in under 30 minutes",
      "Automatic updates and monitoring included",
    ],
    bestFor:
      "Startups, SaaS vendors, and fast-moving teams who want to deliver data quickly",
    color: "blue",
    metrics: {
      timeToValue: "1-2 business days",
      maintenanceHours: "~2 hours/month",
      infrastructureManagement: "Fully managed by Dataporto",
    },
  },
  {
    id: "hybrid",
    title: "Hybrid / Control Plane",
    subtitle: "Keep data in your environment",
    icon: <Shield className="h-6 w-6" />,
    description:
      "Keep data in your environment — Dataporto handles the sharing.",
    features: [
      "Data remains in your cloud environment",
      "Agent software runs in your VPC",
      "Compatible with Snowflake and Databricks",
      "Meets most compliance requirements",
    ],
    bestFor:
      "Enterprise SaaS vendors and companies with strict data residency requirements",
    color: "purple",
    metrics: {
      dataResidency: "Stays in your cloud",
      complianceGap: "Minimal compliance overhead",
      securityControl: "Shared responsibility model",
    },
  },
  {
    id: "private",
    title: "Customer-Managed",
    subtitle: "Run in your cloud or on-premise",
    icon: <Lock className="h-6 w-6" />,
    description:
      "For the most regulated industries — total control in your cloud.",
    features: [
      "Deployed in your AWS/Azure/GCP account",
      "Complete network isolation",
      "Supports SOC 2, HIPAA, and FedRAMP requirements",
    ],
    bestFor:
      "Highly regulated industries needing full control and compliance guarantees",
    color: "gray",
    metrics: {
      isolationLevel: "Network isolated",
      complianceControl: "Full customer control",
      customizationLevel: "Extensive customization",
    },
  },
];

export default function DeploymentTabs() {
  return (
    <>
      <AnimatedTabs
        options={deploymentOptions}
        defaultTab="managed"
        autoRotate={true}
        tabDuration={8000}
      />

      {/* Bottom Note */}
      <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-center">
          <Check className="h-4 w-4 text-green-600 mr-2" />
          <span className="font-medium text-gray-900 text-sm">
            No matter the setup, Dataporto ensures secure, governed, and
            enterprise-ready data sharing.
          </span>
        </div>
      </div>
    </>
  );
}
