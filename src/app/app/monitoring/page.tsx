"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  IconActivity,
  IconCircleCheck,
  IconAlertTriangle,
  IconClock,
  IconTrendingUp,
  IconDatabase,
  IconShare,
  IconRefresh,
  IconBell,
  IconAlertCircle,
  IconX,
  IconArrowUp,
  IconArrowDown,
  IconMinus,
  IconPlayerPlay,
  IconPlayerPause,
  IconFileText,
} from "@tabler/icons-react";
import {
  SnowflakeIcon,
  DatabricksIcon,
  SftpIcon,
} from "@/components/brand-icons";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getTenantConfig } from "@/config/tenants";
import Image from "next/image";

// Mock data for system metrics
const systemMetrics = {
  uptime: "99.98%",
  activeConnections: 847,
  dataTransferred: "12.4 TB",
  syncSuccessRate: "98.2%",
};

// Mock data for sync jobs
const syncJobs = [
  {
    id: 1,
    name: "Customer Analytics Dataset",
    source: "PostgreSQL",
    destination: "Snowflake",
    status: "success",
    duration: "2m 34s",
    rowsProcessed: "2.4M",
    startTime: "2024-02-28 10:30:00",
    endTime: "2024-02-28 10:32:34",
    nextRun: "in 15 minutes",
  },
  {
    id: 2,
    name: "Product Performance Metrics",
    source: "MySQL",
    destination: "Databricks",
    status: "running",
    duration: "1m 12s",
    rowsProcessed: "850K",
    startTime: "2024-02-28 10:34:00",
    endTime: null,
    nextRun: null,
  },
  {
    id: 3,
    name: "Financial Reports Q1",
    source: "PostgreSQL",
    destination: "sFTP",
    status: "failed",
    duration: "45s",
    rowsProcessed: "120K",
    startTime: "2024-02-28 10:20:00",
    endTime: "2024-02-28 10:20:45",
    nextRun: "retrying in 5 minutes",
    error: "Connection timeout to sFTP server",
  },
  {
    id: 4,
    name: "Marketing Campaign Data",
    source: "BigQuery",
    destination: "Snowflake",
    status: "success",
    duration: "4m 18s",
    rowsProcessed: "3.1M",
    startTime: "2024-02-28 10:25:00",
    endTime: "2024-02-28 10:29:18",
    nextRun: "in 30 minutes",
  },
  {
    id: 5,
    name: "User Engagement Analytics",
    source: "MongoDB",
    destination: "Databricks",
    status: "queued",
    duration: null,
    rowsProcessed: null,
    startTime: null,
    endTime: null,
    nextRun: "scheduled in 8 minutes",
  },
  {
    id: 6,
    name: "Inventory Data Export",
    source: "PostgreSQL",
    destination: "sFTP",
    status: "success",
    duration: "1m 56s",
    rowsProcessed: "800K",
    startTime: "2024-02-28 10:15:00",
    endTime: "2024-02-28 10:16:56",
    nextRun: "in 45 minutes",
  },
];

// Mock data for alerts
const alerts = [
  {
    id: 1,
    type: "error",
    message: "sFTP connection failed for Financial Reports Q1",
    timestamp: "2 minutes ago",
    severity: "high",
    source: "Sync Engine",
  },
  {
    id: 2,
    type: "warning",
    message: "High memory usage detected on data processing node",
    timestamp: "15 minutes ago",
    severity: "medium",
    source: "System Monitor",
  },
  {
    id: 3,
    type: "info",
    message: "Schema change detected in customers table",
    timestamp: "1 hour ago",
    severity: "low",
    source: "Schema Monitor",
  },
  {
    id: 4,
    type: "warning",
    message: "Sync duration exceeded threshold for Marketing Campaign Data",
    timestamp: "2 hours ago",
    severity: "medium",
    source: "Performance Monitor",
  },
];

// Mock data for system health
const systemHealth = [
  {
    component: "API Gateway",
    status: "operational",
    uptime: "99.99%",
    responseTime: "45ms",
    lastCheck: "30s ago",
  },
  {
    component: "Data Sync Engine",
    status: "operational",
    uptime: "99.95%",
    responseTime: "120ms",
    lastCheck: "30s ago",
  },
  {
    component: "Database Connections",
    status: "operational",
    uptime: "99.98%",
    responseTime: "12ms",
    lastCheck: "30s ago",
  },
  {
    component: "sFTP Services",
    status: "degraded",
    uptime: "98.50%",
    responseTime: "450ms",
    lastCheck: "30s ago",
  },
  {
    component: "Storage Systems",
    status: "operational",
    uptime: "100%",
    responseTime: "8ms",
    lastCheck: "30s ago",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "success":
      return "bg-green-50 text-green-700 border-green-200";
    case "running":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "failed":
      return "bg-red-50 text-red-700 border-red-200";
    case "queued":
      return "bg-gray-50 text-gray-700 border-gray-200";
    case "operational":
      return "bg-green-50 text-green-700 border-green-200";
    case "degraded":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "error":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "success":
    case "operational":
      return <IconCircleCheck className="h-4 w-4 text-green-600" />;
    case "running":
      return <IconPlayerPlay className="h-4 w-4 text-blue-600" />;
    case "failed":
    case "error":
      return <IconX className="h-4 w-4 text-red-600" />;
    case "queued":
      return <IconClock className="h-4 w-4 text-gray-600" />;
    case "degraded":
      return <IconAlertTriangle className="h-4 w-4 text-yellow-600" />;
    default:
      return <IconMinus className="h-4 w-4 text-gray-600" />;
  }
}

