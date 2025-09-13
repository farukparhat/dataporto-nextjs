"use client";

import { useState } from "react";
import DataDockEmbedWidget from "@/components/data-dock-embed-widget";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IconChevronDown } from "@tabler/icons-react";

type BrandType =
  | "senti"
  | "starbucks"
  | "nike"
  | "mcdonalds"
  | "dhl"
  | "expedia"
  | "mariott"
  | "tmobile"
  | "firefliesai"
  | "maintainx"
  | "momos"
  | "tattle"
  | "olo"
  | "rbi"
  | "cxconnect"
  | "delta";

const brands = {
  senti: {
    name: "Senti",
    logo: "/brands/senti.png",
  },
  starbucks: {
    name: "Starbucks",
    logo: "/brands/starbucks.svg",
  },
  nike: {
    name: "Nike",
    logo: "/brands/nike.svg",
  },
  mcdonalds: {
    name: "McDonald's",
    logo: "/brands/mcdonalds.svg",
  },
  dhl: {
    name: "DHL",
    logo: "/brands/dhl.svg",
  },
  expedia: {
    name: "Expedia",
    logo: "/brands/expedia.svg",
  },
  mariott: {
    name: "Marriott",
    logo: "/brands/mariott.svg",
  },
  tmobile: {
    name: "T-Mobile",
    logo: "/brands/tmobile.svg",
  },
  firefliesai: {
    name: "FireFlies AI",
    logo: "/brands/firefliesai.svg",
  },
  maintainx: {
    name: "MaintainX",
    logo: "/brands/maintainx.png",
  },
  momos: {
    name: "Momos",
    logo: "/brands/momos.svg",
  },
  tattle: {
    name: "Tattle",
    logo: "/brands/tattle.png",
  },
  olo: {
    name: "Olo",
    logo: "/brands/olo.svg",
  },
  rbi: {
    name: "RBI",
    logo: "/brands/rbi.png",
  },
  cxconnect: {
    name: "CX Connect",
    logo: "/brands/cxconnect.png",
  },
  delta: {
    name: "Delta",
    logo: "/brands/delta.svg",
  },
};

export default function DemosPage() {
  const [selectedBrand, setSelectedBrand] = useState<BrandType>("senti");
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Data Dock Widget Demo
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience how the Data Dock embed widget looks and functions when
            integrated into your application.
          </p>
        </div>

        {/* Floating Dropdown */}
        <div className="fixed top-4 right-4 z-50">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="min-w-48 shadow-lg bg-white/95 backdrop-blur-sm border-gray-200"
              >
                {brands[selectedBrand].name} Branding
                <IconChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="shadow-xl bg-white/95 backdrop-blur-sm max-h-96 overflow-y-auto"
            >
              {Object.entries(brands).map(([key, brand]) => (
                <DropdownMenuItem
                  key={key}
                  onClick={() => setSelectedBrand(key as BrandType)}
                  className={selectedBrand === key ? "bg-accent" : ""}
                >
                  {brand.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 text-center">
            Data Dock Widget
          </h2>
          <DataDockEmbedWidget
            brandLogo={brands[selectedBrand].logo}
            brandName={brands[selectedBrand].name}
          />
        </div>
      </div>
    </div>
  );
}
