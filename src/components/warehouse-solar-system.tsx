"use client";

import Image from "next/image";

interface Company {
  name: string;
  logo?: string;
}

interface Orbit {
  category: string;
  companies: Company[];
}

export function WarehouseSolarSystem() {
  const orbits: Orbit[] = [
    {
      category: "BI",
      companies: [
        {
          name: "Sigma",
          logo: "/brands/warehouse-native-solutions/sigma-logo.svg",
        },
      ],
    },
    {
      category: "Product Analytics",
      companies: [
        {
          name: "Kubit",
          logo: "/brands/warehouse-native-solutions/kubit-logo.svg",
        },
      ],
    },
    {
      category: "CDP & Marketing",
      companies: [
        {
          name: "Hightouch",
          logo: "/brands/warehouse-native-solutions/hightouch-logo.svg",
        },
        {
          name: "Rudderstack",
          logo: "/brands/warehouse-native-solutions/rudderstack-logo.svg",
        },
      ],
    },
  ];

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

      {/* Title */}
      <div className="absolute top-16 left-0 right-0 text-center z-10 px-20">
        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          Warehouse-native software is the future of enterprise B2B SaaS
        </h1>
      </div>

      {/* Solar System Container */}
      <div className="absolute inset-0 flex items-center justify-center pt-12">
        <div className="relative w-[900px] h-[900px]">
          {/* Sun - Data Warehouse logos at center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              {/* Circle container around warehouses */}
              <div
                className="relative w-52 h-52 rounded-full flex items-center justify-center border-4"
                style={{
                  borderColor: "#2970ff",
                  background: "transparent",
                  boxShadow: "0 8px 32px rgba(41, 112, 255, 0.2)",
                }}
              >
                {/* Center circle with warehouse logos */}
                <div className="relative w-44 h-44 flex flex-col items-center justify-center gap-3">
                  {/* First row: Snowflake, Databricks (larger) */}
                  <div className="flex gap-3 items-center">
                    <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-lg border border-slate-200 logo-fade-in">
                      <Image
                        src="/snowflake.svg"
                        alt="Snowflake"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="w-16 h-16 bg-white rounded-lg p-3 shadow-lg border border-slate-200 logo-fade-in"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <Image
                        src="/databricks.svg"
                        alt="Databricks"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Second row: BigQuery, Redshift, Microsoft Fabric (smaller) */}
                  <div className="flex gap-3 items-center">
                    <div
                      className="w-9 h-9 bg-white rounded-lg p-1.5 shadow-lg border border-slate-200 logo-fade-in"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <Image
                        src="/big-query.svg"
                        alt="BigQuery"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="w-9 h-9 bg-white rounded-lg p-1.5 shadow-lg border border-slate-200 logo-fade-in"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <Image
                        src="/aws-redshift.svg"
                        alt="Redshift"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className="w-9 h-9 bg-white rounded-lg p-1.5 shadow-lg border border-slate-200 logo-fade-in"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <Image
                        src="/microsoft-fabric.svg"
                        alt="Microsoft Fabric"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbits with planets */}
          {orbits.map((orbit, orbitIndex) => {
            const radius = 140 + orbitIndex * 120;
            const animationDuration = 40 + orbitIndex * 10;

            return (
              <div key={orbit.category}>
                {/* Orbit ring */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed opacity-15"
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                    borderColor: "#2970ff",
                  }}
                />

                {/* Category label */}
                <div
                  className="absolute top-1/2 left-1/2 font-semibold text-xs whitespace-nowrap text-slate-700"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${radius + 10}px)`,
                  }}
                >
                  {orbit.category}
                </div>

                {/* Planets (Companies) */}
                {orbit.companies.map((company, companyIndex) => {
                  const angle = (360 / orbit.companies.length) * companyIndex;
                  const angleOffset = orbitIndex * 30;

                  return (
                    <div
                      key={company.name}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        animation: `orbit ${animationDuration}s linear infinite`,
                        transformOrigin: "0 0",
                      }}
                    >
                      <div
                        className="absolute"
                        style={{
                          transform: `rotate(${angle + angleOffset}deg) translate(${radius}px) rotate(-${angle + angleOffset}deg)`,
                        }}
                      >
                        {/* Planet */}
                        <div
                          className="relative flex items-center justify-center"
                          style={{
                            width: company.logo ? "140px" : "56px",
                            height: company.logo ? "140px" : "56px",
                          }}
                        >
                          {company.logo ? (
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={140}
                              height={140}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div
                              className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center font-semibold text-[9px] text-center leading-tight border-2 bg-white p-2"
                              style={{
                                borderColor: "#2970ff",
                                color: "#2970ff",
                                boxShadow: "0 4px 12px rgba(41, 112, 255, 0.2)",
                              }}
                            >
                              {company.name}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-16 right-20 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image
              src="/icon-transparent.png"
              alt="Dataporto"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-xl font-semibold text-slate-600">
            dataporto.com
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
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
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
