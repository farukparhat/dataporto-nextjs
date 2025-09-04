"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  IconShare,
  IconUsers,
  IconActivity,
  IconPlus,
  IconDots,
  IconEye,
  IconEdit,
  IconTrash,
  IconFileText,
  IconTrendingUp,
  IconDownload,
  IconFolderUp,
  IconFolderDown
} from "@tabler/icons-react";
import { SnowflakeIcon, DatabricksIcon, SftpIcon } from "@/components/brand-icons";
import { SidebarTrigger } from "@/components/ui/sidebar";

// Sample data for data shares
const dataShares = [
  {
    id: 1,
    name: "Customer Analytics Dataset",
    type: "snowflake",
    client: "Acme Corp",
    status: "active",
    lastSync: "2 minutes ago",
    rowCount: "2.4M",
    tables: 12,
    created: "2024-01-15",
    access: "read-only",
    description: "Complete customer behavior and transaction analytics"
  },
  {
    id: 2,
    name: "Product Performance Metrics",
    type: "databricks",
    client: "TechFlow Inc",
    status: "active",
    lastSync: "15 minutes ago",
    rowCount: "1.8M",
    tables: 8,
    created: "2024-01-10",
    access: "read-only",
    description: "Product usage metrics and performance indicators"
  },
  {
    id: 3,
    name: "Financial Reports Q1",
    type: "sftp-pull",
    client: "DataCo Ltd",
    status: "pending",
    lastSync: "1 hour ago",
    rowCount: "500K",
    tables: 4,
    created: "2024-01-20",
    access: "pull-delivery",
    description: "Quarterly financial data and reports"
  },
  {
    id: 4,
    name: "Marketing Campaign Data",
    type: "snowflake",
    client: "Growth Labs",
    status: "active",
    lastSync: "5 minutes ago",
    rowCount: "3.1M",
    tables: 15,
    created: "2024-01-08",
    access: "read-only",
    description: "Campaign performance and attribution data"
  },
  {
    id: 5,
    name: "User Engagement Analytics",
    type: "databricks",
    client: "Insight Corp",
    status: "inactive",
    lastSync: "2 days ago",
    rowCount: "1.2M",
    tables: 6,
    created: "2024-01-05",
    access: "read-only",
    description: "User behavior and engagement metrics"
  },
  {
    id: 6,
    name: "Inventory Data Export",
    type: "sftp-push",
    client: "Supply Chain Pro",
    status: "active",
    lastSync: "30 minutes ago",
    rowCount: "800K",
    tables: 3,
    created: "2024-01-18",
    access: "push-delivery",
    description: "Real-time inventory levels and movements"
  }
];

function getShareTypeIcon(type: string) {
  switch (type) {
    case "snowflake":
      return <SnowflakeIcon className="h-6 w-6" />;
    case "databricks":
      return <DatabricksIcon className="h-6 w-6" />;
    case "sftp-pull":
      return <IconFolderDown className="h-6 w-6 text-green-600" />;
    case "sftp-push":
      return <IconFolderUp className="h-6 w-6 text-green-600" />;
    case "sftp":
      return <SftpIcon className="h-6 w-6" />;
    default:
      return <IconShare className="h-6 w-6" />;
  }
}

function getShareTypeName(type: string) {
  switch (type) {
    case "snowflake":
      return "Snowflake";
    case "databricks":
      return "Databricks";
    case "sftp-pull":
    case "sftp-push":
    case "sftp":
      return "sFTP";
    default:
      return "Data Share";
  }
}

function getShareSubType(type: string) {
  switch (type) {
    case "snowflake":
      return "Private Share";
    case "databricks":
      return "Delta Share";
    case "sftp-pull":
      return "Pull";
    case "sftp-push":
      return "Push";
    case "sftp":
      return "Delivery";
    default:
      return "";
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "active":
      return "bg-green-50 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "inactive":
      return "bg-gray-50 text-gray-700 border-gray-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

export default function DataSharesPage() {
  const activeShares = dataShares.filter(share => share.status === "active").length;
  const totalClients = new Set(dataShares.map(share => share.client)).size;
  const totalRows = dataShares.reduce((sum, share) => {
    const value = parseFloat(share.rowCount.replace(/[KM]/g, ""));
    const multiplier = share.rowCount.includes("M") ? 1000000 : share.rowCount.includes("K") ? 1000 : 1;
    return sum + (value * multiplier);
  }, 0);

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="md:hidden" />
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Data Shares</h1>
              <p className="text-slate-600">Manage your outgoing data shares across all platforms</p>
            </div>
          </div>
          <Button>
            <IconPlus className="h-4 w-4 mr-2" />
            New Data Share
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Shares</CardTitle>
              <IconShare className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeShares}</div>
              <p className="text-xs text-slate-600">
                out of {dataShares.length} total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <IconUsers className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalClients}</div>
              <p className="text-xs text-slate-600">
                across all platforms
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rows</CardTitle>
              <IconTrendingUp className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(totalRows / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-slate-600">
                rows shared
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Activity</CardTitle>
              <IconActivity className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2m</div>
              <p className="text-xs text-slate-600">
                ago
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Data Shares Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Data Shares</CardTitle>
            <CardDescription>
              Manage and monitor your data sharing configurations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Share Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tables</TableHead>
                  <TableHead>Rows</TableHead>
                  <TableHead>Last Sync</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataShares.map((share) => (
                  <TableRow key={share.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{share.name}</div>
                        <div className="text-sm text-slate-500">{share.description}</div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getShareTypeIcon(share.type)}
                       <div>
                         <div className="font-medium">{getShareTypeName(share.type)}</div>
                         <div className="text-sm text-slate-500">{getShareSubType(share.type)}</div>
                       </div>
                        </div>
                      </TableCell>
                    <TableCell>
                      <div className="font-medium">{share.client}</div>
                      <div className="text-sm text-slate-500">{share.access}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getStatusColor(share.status)}
                      >
                        {share.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{share.tables}</TableCell>
                    <TableCell>{share.rowCount}</TableCell>
                    <TableCell>{share.lastSync}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <IconDots className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <IconEye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconEdit className="h-4 w-4 mr-2" />
                            Edit Share
                          </DropdownMenuItem>
                          {(share.type === "sftp" || share.type === "sftp-pull" || share.type === "sftp-push") && (
                            <DropdownMenuItem>
                              <IconDownload className="h-4 w-4 mr-2" />
                              {share.type === "sftp-push" ? "View Delivery Status" : "Download Latest"}
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem>
                            <IconFileText className="h-4 w-4 mr-2" />
                            View Logs
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <IconTrash className="h-4 w-4 mr-2" />
                            Delete Share
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
