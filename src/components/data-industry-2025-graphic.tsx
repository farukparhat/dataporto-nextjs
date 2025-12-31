"use client";

import Image from "next/image";
import { IconCirclesRelation } from "@tabler/icons-react";

export function DataIndustry2025Graphic() {
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
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative circles behind glass for visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full opacity-30"
          style={{
            background: "#2970ff",
            animation: "pulse1 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[15%] right-[20%] w-80 h-80 rounded-full opacity-20"
          style={{
            background: "#60a5fa",
            animation: "pulse2 5s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[50%] right-[10%] w-48 h-48 rounded-full opacity-25"
          style={{
            background: "#3b82f6",
            animation: "pulse3 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-center items-center px-20 py-16 pb-28">
        {/* Liquid glass container */}
        <div
          className="relative w-[900px] px-20 py-16 rounded-[32px]"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)",
            animation: "fadeInScale 1s ease-out",
          }}
        >
          {/* Very subtle gradient overlay for light refraction */}
          <div
            className="absolute inset-0 rounded-[32px] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.05) 100%)",
            }}
          />

          {/* Shimmer effect */}
          <div
            className="absolute inset-0 rounded-[32px] pointer-events-none overflow-hidden"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)",
              animation: "shimmer 4s ease-in-out infinite",
            }}
          />

          {/* Main content */}
          <div className="relative z-10 space-y-8">
            {/* Year and title */}
            <div className="space-y-3">
              <div
                className="text-9xl font-bold leading-none"
                style={{
                  color: "#2970ff",
                  animation: "fadeInScaleUp 1s ease-out 0.5s backwards",
                }}
              >
                2025
              </div>
              <div
                className="text-5xl font-semibold text-slate-700"
                style={{
                  animation: "slideInRight 1s ease-out 1s backwards",
                }}
              >
                Year in Enterprise Data
              </div>
            </div>

            {/* Divider line */}
            <div
              className="h-1 rounded-full w-32"
              style={{
                background: "#2970ff",
                animation: "expandWidth 1s ease-out 1.5s backwards",
              }}
            />

            {/* Three categories */}
            <div className="space-y-6">
              {/* New Partnerships with logos */}
              <div
                className="space-y-3"
                style={{
                  animation: "fadeInUp 1s ease-out 2.2s backwards",
                }}
              >
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#2970ff" }}
                >
                  New Data Partnerships
                </div>
                <div className="flex items-center gap-6">
                  {/* Snowflake + Anthropic */}
                  <div
                    className="flex items-center gap-3"
                    style={{
                      animation: "fadeInScale 0.8s ease-out 2.8s backwards",
                    }}
                  >
                    <div className="w-24 h-24">
                      <Image
                        src="/snowflake.svg"
                        alt="Snowflake"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <IconCirclesRelation size={32} stroke={2} color="#2970ff" />
                    <div className="w-24 h-24">
                      <Image
                        src="/companies/anthropic.svg"
                        alt="Anthropic"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Separator */}
                  <div
                    className="w-px h-16 bg-slate-300"
                    style={{ opacity: 0.5 }}
                  />

                  {/* Databricks + OpenAI */}
                  <div
                    className="flex items-center gap-3"
                    style={{
                      animation: "fadeInScale 0.8s ease-out 3.2s backwards",
                    }}
                  >
                    <div className="w-24 h-24">
                      <Image
                        src="/databricks.svg"
                        alt="Databricks"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <IconCirclesRelation size={32} stroke={2} color="#2970ff" />
                    <div className="w-24 h-24">
                      <Image
                        src="/companies/openai.svg"
                        alt="OpenAI"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Acquisitions with logos */}
              <div
                className="space-y-3"
                style={{
                  animation: "fadeInUp 1s ease-out 3.8s backwards",
                }}
              >
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#2970ff" }}
                >
                  Strategic Data Acquisitions
                </div>
                <div className="flex items-center gap-6">
                  {/* Fivetran + Census */}
                  <div
                    className="flex items-center gap-3"
                    style={{
                      animation: "fadeInScale 0.8s ease-out 4.4s backwards",
                    }}
                  >
                    <div className="w-24 h-24">
                      <Image
                        src="/companies/fivetran.svg"
                        alt="Fivetran"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: "#2970ff" }}
                    >
                      +
                    </div>
                    <div className="w-24 h-24">
                      <Image
                        src="/companies/census.svg"
                        alt="Census"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Separator */}
                  <div
                    className="w-px h-16 bg-slate-300"
                    style={{ opacity: 0.5 }}
                  />

                  {/* IBM + Confluent */}
                  <div
                    className="flex items-center gap-3"
                    style={{
                      animation: "fadeInScale 0.8s ease-out 4.8s backwards",
                    }}
                  >
                    <div className="w-24 h-24">
                      <Image
                        src="/companies/ibm.svg"
                        alt="IBM"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: "#2970ff" }}
                    >
                      +
                    </div>
                    <div className="w-24 h-24">
                      <Image
                        src="/companies/confluent.svg"
                        alt="Confluent"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fastest Growing Companies with logos */}
              <div
                className="space-y-3"
                style={{
                  animation: "fadeInUp 1s ease-out 5.4s backwards",
                }}
              >
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#2970ff" }}
                >
                  Fastest Growing Data Companies
                </div>
                <div className="flex items-center gap-5">
                  <div
                    className="w-24 h-24"
                    style={{
                      animation: "fadeInScale 0.6s ease-out 6s backwards",
                    }}
                  >
                    <Image
                      src="/companies/sigma.svg"
                      alt="Sigma"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-24 h-24"
                    style={{
                      animation: "fadeInScale 0.6s ease-out 6.2s backwards",
                    }}
                  >
                    <Image
                      src="/companies/airbyte.svg"
                      alt="Airbyte"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-24 h-24"
                    style={{
                      animation: "fadeInScale 0.6s ease-out 6.4s backwards",
                    }}
                  >
                    <Image
                      src="/companies/pinecone.svg"
                      alt="Pinecone"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-24 h-24"
                    style={{
                      animation: "fadeInScale 0.6s ease-out 6.6s backwards",
                    }}
                  >
                    <Image
                      src="/companies/hex.svg"
                      alt="Hex"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className="w-24 h-24"
                    style={{
                      animation: "fadeInScale 0.6s ease-out 6.8s backwards",
                    }}
                  >
                    <Image
                      src="/companies/motherduck.png"
                      alt="MotherDuck"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="absolute bottom-12 right-20"
          style={{
            animation: "fadeIn 1s ease-out 7.2s backwards",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 relative opacity-70">
              <Image
                src="/icon-transparent.png"
                alt="Dataporto"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="text-3xl font-semibold"
              style={{ color: "#2970ff", opacity: 0.7 }}
            >
              dataporto.com
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

        @keyframes pulse1 {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes pulse2 {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.3;
          }
        }

        @keyframes pulse3 {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.12);
            opacity: 0.35;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInScaleUp {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandWidth {
          0% {
            width: 0;
          }
          100% {
            width: 8rem;
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

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
