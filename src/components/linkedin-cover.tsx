"use client";

import { IconDatabase, IconShare3, IconShieldCheck, IconFolder } from "@tabler/icons-react";
import Image from "next/image";

export function LinkedInCover() {
  return (
    <div className="relative w-[1584px] h-[275px] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}/>
      </div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-end px-20">
        <div className="flex flex-col items-end space-y-4">
          {/* Logo/Brand name - right aligned */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg shadow-md overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#2970ff' }}>
              <img src="/icon.png" alt="dataporto" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-slate-900">
              dataporto
            </h1>
          </div>

          {/* Tagline - right aligned */}
          <div className="text-right">
            <p className="text-4xl font-bold text-slate-800 leading-tight capitalize">
              exceed enterprise expectations
            </p>
          </div>

          {/* Platform icons */}
          <div className="flex items-center gap-5 pt-2">
            <div className="bg-white rounded-xl shadow-lg p-3 border border-slate-200">
              <Image src="/snowflake.svg" alt="Snowflake" width={44} height={44} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-3 border border-slate-200">
              <Image src="/databricks.svg" alt="Databricks" width={44} height={44} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-3 border border-slate-200">
              <Image src="/big-query.svg" alt="BigQuery" width={44} height={44} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-3 border border-slate-200">
              <Image src="/redshift.png" alt="Redshift" width={44} height={44} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-3 border border-slate-200">
              <Image src="/microsoft-fabric.png" alt="Microsoft Fabric" width={44} height={44} />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, transparent, #2970ff, transparent)` }} />
    </div>
  );
}

