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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconDatabase,
  IconTable,
  IconPlus,
  IconRefresh,
  IconCircleCheck,
  IconAlertCircle,
  IconClock,
  IconSchema,
  IconCloudDataConnection,
  IconPlugConnected,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getTenantConfig } from "@/config/tenants";
import Image from "next/image";

// Mock data for connected data sources
const dataSources = [
  {
    id: 1,
    name: "Production PostgreSQL",
    type: "PostgreSQL",
    icon: "/postgresql.svg",
    status: "connected",
    host: "prod-db.company.com",
    database: "production",
    lastSync: "2 minutes ago",
    tablesCount: 47,
    schemasCount: 5,
    connection: "Direct Connection",
    tables: [
      {
        name: "customers",
        schema: "public",
        rows: "2.4M",
        columns: 18,
        size: "1.2 GB",
        cataloged: true,
      },
      {
        name: "orders",
        schema: "public",
        rows: "8.7M",
        columns: 12,
        size: "3.4 GB",
        cataloged: true,
      },
      {
        name: "products",
        schema: "public",
        rows: "45K",
        columns: 24,
        size: "156 MB",
        cataloged: false,
      },
      {
        name: "user_sessions",
        schema: "analytics",
        rows: "98M",
        columns: 15,
        size: "8.2 GB",
        cataloged: true,
      },
      {
        name: "payment_methods",
        schema: "finance",
        rows: "1.2M",
        columns: 8,
        size: "456 MB",
        cataloged: false,
      },
    ],
  },
  {
    id: 2,
    name: "Analytics Databricks",
    type: "Databricks",
    icon: "/databricks.svg",
    status: "connected",
    host: "analytics.cloud.databricks.com",
    database: "analytics_prod",
    lastSync: "5 minutes ago",
    tablesCount: 124,
    schemasCount: 8,
    connection: "Cloud Connection",
    tables: [
      {
        name: "product_analytics",
        schema: "analytics",
        rows: "145M",
        columns: 24,
        size: "12.4 GB",
        cataloged: true,
      },
      {
        name: "campaign_metrics",
        schema: "marketing",
        rows: "52M",
        columns: 31,
        size: "5.8 GB",
        cataloged: true,
      },
      {
        name: "user_behavior",
        schema: "analytics",
        rows: "234M",
        columns: 18,
        size: "18.2 GB",
        cataloged: false,
      },
      {
        name: "sales_summary",
        schema: "warehouse",
        rows: "1.2M",
        columns: 8,
        size: "892 MB",
        cataloged: true,
      },
    ],
  },
  {
    id: 3,
    name: "Data Warehouse Snowflake",
    type: "Snowflake",
    icon: "/snowflake.svg",
    status: "connected",
    host: "company.snowflakecomputing.com",
    database: "DATA_WAREHOUSE",
    lastSync: "1 minute ago",
    tablesCount: 89,
    schemasCount: 12,
    connection: "Cloud Connection",
    tables: [
      {
        name: "CUSTOMER_360",
        schema: "ANALYTICS",
        rows: "5.2M",
        columns: 42,
        size: "4.8 GB",
        cataloged: true,
      },
      {
        name: "SALES_FACT",
        schema: "WAREHOUSE",
        rows: "156M",
        columns: 16,
        size: "22.4 GB",
        cataloged: true,
      },
      {
        name: "INVENTORY_SNAPSHOT",
        schema: "OPERATIONS",
        rows: "2.8M",
        columns: 12,
        size: "1.6 GB",
        cataloged: false,
      },
    ],
  },
  {
    id: 4,
    name: "Staging MySQL",
    type: "MySQL",
    icon: "/mysql.svg",
    status: "syncing",
    host: "staging-mysql.company.com",
    database: "staging",
    lastSync: "Syncing now...",
    tablesCount: 32,
    schemasCount: 3,
    connection: "Direct Connection",
    tables: [
      {
        name: "test_customers",
        schema: "staging",
        rows: "125K",
        columns: 15,
        size: "89 MB",
        cataloged: false,
      },
      {
        name: "test_orders",
        schema: "staging",
        rows: "456K",
        columns: 10,
        size: "234 MB",
        cataloged: false,
      },
    ],
  },
  {
    id: 5,
    name: "Legacy SQL Server",
    type: "SQL Server",
    icon: "/microsoft-sql-server.svg",
    status: "error",
    host: "legacy-db.company.local",
    database: "legacy_prod",
    lastSync: "3 hours ago",
    tablesCount: 156,
    schemasCount: 18,
    connection: "VPN Connection",
    tables: [
      {
        name: "legacy_customers",
        schema: "dbo",
        rows: "1.8M",
        columns: 32,
        size: "2.4 GB",
        cataloged: true,
      },
      {
        name: "legacy_transactions",
        schema: "dbo",
        rows: "12M",
        columns: 28,
        size: "8.9 GB",
        cataloged: false,
      },
    ],
  },
  {
    id: 6,
    name: "Analytics BigQuery",
    type: "BigQuery",
    icon: "/big-query.svg",
    status: "connected",
    host: "bigquery.googleapis.com",
    database: "analytics-prod",
    lastSync: "10 minutes ago",
    tablesCount: 67,
    schemasCount: 6,
    connection: "Cloud Connection",
    tables: [
      {
        name: "web_analytics",
        schema: "analytics",
        rows: "890M",
        columns: 35,
        size: "45.2 GB",
        cataloged: true,
      },
      {
        name: "conversion_funnels",
        schema: "analytics",
        rows: "234M",
        columns: 22,
        size: "18.6 GB",
        cataloged: true,
      },
    ],
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "connected":
      return "bg-green-50 text-green-700 border-green-200";
    case "syncing":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "error":
      return "bg-red-50 text-red-700 border-red-200";
    case "disconnected":
      return "bg-gray-50 text-gray-700 border-gray-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "connected":
      return <IconCircleCheck className="h-4 w-4 text-green-600" />;
    case "syncing":
      return <IconClock className="h-4 w-4 text-blue-600 animate-pulse" />;
    case "error":
      return <IconAlertCircle className="h-4 w-4 text-red-600" />;
    default:
      return <IconAlertCircle className="h-4 w-4 text-gray-600" />;
  }
}

