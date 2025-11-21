"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IconFolder,
  IconDatabase,
  IconCheck,
  IconDownload,
  IconLock,
} from "@tabler/icons-react";
import { Dataset } from "@/config/tenants";

interface DataDockReceiveDataProps {
  datasets: Dataset[];
  selectedDatasets: string[];
  expandedDatasets: string[];
  toggleDatasetSelection: (datasetId: string) => void;
  toggleDatasetExpansion: (datasetId: string) => void;
}

export default function DataDockReceiveData({
  datasets,
  selectedDatasets,
  expandedDatasets,
  toggleDatasetSelection,
  toggleDatasetExpansion,
}: DataDockReceiveDataProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-slate-900 mb-3">
        Choose Data to Receive
      </h3>

      {/* Hierarchical Schema/Table View */}
      <div className="space-y-1">
        {datasets.map(dataset => {
          const isLocked = dataset.locked === true;
          const isExpanded = expandedDatasets.includes(dataset.id);
          const isSelected = selectedDatasets.includes(dataset.id);

          return (
            <div key={dataset.id} className="space-y-1">
              {/* Schema Level */}
              <div
                className={`p-2 border rounded transition-all ${
                  isLocked
                    ? "border-slate-200 bg-slate-50 opacity-60"
                    : isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex flex-col flex-1 cursor-pointer"
                    onClick={() =>
                      isLocked
                        ? toggleDatasetExpansion(dataset.id)
                        : toggleDatasetSelection(dataset.id)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <IconFolder
                        className={`h-3 w-3 ${isLocked ? "text-slate-400" : "text-slate-500"}`}
                      />
                      <span
                        className={`text-xs font-medium whitespace-nowrap ${isLocked ? "text-slate-500" : ""}`}
                      >
                        {dataset.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {dataset.rows} Rows
                      </span>
                    </div>
                    {dataset.tagline && (
                      <p className="text-xs text-slate-500 mt-1 ml-5">
                        {dataset.tagline}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center">
                    {isLocked ? (
                      <IconLock className="h-3 w-3 text-slate-400" />
                    ) : isSelected ? (
                      <IconCheck className="h-3 w-3 text-blue-600" />
                    ) : (
                      <div className="h-3 w-3 border rounded border-slate-300" />
                    )}
                  </div>
                </div>

                {/* Unlock button for locked datasets */}
                {isLocked && isExpanded && (
                  <div className="mt-2 pt-2 border-t border-slate-200">
                    <Button
                      size="sm"
                      className="w-full h-6 text-xs"
                      style={{ backgroundColor: "#2970ff" }}
                      onClick={e => {
                        e.stopPropagation();
                        console.log(`Request unlock for ${dataset.id}`);
                      }}
                    >
                      <IconLock className="h-3 w-3 mr-1" />
                      Unlock Access
                    </Button>
                  </div>
                )}
              </div>

              {/* Tables Level */}
              {(isSelected || isExpanded) && (
                <div className="ml-4 space-y-1">
                  {dataset.tables.map(table => (
                    <div
                      key={table}
                      className={`flex items-center space-x-2 p-1 rounded ${isLocked ? "opacity-60" : "hover:bg-slate-50"}`}
                    >
                      <IconDatabase className="h-3 w-3 text-slate-400" />
                      <span className="text-xs text-slate-600">{table}</span>
                      {!isLocked && (
                        <IconCheck className="h-3 w-3 text-green-600 ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedDatasets.length > 0 && (
        <div className="mt-3 pt-3 border-t">
          <div className="space-y-2">
            <p className="text-xs font-medium">
              {selectedDatasets.length} schema
              {selectedDatasets.length > 1 ? "s" : ""} selected
            </p>
            <p className="text-xs text-slate-600">
              All tables in selected schemas will be available
            </p>
            <Button
              size="sm"
              style={{ backgroundColor: "#2970ff" }}
              className="w-full h-7 text-xs"
            >
              <IconDownload className="h-3 w-3 mr-1" />
              Subscribe & Connect
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
