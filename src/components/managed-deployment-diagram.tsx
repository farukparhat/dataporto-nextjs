"use client";

import { Cloud, Database, Shield, Globe, Server } from "lucide-react";

export default function ManagedDeploymentDiagram() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-2xl">
        {/* Main Architecture - Side by side layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Dataporto Cloud Container */}
          <div className="border-2 border-white/20 rounded-xl p-4 bg-white/5 h-70">
            <div className="text-center mb-4">
              <div className="text-white text-sm font-medium">
                Dataporto Cloud
              </div>
            </div>

            {/* Control Plane */}
            <div className="mb-4 relative">
              <div
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-center"
                id="control-plane"
              >
                <div className="flex items-center justify-center mb-1">
                  <Shield className="h-4 w-4 text-blue-300 mr-2" />
                  <span className="text-white text-xs font-medium">
                    Control Plane
                  </span>
                </div>
                <div className="text-xs text-gray-300">
                  Governance & Orchestration
                </div>
              </div>
            </div>

            {/* Data Plane */}
            <div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Server className="h-4 w-4 text-green-300 mr-2" />
                  <span className="text-white text-xs font-medium">
                    Data Plane
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded text-center">
                    Snowflake
                  </div>
                  <div className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded text-center">
                    Databricks
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Cloud Container */}
          <div className="border-2 border-white/20 rounded-xl p-4 bg-white/5 h-70">
            <div className="text-center mb-4">
              <div className="text-white text-sm font-medium">Your Cloud</div>
            </div>

            {/* VPC */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-3">
              <div className="flex items-center justify-center mb-3">
                <Cloud className="h-4 w-4 text-cyan-300 mr-2" />
                <span className="text-white text-xs font-medium">VPC</span>
              </div>

              {/* Database inside VPC */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-2 text-center relative">
                <div className="flex items-center justify-center" id="database">
                  <Database className="h-4 w-4 text-yellow-300 mr-2" />
                  <span className="text-white text-xs font-medium">
                    Database
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Clean Data Flow Connection - Desktop only */}
          <div
            className="hidden lg:block absolute z-10"
            style={{
              top: "25%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div className="flex flex-col items-center">
              {/* Connection Line with animated flow */}
              <div className="relative flex items-center mb-3">
                {/* Solid connection line */}
                <div className="w-20 h-0.5 bg-white/60 relative overflow-hidden">
                  {/* Animated flow effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80 animate-pulse"></div>
                  <div
                    className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                    style={{
                      animation: "flowRight 3s linear infinite",
                    }}
                  ></div>
                </div>

                {/* Clean arrow */}
                <div className="ml-1">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    className="text-blue-400"
                  >
                    <path
                      d="M8 0L12 4L8 8M0 4H11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Enhanced label */}
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Data Flow</span>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-blue-500/30 rounded-lg blur-sm -z-10"></div>
              </div>
            </div>

            {/* Flow animation keyframes */}
            <style jsx>{`
              @keyframes flowRight {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(400%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