export default function DataSourcesPage() {
  const tenantConfig = getTenantConfig();
  const totalSources = dataSources.length;
  const connectedSources = dataSources.filter(
    (source) => source.status === "connected"
  ).length;
  const totalTables = dataSources.reduce(
    (sum, source) => sum + source.tablesCount,
    0
  );
  const catalogedTables = dataSources.reduce((sum, source) => {
    return (
      sum + source.tables.filter((table) => table.cataloged).length
    );
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
                Data Sources
                {tenantConfig.id !== "default" && (
                  <span className="text-slate-400 ml-2">
                    • {tenantConfig.name}
                  </span>
                )}
              </h1>
              <p className="text-slate-600">
                Manage connected data sources and available tables
              </p>
            </div>
          </div>
          <Button>
            <IconPlus className="h-4 w-4 mr-2" />
            Add Data Source
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
                Data Sources
              </CardTitle>
              <IconDatabase className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSources}</div>
              <p className="text-xs text-slate-600">
                {connectedSources} connected
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Available Tables
              </CardTitle>
              <IconTable className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTables}</div>
              <p className="text-xs text-slate-600">
                across all data sources
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cataloged Tables
              </CardTitle>
              <IconSchema className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{catalogedTables}</div>
              <p className="text-xs text-slate-600">
                {totalTables - catalogedTables} pending
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Connection Status
              </CardTitle>
              <IconPlugConnected className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round((connectedSources / totalSources) * 100)}%
              </div>
              <p className="text-xs text-slate-600">healthy connections</p>
            </CardContent>
          </Card>
        </div>

        {/* Data Sources List */}
        <Card>
          <CardHeader>
            <CardTitle>Connected Data Sources</CardTitle>
            <CardDescription>
              View and manage all connected data sources and their available
              tables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {dataSources.map((source) => (
                <AccordionItem key={source.id} value={`source-${source.id}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-slate-50 rounded-lg border border-slate-200">
                          <Image
                            src={source.icon}
                            alt={source.type}
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-base">
                            {source.name}
                          </div>
                          <div className="text-sm text-slate-500">
                            {source.host} • {source.database}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">
                            {source.tablesCount} tables
                          </div>
                          <div className="text-xs text-slate-500">
                            {source.schemasCount} schemas
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={getStatusColor(source.status)}
                        >
                          <span className="flex items-center gap-1">
                            {getStatusIcon(source.status)}
                            {source.status}
                          </span>
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-4">
                      {/* Source Details */}
                      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
                        <div>
                          <div className="text-xs text-slate-500 mb-1">
                            Connection Type
                          </div>
                          <div className="flex items-center gap-2">
                            <IconCloudDataConnection className="h-4 w-4 text-slate-600" />
                            <span className="text-sm font-medium">
                              {source.connection}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">
                            Last Synced
                          </div>
                          <div className="text-sm font-medium">
                            {source.lastSync}
                          </div>
                        </div>
                        <div className="flex items-end justify-end">
                          <Button variant="outline" size="sm">
                            <IconRefresh className="h-4 w-4 mr-2" />
                            Sync Now
                          </Button>
                        </div>
                      </div>

                      {/* Tables List */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-semibold">
                            Available Tables
                          </h4>
                          <Badge variant="secondary">
                            {source.tables.filter((t) => t.cataloged).length} of{" "}
                            {source.tables.length} cataloged
                          </Badge>
                        </div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Table Name</TableHead>
                              <TableHead>Schema</TableHead>
                              <TableHead>Rows</TableHead>
                              <TableHead>Columns</TableHead>
                              <TableHead>Size</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="text-right">
                                Actions
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {source.tables.map((table, idx) => (
                              <TableRow key={idx}>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <IconTable className="h-4 w-4 text-slate-600" />
                                    <span className="font-medium">
                                      {table.name}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Badge variant="outline">
                                    {table.schema}
                                  </Badge>
                                </TableCell>
                                <TableCell>{table.rows}</TableCell>
                                <TableCell>{table.columns}</TableCell>
                                <TableCell>{table.size}</TableCell>
                                <TableCell>
                                  {table.cataloged ? (
                                    <Badge
                                      variant="outline"
                                      className="bg-green-50 text-green-700 border-green-200"
                                    >
                                      <IconCircleCheck className="h-3 w-3 mr-1" />
                                      Cataloged
                                    </Badge>
                                  ) : (
                                    <Badge
                                      variant="outline"
                                      className="bg-slate-50 text-slate-700 border-slate-200"
                                    >
                                      Not Cataloged
                                    </Badge>
                                  )}
                                </TableCell>
                                <TableCell className="text-right">
                                  {table.cataloged ? (
                                    <Button variant="ghost" size="sm">
                                      View Catalog
                                    </Button>
                                  ) : (
                                    <Button size="sm">
                                      <IconPlus className="h-4 w-4 mr-2" />
                                      Add to Catalog
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

