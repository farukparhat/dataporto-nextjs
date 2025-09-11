"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconSettings, IconCheck } from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import DataDockEmbedWidget from "@/components/data-dock-embed-widget";

export default function DataDockPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="md:hidden" />
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                  Data Dock
                </h1>
                <p className="text-slate-600">
                  Self-serve data sharing portal for your enterprise clients
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="text-green-700 bg-green-50">
              <IconCheck className="h-4 w-4 mr-1" />
              Active
            </Badge>
            <Button variant="outline" size="sm">
              <IconSettings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Embedded Data Dock Widget */}
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 bg-slate-50/50">
            <div className="text-center mb-4">
              <p className="text-sm text-slate-500 mb-2">
                Embedded Data Dock Widget Preview
              </p>
              <div className="w-full h-px bg-slate-300"></div>
            </div>

            <DataDockEmbedWidget />
          </div>
        </div>
      </main>
    </>
  );
}
