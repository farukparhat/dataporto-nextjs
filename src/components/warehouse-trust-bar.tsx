"use client";

import { useState } from "react";
import WaitlistModal from "@/components/waitlist-modal";
import {
  SnowflakeIcon,
  DatabricksIcon,
  BigQueryIcon,
  RedshiftIcon,
  FabricIcon,
} from "@/components/brand-icons";

export default function WarehouseTrustBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full border-t border-b border-gray-200 py-4 mb-8 sm:mb-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <span className="text-sm text-gray-600 font-medium opacity-60">
              Works with
            </span>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <SnowflakeIcon className="h-5 w-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="ml-2 text-sm text-gray-600 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  Snowflake
                </span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <DatabricksIcon className="h-5 w-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="ml-2 text-sm text-gray-600 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  Databricks
                </span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <BigQueryIcon className="h-5 w-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="ml-2 text-sm text-gray-600 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  BigQuery
                </span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <RedshiftIcon className="h-5 w-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="ml-2 text-sm text-gray-600 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  Redshift
                </span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <FabricIcon className="h-5 w-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="ml-2 text-sm text-gray-600 font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  Fabric
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaitlistModal open={open} onOpenChange={setOpen} source="trust_bar" />
    </>
  );
}
