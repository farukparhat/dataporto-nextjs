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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconDatabase,
  IconTable,
  IconSchema,
  IconVersions,
  IconPlus,
  IconDots,
  IconEye,
  IconEdit,
  IconHistory,
  IconFileText,
  IconCircleCheck,
  IconAlertTriangle,
  IconClock,
  IconShare,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getTenantConfig } from "@/config/tenants";
import Image from "next/image";

// Mock data for the catalog tables
const catalogTables = [
  {
    id: 1,
    name: "customers",
    schema: "public",
    type: "Table",
    rows: "2.4M",
    columns: 18,
    lastUpdated: "2 minutes ago",
    shares: 3,
    status: "active",
    governance: "pii-masked",
    version: "v2.1",
    schemaChanges: 2,
    description: "Primary customer information and profiles",
    created: "2023-05-15",
  },
  {
    id: 2,
    name: "orders",
    schema: "public",
    type: "Table",
    rows: "8.7M",
    columns: 12,
    lastUpdated: "2 minutes ago",
    shares: 5,
    status: "active",
    governance: "unrestricted",
    version: "v1.8",
    schemaChanges: 0,
    description: "Customer order transactions and details",
    created: "2023-04-20",
  },
  {
    id: 3,
    name: "product_analytics",
    schema: "analytics",
    type: "View",
    rows: "145M",
    columns: 24,
    lastUpdated: "1 hour ago",
    shares: 2,
    status: "stale",
    governance: "restricted",
    version: "v3.2",
    schemaChanges: 5,
    description: "Product usage metrics and behavioral analytics",
    created: "2023-06-10",
  },
  {
    id: 4,
    name: "campaign_metrics",
    schema: "marketing",
    type: "Table",
    rows: "52M",
    columns: 31,
    lastUpdated: "15 minutes ago",
    shares: 4,
    status: "active",
    governance: "unrestricted",
    version: "v1.4",
    schemaChanges: 1,
    description: "Marketing campaign performance and attribution data",
    created: "2023-03-22",
  },
  {
    id: 5,
    name: "sales_summary",
    schema: "warehouse",
    type: "View",
    rows: "1.2M",
    columns: 8,
    lastUpdated: "5 minutes ago",
    shares: 8,
    status: "active",
    governance: "client-filtered",
    version: "v2.0",
    schemaChanges: 3,
    description: "Aggregated sales data for reporting and analytics",
    created: "2023-07-01",
  },
  {
    id: 6,
    name: "user_sessions",
    schema: "analytics",
    type: "Table",
    rows: "98M",
    columns: 15,
    lastUpdated: "30 minutes ago",
    shares: 1,
    status: "active",
    governance: "pii-masked",
    version: "v1.6",
    schemaChanges: 0,
    description: "User session tracking and engagement metrics",
    created: "2023-08-15",
  },
  {
    id: 7,
    name: "inventory_levels",
    schema: "warehouse",
    type: "Table",
    rows: "2.8M",
    columns: 9,
    lastUpdated: "10 minutes ago",
    shares: 2,
    status: "active",
    governance: "unrestricted",
    version: "v1.2",
    schemaChanges: 1,
    description: "Real-time inventory tracking and stock levels",
    created: "2023-09-05",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "active":
      return "bg-green-50 text-green-700 border-green-200";
    case "stale":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "inactive":
      return "bg-gray-50 text-gray-700 border-gray-200";
    case "error":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getGovernanceColor(governance: string) {
  switch (governance) {
    case "unrestricted":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "pii-masked":
      return "bg-red-50 text-red-700 border-red-200";
    case "restricted":
      return "bg-orange-50 text-orange-700 border-orange-200";
    case "client-filtered":
      return "bg-purple-50 text-purple-700 border-purple-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case "Table":
      return <IconTable className="h-4 w-4 text-slate-600" />;
    case "View":
      return <IconEye className="h-4 w-4 text-slate-600" />;
    default:
      return <IconDatabase className="h-4 w-4 text-slate-600" />;
  }
}

export default function DataCatalogPage() {
  const tenantConfig = getTenantConfig();
  const totalTables = catalogTables.length;
  const activeTables = catalogTables.filter(
    table => table.status === "active"
  ).length;
  const totalShares = catalogTables.reduce(
    (sum, table) => sum + table.shares,
    0
  );
  const schemaVersions = new Set(catalogTables.map(table => table.version))
    .size;
  const schemasWithChanges = catalogTables.filter(
    table => table.schemaChanges > 0
  ).length;

  const totalRows = catalogTables.reduce((sum, table) => {
    const value = parseFloat(table.rows.replace(/[KM]/g, ""));
    const multiplier = table.rows.includes("M")
      ? 1000000
      : table.rows.includes("K")
        ? 1000
        : 1;
    return sum + value * multiplier;
  }, 0);

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
                Data Catalog
                {tenantConfig.id !== "default" && (
                  <span className="text-slate-400 ml-2">
                    • {tenantConfig.name}
                  </span>
                )}
              </h1>
              <p className="text-slate-600">
                Know what you have and control it
              </p>
            </div>
          </div>
          <Button>
            <IconPlus className="h-4 w-4 mr-2" />
            Add Table
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tables & Views
              </CardTitle>
              <IconTable className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTables}</div>
              <p className="text-xs text-slate-600">
                {activeTables} active tables
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Schema Versions
              </CardTitle>
              <IconVersions className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{schemaVersions}</div>
              <p className="text-xs text-slate-600">tracked versions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rows</CardTitle>
              <IconDatabase className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(totalRows / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-slate-600">rows cataloged</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Shares
              </CardTitle>
              <IconShare className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalShares}</div>
              <p className="text-xs text-slate-600">
                {schemasWithChanges > 0
                  ? `${schemasWithChanges} have changes`
                  : "all up to date"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tables Catalog */}
        <Card>
          <CardHeader>
            <CardTitle>All Tables & Views</CardTitle>
            <CardDescription>
              Catalog of all tables and views with metadata and versioning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Table/View</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Schema</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Rows</TableHead>
                  <TableHead>Columns</TableHead>
                  <TableHead>Governance</TableHead>
                  <TableHead>Shares</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {catalogTables.map(table => (
                  <TableRow key={table.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{table.name}</div>
                        <div className="text-sm text-slate-500">
                          {table.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(table.type)}
                        <span className="font-medium">{table.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge variant="outline">{table.schema}</Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{table.version}</Badge>
                        {table.schemaChanges > 0 && (
                          <Badge variant="outline" className="text-xs">
                            {table.schemaChanges} changes
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{table.rows}</TableCell>
                    <TableCell>{table.columns}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getGovernanceColor(table.governance)}
                      >
                        {table.governance}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{table.shares}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {table.lastUpdated}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {table.status === "active" ? (
                          <IconCircleCheck className="h-4 w-4 text-green-600" />
                        ) : table.status === "stale" ? (
                          <IconClock className="h-4 w-4 text-yellow-600" />
                        ) : (
                          <IconAlertTriangle className="h-4 w-4 text-red-600" />
                        )}
                        <Badge
                          variant="outline"
                          className={getStatusColor(table.status)}
                        >
                          {table.status}
                        </Badge>
                      </div>
                    </TableCell>
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
                            View Schema
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconEdit className="h-4 w-4 mr-2" />
                            Edit Metadata
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconHistory className="h-4 w-4 mr-2" />
                            Version History
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconShare className="h-4 w-4 mr-2" />
                            View Shares
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconFileText className="h-4 w-4 mr-2" />
                            Data Contract
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
