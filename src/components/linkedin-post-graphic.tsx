"use client";

import React from "react";
import Image from "next/image";

interface LinkedInPostGraphicProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  footer?: string;
  theme?: "dark" | "light";
  logos?: Array<{ src: string; alt: string }>;
}

export function LinkedInPostGraphic({
  title,
  subtitle,
  highlight,
  footer = "dataporto.com",
  theme = "light",
  logos = [],
}: LinkedInPostGraphicProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-[1080px] h-[1080px] overflow-hidden`}
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: isDark
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Animated border trace SVG */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="1080"
        height="1080"
        style={{ overflow: "visible" }}
      >
        <rect
          x="2"
          y="2"
          width="1076"
          height="1076"
          fill="none"
          stroke="#2970ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="800 3520"
          strokeDashoffset="0"
          opacity="0.7"
          style={{
            animation: "traceBorder 10s linear infinite",
          }}
        />
      </svg>
      <style jsx>{`
        @keyframes dataFlow1 {
          0% {
            transform: translateX(-100%) translateY(0);
          }
          100% {
            transform: translateX(100vw) translateY(-50px);
          }
        }
        @keyframes dataFlow2 {
          0% {
            transform: translateX(-100%) translateY(0);
          }
          100% {
            transform: translateX(100vw) translateY(30px);
          }
        }
        @keyframes dataFlow3 {
          0% {
            transform: translateX(100vw) translateY(0);
          }
          100% {
            transform: translateX(-100%) translateY(-30px);
          }
        }
        @keyframes dataFlow4 {
          0% {
            transform: translateX(100vw) translateY(0);
          }
          100% {
            transform: translateX(-100%) translateY(40px);
          }
        }
        @keyframes dataFlowVertical1 {
          0% {
            transform: translateY(-100%) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(20px);
          }
        }
        @keyframes dataFlowVertical2 {
          0% {
            transform: translateY(100vh) translateX(0);
          }
          100% {
            transform: translateY(-100%) translateX(-30px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .data-line-1 {
          animation: dataFlow1 8s linear infinite;
        }
        .data-line-2 {
          animation: dataFlow2 10s linear infinite;
          animation-delay: 2s;
        }
        .data-line-3 {
          animation: dataFlow3 9s linear infinite;
          animation-delay: 1s;
        }
        .data-line-4 {
          animation: dataFlow4 11s linear infinite;
          animation-delay: 3s;
        }
        .data-line-vertical-1 {
          animation: dataFlowVertical1 9s linear infinite;
        }
        .data-line-vertical-2 {
          animation: dataFlowVertical2 10s linear infinite;
        }
        .data-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .logo-float {
          animation: float 4s ease-in-out infinite;
        }
        .logo-fade-in {
          animation: fadeInScale 1.5s ease-out forwards;
        }
        @keyframes traceBorder {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -4320;
          }
        }
        @keyframes traceBorderSmall {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -720;
          }
        }
      `}</style>
      {/* Subtle background pattern */}
      <div
        className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.03]"}`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 data-pulse"
        style={{ background: "#2970ff" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15 data-pulse"
        style={{
          background: "#2970ff",
          animationDelay: "1.5s",
        }}
      />

      {/* Animated data flow lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal flowing lines */}
        <div
          className="data-line-1 absolute top-[20%] left-0 w-[200px] h-[2px] opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent, #2970ff, transparent)",
          }}
        />
        <div
          className="data-line-2 absolute top-[45%] left-0 w-[250px] h-[2px] opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent, #2970ff, transparent)",
          }}
        />
        <div
          className="data-line-3 absolute top-[65%] right-0 w-[180px] h-[2px] opacity-35"
          style={{
            background:
              "linear-gradient(90deg, transparent, #2970ff, transparent)",
          }}
        />
        <div
          className="data-line-4 absolute top-[80%] right-0 w-[220px] h-[2px] opacity-25"
          style={{
            background:
              "linear-gradient(90deg, transparent, #2970ff, transparent)",
          }}
        />

        {/* Vertical flowing lines */}
        <div
          className="data-line-vertical-1 absolute left-[15%] top-0 h-[150px] w-[2px] opacity-30"
          style={{
            background:
              "linear-gradient(180deg, transparent, #2970ff, transparent)",
            animationDelay: "4s",
          }}
        />
        <div
          className="data-line-vertical-2 absolute right-[20%] top-0 h-[180px] w-[2px] opacity-25"
          style={{
            background:
              "linear-gradient(180deg, transparent, #2970ff, transparent)",
            animationDelay: "2.5s",
          }}
        />
      </div>

      {/* Animated logos */}
      {logos.length > 0 && (
        <div className="absolute top-16 right-16 flex items-center gap-6">
          {logos.map((logo, index) => (
            <div
              key={logo.alt}
              className="logo-fade-in logo-float bg-white rounded-2xl shadow-xl p-4 border border-slate-200 relative"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div className="w-20 h-20 flex items-center justify-center relative z-10">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: "80px", maxHeight: "80px" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-center px-20 py-16">
        {/* Quote mark */}
        <div
          className="text-[120px] leading-none font-serif mb-4 opacity-20"
          style={{ color: "#2970ff" }}
        >
          "
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Highlight text if provided */}
          {highlight && (
            <div
              className="text-3xl font-semibold tracking-tight leading-snug"
              style={{ color: "#2970ff" }}
            >
              {highlight}
            </div>
          )}

          {/* Main title */}
          <div
            className={`text-8xl font-bold leading-[1.1] ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </div>

          {/* Subtitle if provided */}
          {subtitle && (
            <div
              className={`text-3xl font-medium leading-snug ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Closing quote mark */}
        <div
          className="text-[120px] leading-none font-serif mt-4 text-right opacity-20"
          style={{ color: "#2970ff" }}
        >
          "
        </div>

        {/* Footer - only show if footer text is provided */}
        {footer && (
          <div className="flex items-center justify-between pt-8">
            <div
              className={`text-xl font-semibold ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {footer}
            </div>

            {/* Accent bar */}
            <div
              className="w-32 h-1 rounded-full"
              style={{ background: "#2970ff" }}
            />
          </div>
        )}
      </div>

      {/* Subtle accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #2970ff, transparent)",
        }}
      />
    </div>
  );
}