function getAlertIcon(type: string) {
  switch (type) {
    case "error":
      return <IconAlertCircle className="h-5 w-5 text-red-600" />;
    case "warning":
      return <IconAlertTriangle className="h-5 w-5 text-yellow-600" />;
    case "info":
      return <IconActivity className="h-5 w-5 text-blue-600" />;
    default:
      return <IconBell className="h-5 w-5 text-gray-600" />;
  }
}

function getSeverityColor(severity: string) {
  switch (severity) {
    case "high":
      return "bg-red-50 text-red-700 border-red-200";
    case "medium":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "low":
      return "bg-blue-50 text-blue-700 border-blue-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getDestinationIcon(destination: string) {
  switch (destination.toLowerCase()) {
    case "snowflake":
      return <SnowflakeIcon className="h-5 w-5" />;
    case "databricks":
      return <DatabricksIcon className="h-5 w-5" />;
    case "sftp":
      return <SftpIcon className="h-5 w-5" />;
    default:
      return <IconDatabase className="h-5 w-5 text-slate-600" />;
  }
}

export default function MonitoringPage() {
  const tenantConfig = getTenantConfig();
  const successfulJobs = syncJobs.filter(
    job => job.status === "success"
  ).length;
  const runningJobs = syncJobs.filter(job => job.status === "running").length;
  const failedJobs = syncJobs.filter(job => job.status === "failed").length;
  const activeAlerts = alerts.filter(
    alert => alert.type === "error" || alert.type === "warning"
  ).length;

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="md:hidden" />
            {tenantConfig.id !== "default" && (
              <div className="flex items-center justify-center w-20 h-10 mr-2">
                <Image
                  src={tenantConfig.logo}
                  alt={tenantConfig.name}
                  width={80}
                  height={40}
                  className="h-auto max-h-10 w-auto"
                />
              </div>
            )}
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Monitoring
                {tenantConfig.id !== "default" && (
                  <span className="text-slate-400 ml-2">
                    • {tenantConfig.name}
                  </span>
                )}
              </h1>
              <p className="text-slate-600">
                Real-time system health and sync job monitoring
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className={
                activeAlerts > 0
                  ? "text-red-700 bg-red-50"
                  : "text-green-700 bg-green-50"
              }
            >
              {activeAlerts > 0 ? (
                <>
                  <IconAlertTriangle className="h-4 w-4 mr-1" />
                  {activeAlerts} Active Alert{activeAlerts > 1 ? "s" : ""}
                </>
              ) : (
                <>
                  <IconCircleCheck className="h-4 w-4 mr-1" />
                  All Systems Operational
                </>
              )}
            </Badge>
            <Button variant="outline" size="sm">
              <IconRefresh className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                System Uptime
              </CardTitle>
              <IconTrendingUp className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemMetrics.uptime}</div>
              <p className="text-xs text-slate-600">last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Connections
              </CardTitle>
              <IconActivity className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {systemMetrics.activeConnections}
              </div>
              <p className="text-xs text-slate-600">
                <IconArrowUp className="h-3 w-3 inline text-green-600" /> 12%
                from last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Data Transferred
              </CardTitle>
              <IconShare className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {systemMetrics.dataTransferred}
              </div>
              <p className="text-xs text-slate-600">last 24 hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
              <IconCircleCheck className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {systemMetrics.syncSuccessRate}
              </div>
              <p className="text-xs text-slate-600">
                {successfulJobs}/{syncJobs.length} jobs succeeded
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Alerts Section */}
        {alerts.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconBell className="h-5 w-5 mr-2" />
                Recent Alerts
              </CardTitle>
              <CardDescription>
                System notifications and warnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map(alert => (
                  <div
                    key={alert.id}
                    className="flex items-start justify-between p-3 rounded-lg border border-slate-200"
                  >
                    <div className="flex items-start space-x-3">
                      {getAlertIcon(alert.type)}
                      <div>
                        <p className="font-medium">{alert.message}</p>
                        <p className="text-sm text-slate-600">
                          {alert.source} • {alert.timestamp}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={getSeverityColor(alert.severity)}
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sync Jobs Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sync Jobs</CardTitle>
            <CardDescription>
              Monitor data synchronization jobs across all platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Name</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Rows Processed</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>Next Run</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {syncJobs.map(job => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <div className="font-medium">{job.name}</div>
                      {job.error && (
                        <div className="text-sm text-red-600 mt-1">
                          {job.error}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <IconDatabase className="h-4 w-4 text-slate-600" />
                        <span>{job.source}</span>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getDestinationIcon(job.destination)}
                        <span>{job.destination}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(job.status)}
                        <Badge
                          variant="outline"
                          className={getStatusColor(job.status)}
                        >
                          {job.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {job.duration || "-"}
                    </TableCell>
                    <TableCell className="font-medium">
                      {job.rowsProcessed || "-"}
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {job.startTime || "-"}
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {job.nextRun || "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {job.status === "running" ? (
                          <Button variant="outline" size="sm">
                            <IconPlayerPause className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            <IconPlayerPlay className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <IconFileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>
              Real-time status of all system components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Uptime</TableHead>
                  <TableHead>Response Time</TableHead>
                  <TableHead>Last Check</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemHealth.map((component, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {component.component}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(component.status)}
                        <Badge
                          variant="outline"
                          className={getStatusColor(component.status)}
                        >
                          {component.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{component.uptime}</TableCell>
                    <TableCell>
                      <span
                        className={
                          parseInt(component.responseTime) > 200
                            ? "text-yellow-600 font-medium"
                            : "text-slate-600"
                        }
                      >
                        {component.responseTime}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {component.lastCheck}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
