"use client";

import { useState, useEffect } from "react";
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
  const [highlightIndex, setHighlightIndex] = useState(-1);

  useEffect(() => {
    // Initial delay before starting the loop
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        let i = 0;
        const wave = setInterval(() => {
          setHighlightIndex(i);
          i++;
          if (i > 5) {
            clearInterval(wave);
            setHighlightIndex(-1);
          }
        }, 600);
      }, 10000);

      // Run once immediately
      let i = 0;
      const wave = setInterval(() => {
        setHighlightIndex(i);
        i++;
        if (i > 5) {
          clearInterval(wave);
          setHighlightIndex(-1);
        }
      }, 600);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(startTimeout);
  }, []);

  const getIconClass = (index: number) => {
    const isHighlighted = highlightIndex === index;
    const baseClass =
      "h-5 w-5 transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110";
    const highlightClass = isHighlighted
      ? "grayscale-0 opacity-100 scale-105"
      : "grayscale opacity-60";
    return `${baseClass} ${highlightClass}`;
  };

  const getTextClass = (index: number) => {
    const isHighlighted = highlightIndex === index;
    const baseClass =
      "ml-2 text-sm text-gray-600 font-medium transition-opacity duration-1000 ease-in-out group-hover:opacity-100";
    const highlightClass = isHighlighted ? "opacity-100" : "opacity-60";
    return `${baseClass} ${highlightClass}`;
  };

  return (
    <>
      <div className="w-full border-t border-b border-gray-200 py-4 mb-8 sm:mb-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <span className="text-sm text-gray-600 font-medium opacity-60">
              Built on
            </span>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <SnowflakeIcon className={getIconClass(0)} />
                <span className={getTextClass(0)}>Snowflake</span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <DatabricksIcon className={getIconClass(1)} />
                <span className={getTextClass(1)}>Databricks</span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <BigQueryIcon className={getIconClass(2)} />
                <span className={getTextClass(2)}>BigQuery</span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <RedshiftIcon className={getIconClass(3)} />
                <span className={getTextClass(3)}>Redshift</span>
              </div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <FabricIcon className={getIconClass(4)} />
                <span className={getTextClass(4)}>Fabric</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaitlistModal open={open} onOpenChange={setOpen} source="trust_bar" />
    </>
  );
}
