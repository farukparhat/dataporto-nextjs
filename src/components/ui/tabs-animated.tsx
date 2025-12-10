"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export interface TabOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge?: string;
  description: string;
  features: string[];
  bestFor: string;
  color: string;
  metrics?: Record<string, string>;
  referenceUrl?: string;
  referenceText?: string;
}

interface AnimatedTabsProps {
  options: TabOption[];
  defaultTab?: string;
  autoRotate?: boolean;
  tabDuration?: number;
  className?: string;
  children?: (
    activeOption: TabOption,
    currentMetrics?: Record<string, string>
  ) => React.ReactNode;
}

export default function AnimatedTabs({
  options,
  defaultTab,
  autoRotate = false,
  tabDuration = 8000,
  className = "",
  children,
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultTab || options[0]?.id || ""
  );
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManuallyControlled, setIsManuallyControlled] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

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
    if (!autoRotate) return;

    clearTimer();
    setProgress(0);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progressPercent = Math.min((elapsed / tabDuration) * 100, 100);

      setProgress(progressPercent);

      // Move to next tab when duration is reached
      if (elapsed >= tabDuration) {
        setActiveTab(currentTab => {
          const currentIndex = options.findIndex(opt => opt.id === currentTab);
          const nextIndex = (currentIndex + 1) % options.length;
          return options[nextIndex].id;
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
    if (autoRotate) {
      setIsManuallyControlled(true); // Stop auto-rotation permanently
      clearTimer(); // Stop any running timer
      setProgress(0); // Reset progress bar
    }
  };

  // Handle hover events
  const handleMouseEnter = () => {
    if (!isManuallyControlled && autoRotate) {
      setIsPaused(true);
      clearTimer();
    }
  };

  const handleMouseLeave = () => {
    if (!isManuallyControlled && autoRotate) {
      setIsPaused(false);
      startRotation();
    }
  };

  // Initialize and cleanup
  useEffect(() => {
    if (!isPaused && !isManuallyControlled && autoRotate) {
      startRotation();
    }

    return () => {
      clearTimer();
    };
  }, [activeTab, isPaused, isManuallyControlled, autoRotate]); // React to activeTab, isPaused, and manual control changes

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
        case "green":
          return `${baseClasses} border-green-500 bg-green-50 text-green-700`;
        case "orange":
          return `${baseClasses} border-orange-500 bg-orange-50 text-orange-700`;
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
        case "green":
          return "text-green-600";
        case "orange":
          return "text-orange-600";
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
      case "green":
        return "bg-green-100 text-green-700 border-green-200";
      case "orange":
        return "bg-orange-100 text-orange-700 border-orange-200";
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
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-orange-500";
      default:
        return "bg-blue-500";
    }
  };

  const activeOption = options.find(option => option.id === activeTab);
  const currentMetrics = activeOption?.metrics;

  if (!activeOption) return null;

  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      {/* Tab Navigation */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-6">
        <div
          className="flex flex-col sm:flex-row justify-center border-b border-gray-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {options.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleTabClick(option.id)}
              className={`relative cursor-pointer px-4 sm:px-8 py-3 text-center transition-all duration-200 flex-1 ${
                activeTab === option.id
                  ? "border-b-2 border-gray-900 bg-white -mb-px"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {/* Icon */}
                <div
                  className={`${getIconColorClasses(option.color, activeTab === option.id)}`}
                >
                  {option.icon}
                </div>

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
              {!isManuallyControlled &&
                activeTab === option.id &&
                autoRotate && (
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

      {/* Main Content Area */}
      {children ? (
        children(activeOption, currentMetrics)
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Content - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base p-3">
                {activeOption.description}
              </p>

              {/* Key Metrics */}
              {currentMetrics && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 mb-6">
                  {Object.entries(currentMetrics).map(([key, value], index) => (
                    <div key={key} className="p-3">
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
                        {key === "complianceGap" &&
                          "compliance gaps introduced"}
                        {key === "securityControl" && "security responsibility"}
                        {key === "isolationLevel" && "network isolation"}
                        {key === "complianceControl" &&
                          "compliance policy control"}
                        {key === "customizationLevel" &&
                          "deployment customization"}
                        {/* Data Sharing Metrics */}
                        {key === "dataLatency" && "data freshness and updates"}
                        {key === "setupTime" && "time to provision access"}
                        {key === "storageOverhead" &&
                          "storage duplication required"}
                        {key === "governanceLevel" &&
                          "access control granularity"}
                        {key === "compatibility" && "platform support"}
                        {key === "versionControl" &&
                          "data versioning capabilities"}
                        {key === "apiAccess" && "programmatic access options"}
                        {key === "dataFormats" && "supported data formats"}
                        {key === "sharingTypes" && "asset types supported"}
                        {key === "governance" && "governance platform"}
                        {key === "clientSetup" &&
                          "client infrastructure required"}
                        {key === "dataAccess" && "client data access method"}
                        {key === "provisioning" && "recipient management"}
                        {key === "fileFormats" && "available export formats"}
                        {key === "deliveryMode" && "delivery mechanism options"}
                        {key === "scheduling" && "delivery timing control"}
                        {key === "encryption" && "data protection levels"}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Features and Best For - Right Side */}
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

            {/* Reference Link */}
            {activeOption.referenceUrl && (
              <div className="p-3">
                <a
                  href={activeOption.referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium underline"
                >
                  {activeOption.referenceText || "Learn more →"}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
