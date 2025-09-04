import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconUsers,
  IconShare,
  IconDatabase,
  IconActivity,
  IconTrendingUp,
  IconCircleCheck,
  IconAlertTriangle,
  IconList,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DataVolumeChart } from "@/components/data-volume-chart";

// Sample data for the chart - rows shared by platform
const chartData = [
  { date: "2024-01-01", snowflake: 12000, databricks: 8500, sftp: 3200 },
  { date: "2024-01-02", snowflake: 15000, databricks: 9200, sftp: 3800 },
  { date: "2024-01-03", snowflake: 18000, databricks: 10100, sftp: 4200 },
  { date: "2024-01-04", snowflake: 14000, databricks: 8800, sftp: 3600 },
  { date: "2024-01-05", snowflake: 21000, databricks: 12000, sftp: 4800 },
  { date: "2024-01-06", snowflake: 19000, databricks: 11200, sftp: 4400 },
  { date: "2024-01-07", snowflake: 24000, databricks: 13500, sftp: 5200 },
  { date: "2024-01-08", snowflake: 22000, databricks: 12800, sftp: 4900 },
  { date: "2024-01-09", snowflake: 28000, databricks: 15200, sftp: 5600 },
  { date: "2024-01-10", snowflake: 25000, databricks: 14100, sftp: 5300 },
  { date: "2024-01-11", snowflake: 31000, databricks: 16800, sftp: 6100 },
  { date: "2024-01-12", snowflake: 29000, databricks: 15900, sftp: 5800 },
  { date: "2024-01-13", snowflake: 34000, databricks: 18200, sftp: 6500 },
  { date: "2024-01-14", snowflake: 32000, databricks: 17300, sftp: 6200 },
  { date: "2024-01-15", snowflake: 37000, databricks: 19800, sftp: 7100 },
  { date: "2024-01-16", snowflake: 35000, databricks: 18900, sftp: 6800 },
  { date: "2024-01-17", snowflake: 41000, databricks: 21500, sftp: 7600 },
  { date: "2024-01-18", snowflake: 38000, databricks: 20400, sftp: 7300 },
  { date: "2024-01-19", snowflake: 43000, databricks: 22800, sftp: 8100 },
  { date: "2024-01-20", snowflake: 40000, databricks: 21700, sftp: 7800 },
  { date: "2024-01-21", snowflake: 46000, databricks: 24200, sftp: 8600 },
  { date: "2024-01-22", snowflake: 44000, databricks: 23400, sftp: 8300 },
  { date: "2024-01-23", snowflake: 49000, databricks: 25800, sftp: 9100 },
  { date: "2024-01-24", snowflake: 47000, databricks: 25000, sftp: 8800 },
  { date: "2024-01-25", snowflake: 52000, databricks: 27500, sftp: 9600 },
  { date: "2024-01-26", snowflake: 48000, databricks: 26200, sftp: 9200 },
  { date: "2024-01-27", snowflake: 55000, databricks: 29100, sftp: 10300 },
  { date: "2024-01-28", snowflake: 51000, databricks: 27800, sftp: 9900 },
  { date: "2024-01-29", snowflake: 58000, databricks: 31200, sftp: 11100 },
  { date: "2024-01-30", snowflake: 54000, databricks: 29800, sftp: 10600 },
];

// Simple chart data for visualization

export default function AppRoot() {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="md:hidden" />
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Dashboard
              </h1>
              <p className="text-slate-600">
                Welcome back! Here&apos;s your data sharing overview.
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="text-green-700 bg-green-50">
            <IconCircleCheck className="h-4 w-4 mr-1" />
            All Systems Operational
          </Badge>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Shares
              </CardTitle>
              <IconShare className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-slate-600">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients</CardTitle>
              <IconUsers className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-slate-600">+1 new this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Data Sources
              </CardTitle>
              <IconDatabase className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-slate-600">All synced</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rows</CardTitle>
              <IconList className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-slate-600">across all shares</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
              <IconActivity className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2m</div>
              <p className="text-xs text-slate-600">ago</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data Volume Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconTrendingUp className="h-5 w-5 mr-2" />
                Rows Shared by Platform (Last 30 Days)
              </CardTitle>
              <CardDescription>
                Total rows shared across Snowflake, Databricks, and sFTP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataVolumeChart data={chartData} />
            </CardContent>
          </Card>

          {/* Top Consuming Clients */}
          <Card>
            <CardHeader>
              <CardTitle>Top Consuming Clients</CardTitle>
              <CardDescription>
                Clients by data volume this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Acme Corp</p>
                    <p className="text-sm text-slate-600">Snowflake Share</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">2.4 GB</p>
                    <p className="text-sm text-slate-600">+12%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">TechFlow Inc</p>
                    <p className="text-sm text-slate-600">Databricks Share</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">1.8 GB</p>
                    <p className="text-sm text-slate-600">+8%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">DataCo Ltd</p>
                    <p className="text-sm text-slate-600">sFTP Delivery</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">1.2 GB</p>
                    <p className="text-sm text-slate-600">-2%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest events and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <IconCircleCheck className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Data sync completed</p>
                  <p className="text-sm text-slate-600">
                    PostgreSQL source synced successfully • 2 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconUsers className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">New client onboarded</p>
                  <p className="text-sm text-slate-600">
                    TechFlow Inc added to Databricks sharing • 1 hour ago
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <IconAlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium">Schema change detected</p>
                  <p className="text-sm text-slate-600">
                    New column added to users table • 4 hours ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
