"use client";

import Image from "next/image";

export function DatabricksValuationGraphic() {
  return (
    <div
      className="relative w-[1080px] h-[1080px] overflow-hidden"
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
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

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated data flow lines */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center px-20">
        {/* Databricks Logo */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto logo-fade-in logo-float">
            <Image
              src="/databricks.svg"
              alt="Databricks"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Valuation */}
        <div className="text-center mb-8 flex-shrink-0 relative">
          <div className="text-xl font-semibold text-slate-700 mb-2 fade-in-up">
            Databricks raises @
          </div>

          <div
            className="font-bold valuation-scale relative z-10"
            style={{
              fontSize: "180px",
              lineHeight: "1",
              background: "linear-gradient(135deg, #FF3621 0%, #FF6B4A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 12px rgba(255, 54, 33, 0.3))",
            }}
          >
            $134B
          </div>

          {/* Sparkle effects */}
          <div className="sparkle sparkle-1" />
          <div className="sparkle sparkle-2" />
          <div className="sparkle sparkle-3" />
          <div className="sparkle sparkle-4" />
        </div>

        {/* Quote */}
        <div className="relative max-w-4xl slide-in-text">
          <div className="text-4xl font-bold leading-snug text-slate-900 text-center px-8 relative">
            If your enterprise customer runs on Databricks,{" "}
            <span
              className="relative inline-block text-highlight"
              style={{ color: "#2970ff" }}
            >
              here is what it means for your product
            </span>
            .
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-16 right-20">
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative opacity-70">
                <Image
                  src="/icon-transparent.png"
                  alt="Dataporto"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className="text-xl font-semibold"
                style={{ color: "#2970ff", opacity: 0.7 }}
              >
                dataporto.com
              </div>
            </div>
            <div
              className="text-sm font-semibold"
              style={{ color: "#2970ff", opacity: 0.7 }}
            >
              Empower data teams. Drive Revenue. Win Enterprise
            </div>
          </div>
        </div>
      </div>

      {/* Subtle accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #2970ff, transparent)",
        }}
      />

      {/* Animations */}
      <style jsx>{`
        @keyframes traceBorder {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -4320;
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .logo-fade-in {
          animation: fadeInScale 1.5s ease-out forwards;
        }

        .logo-float {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .valuation-scale {
          animation:
            scaleIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
            pulse 2.5s ease-in-out infinite;
          animation-delay: 0s, 2s;
          opacity: 0;
        }

        .sparkle {
          position: absolute;
          width: 24px;
          height: 24px;
          pointer-events: none;
          z-index: 20;
        }

        .sparkle::before,
        .sparkle::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          background: linear-gradient(
            90deg,
            transparent,
            #ffd700,
            #ff3621,
            #ffd700,
            transparent
          );
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.8);
        }

        .sparkle::before {
          width: 24px;
          height: 2px;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .sparkle::after {
          width: 16px;
          height: 2px;
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .sparkle-1 {
          top: 20%;
          right: 15%;
          animation: sparkle 2s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .sparkle-2 {
          top: 30%;
          left: 10%;
          animation: sparkle 2.5s ease-in-out infinite;
          animation-delay: 2s;
        }

        .sparkle-3 {
          bottom: 25%;
          right: 20%;
          animation: sparkle 2.2s ease-in-out infinite;
          animation-delay: 2.3s;
        }

        .sparkle-4 {
          bottom: 35%;
          left: 15%;
          animation: sparkle 2.8s ease-in-out infinite;
          animation-delay: 1.8s;
        }

        @keyframes slideInText {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textHighlight {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .slide-in-text {
          animation: slideInText 1s ease-out forwards;
          animation-delay: 1.5s;
          opacity: 0;
        }

        .text-highlight {
          animation: textHighlight 2s ease-in-out infinite;
          animation-delay: 3s;
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
        .data-line-vertical-1 {
          animation: dataFlowVertical1 9s linear infinite;
        }
        .data-line-vertical-2 {
          animation: dataFlowVertical2 10s linear infinite;
        }

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
      `}</style>
    </div>
  );
}
