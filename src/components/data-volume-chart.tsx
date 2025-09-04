"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataVolumeChartProps {
  data: Array<{
    date: string;
    databricks: number;
    snowflake: number;
    sftp: number;
  }>;
  className?: string;
}

export function DataVolumeChart({ data, className }: DataVolumeChartProps) {
  // Debug: Log the data to console
  console.log("Chart data:", data);

  return (
    <div className={className || "h-64 w-full"}>
      {/* Legend */}
      <div className="flex justify-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span className="text-xs text-slate-600">Snowflake</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
          <span className="text-xs text-slate-600">Databricks</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
          <span className="text-xs text-slate-600">sFTP</span>
        </div>
      </div>
      <div style={{ width: "100%", height: "220px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="date"
              tickFormatter={value => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis
              tickFormatter={value => `${value.toLocaleString()}`}
              stroke="#64748b"
              fontSize={12}
            />
            <Tooltip
              formatter={(value: number, name: string) => {
                const shareType =
                  name === "databricks"
                    ? "Databricks"
                    : name === "snowflake"
                      ? "Snowflake"
                      : "sFTP";
                return [`${value.toLocaleString()} rows`, shareType];
              }}
              labelFormatter={label => {
                return new Date(label).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
              }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="snowflake"
              stackId="1"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.8}
              strokeWidth={1}
            />
            <Area
              type="monotone"
              dataKey="databricks"
              stackId="1"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.8}
              strokeWidth={1}
            />
            <Area
              type="monotone"
              dataKey="sftp"
              stackId="1"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.8}
              strokeWidth={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
