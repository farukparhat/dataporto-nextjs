"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Cloud, Shield, Lock } from "lucide-react";

interface DeploymentOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge?: string;
  description: string;
  features: string[];
  bestFor: string;
  color: string;
}

const deploymentOptions: DeploymentOption[] = [
  {
    id: "managed",
    title: "Fully Managed",
    subtitle: "Fastest Start",
    icon: <Cloud className="h-6 w-6" />,
    description: "Get going instantly — no infrastructure required.",
    features: [
      "No servers or infrastructure to maintain",
      "Setup completed in under 30 minutes",
      "Automatic updates and monitoring included",
    ],
    bestFor:
      "Startups, SaaS vendors, and fast-moving teams who want to deliver data quickly",
    color: "blue",
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
  },
  {
    id: "private",
    title: "Customer-Managed",
    subtitle: "Bring your own cloud",
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
  },
];

// Key metrics for each deployment option
const deploymentMetrics = {
  managed: {
    timeToValue: "1-2 business days",
    maintenanceHours: "~2 hours/month",
    infrastructureManagement: "Fully managed by Dataporto",
  },
  hybrid: {
    dataResidency: "Stays in your cloud",
    complianceGap: "Minimal compliance overhead",
    securityControl: "Shared responsibility model",
  },
  private: {
    isolationLevel: "Network isolated",
    complianceControl: "Full customer control",
    customizationLevel: "Extensive customization",
  },
};

export default function DeploymentTabs() {
  const [activeTab, setActiveTab] = useState("managed");
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManuallyControlled, setIsManuallyControlled] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const TAB_DURATION = 8000; // 8 seconds per tab
  const PROGRESS_UPDATE_INTERVAL = 50; // Update progress every 50ms

  // Clear any existing timer
  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start auto-rotation with progress tracking
  const startRotation = () => {
    clearTimer();
    setProgress(0);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progressPercent = Math.min((elapsed / TAB_DURATION) * 100, 100);

      setProgress(progressPercent);

      // Move to next tab when duration is reached
      if (elapsed >= TAB_DURATION) {
        setActiveTab(currentTab => {
          const currentIndex = deploymentOptions.findIndex(
            opt => opt.id === currentTab
          );
          const nextIndex = (currentIndex + 1) % deploymentOptions.length;
          return deploymentOptions[nextIndex].id;
        });
        startTimeRef.current = Date.now();
        setProgress(0);
      }
    }, PROGRESS_UPDATE_INTERVAL);
  };

  // Handle manual tab selection
  const handleTabClick = (tabId: string) => {
    if (tabId === activeTab) return; // Don't restart if same tab

    setActiveTab(tabId);
    setIsManuallyControlled(true); // Stop auto-rotation permanently
    clearTimer(); // Stop any running timer
    setProgress(0); // Reset progress bar
  };

  // Handle hover events
  const handleMouseEnter = () => {
    if (!isManuallyControlled) {
      setIsPaused(true);
      clearTimer();
    }
  };

  const handleMouseLeave = () => {
    if (!isManuallyControlled) {
      setIsPaused(false);
      startRotation();
    }
  };

  // Initialize and cleanup
  useEffect(() => {
    if (!isPaused && !isManuallyControlled) {
      startRotation();
    }

    return () => {
      clearTimer();
    };
  }, [activeTab, isPaused, isManuallyControlled]); // React to activeTab, isPaused, and manual control changes

  const getColorClasses = (color: string, isActive: boolean) => {
    const baseClasses = "transition-all duration-200";

    if (isActive) {
      switch (color) {
        case "blue":
          return `${baseClasses} border-blue-500 bg-blue-50 text-blue-700`;
        case "purple":
          return `${baseClasses} border-purple-500 bg-purple-50 text-purple-700`;
        case "gray":
          return `${baseClasses} border-gray-500 bg-gray-50 text-gray-700`;
        default:
          return `${baseClasses} border-blue-500 bg-blue-50 text-blue-700`;
      }
    }

    return `${baseClasses} border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50`;
  };

  const getIconColorClasses = (color: string, isActive: boolean) => {
    if (isActive) {
      switch (color) {
        case "blue":
          return "text-blue-600";
        case "purple":
          return "text-purple-600";
        case "gray":
          return "text-gray-600";
        default:
          return "text-blue-600";
      }
    }
    return "text-gray-500";
  };

  const getBadgeColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "purple":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "gray":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  const getProgressBarColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "purple":
        return "bg-purple-500";
      case "gray":
        return "bg-gray-500";
      default:
        return "bg-blue-500";
    }
  };

  const activeOption = deploymentOptions.find(
    option => option.id === activeTab
  );

  const currentMetrics =
    deploymentMetrics[activeTab as keyof typeof deploymentMetrics];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tab Navigation - Statsig Style */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6">
        <div
          className="flex flex-col sm:flex-row justify-center border-b border-gray-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {deploymentOptions.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleTabClick(option.id)}
              className={`relative px-4 sm:px-8 py-3 text-center transition-all duration-200 flex-1 ${
                activeTab === option.id
                  ? "border-b-2 border-gray-900 bg-white -mb-px"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    {option.title}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {option.subtitle}
                  </div>
                  {option.badge && (
                    <Badge variant="outline" className="text-xs mt-1">
                      {option.badge}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Progress Bar - only show when auto-rotating */}
              {!isManuallyControlled && activeTab === option.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200">
                  <div
                    className="h-full transition-all duration-100 ease-linear bg-gray-400"
                    style={{
                      width: `${Math.min(progress, 100)}%`,
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area - Statsig Style */}
      {activeOption && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* TODO: Add deployment architecture diagrams for each tab */}
          {/* Will include: Fully Managed, Hybrid/Control Plane, and Customer-Managed diagrams */}

          {/* Main Content - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base p-3">
                {activeOption.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 mb-6">
                {Object.entries(currentMetrics).map(([key, value], index) => (
                  <div key={key} className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {value}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                      {key === "timeToValue" && "time to first data share"}
                      {key === "maintenanceHours" &&
                        "monthly maintenance required"}
                      {key === "infrastructureManagement" &&
                        "infrastructure management"}
                      {key === "dataResidency" &&
                        "data stays in your environment"}
                      {key === "complianceGap" && "compliance gaps introduced"}
                      {key === "securityControl" && "security responsibility"}
                      {key === "isolationLevel" && "network isolation"}
                      {key === "complianceControl" &&
                        "compliance policy control"}
                      {key === "customizationLevel" &&
                        "deployment customization"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Smaller Text Content - Right Side (where diagram was) */}
          <div className="order-1 lg:order-2 space-y-4">
            {/* Features List */}
            <div className="space-y-2 p-3">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                Key Features:
              </h4>
              {activeOption.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-gray-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Best For Section */}
            <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                Best For:
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {activeOption.bestFor}
              </p>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}
