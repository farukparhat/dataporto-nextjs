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
  IconUsers,
  IconPlus,
  IconDots,
  IconEye,
  IconEdit,
  IconMail,
  IconBuilding,
  IconTrendingUp,
  IconShare,
  IconCircleCheck,
  IconClock,
  IconAlertTriangle,
  IconFileText,
  IconSettings,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getTenantConfig } from "@/config/tenants";
import Image from "next/image";

// Mock data for clients
const clients = [
  {
    id: 1,
    name: "Acme Corp",
    industry: "Retail",
    status: "active",
    shares: 3,
    dataVolume: "2.4 GB",
    tier: "enterprise",
    contact: "john@acmecorp.com",
    joined: "2024-01-15",
    lastActivity: "2 hours ago",
    users: 12,
    description: "Leading retail chain with 500+ locations nationwide",
  },
  {
    id: 2,
    name: "TechFlow Inc",
    industry: "Technology",
    status: "active",
    shares: 5,
    dataVolume: "1.8 GB",
    tier: "professional",
    contact: "sarah@techflow.io",
    joined: "2024-01-10",
    lastActivity: "1 day ago",
    users: 8,
    description: "SaaS platform for workflow automation",
  },
  {
    id: 3,
    name: "DataCo Ltd",
    industry: "Finance",
    status: "pending",
    shares: 1,
    dataVolume: "500 MB",
    tier: "starter",
    contact: "mike@dataco.com",
    joined: "2024-02-20",
    lastActivity: "3 days ago",
    users: 3,
    description: "Financial services and analytics provider",
  },
  {
    id: 4,
    name: "Growth Labs",
    industry: "Marketing",
    status: "active",
    shares: 4,
    dataVolume: "3.1 GB",
    tier: "enterprise",
    contact: "emily@growthlabs.co",
    joined: "2024-01-08",
    lastActivity: "30 minutes ago",
    users: 15,
    description: "Marketing analytics and attribution platform",
  },
  {
    id: 5,
    name: "Insight Corp",
    industry: "Analytics",
    status: "inactive",
    shares: 2,
    dataVolume: "1.2 GB",
    tier: "professional",
    contact: "alex@insightcorp.com",
    joined: "2023-12-05",
    lastActivity: "2 weeks ago",
    users: 5,
    description: "Business intelligence and data visualization",
  },
  {
    id: 6,
    name: "Supply Chain Pro",
    industry: "Logistics",
    status: "active",
    shares: 2,
    dataVolume: "800 MB",
    tier: "professional",
    contact: "linda@supplychainpro.com",
    joined: "2024-01-18",
    lastActivity: "5 hours ago",
    users: 6,
    description: "Supply chain management and optimization",
  },
  {
    id: 7,
    name: "HealthTech Systems",
    industry: "Healthcare",
    status: "active",
    shares: 6,
    dataVolume: "4.2 GB",
    tier: "enterprise",
    contact: "robert@healthtech.com",
    joined: "2023-11-22",
    lastActivity: "1 hour ago",
    users: 20,
    description: "Healthcare data management and compliance",
  },
  {
    id: 8,
    name: "EduSmart Platform",
    industry: "Education",
    status: "trial",
    shares: 1,
    dataVolume: "200 MB",
    tier: "trial",
    contact: "jessica@edusmart.edu",
    joined: "2024-02-28",
    lastActivity: "6 hours ago",
    users: 2,
    description: "Educational technology and learning analytics",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "active":
      return "bg-green-50 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "inactive":
      return "bg-gray-50 text-gray-700 border-gray-200";
    case "trial":
      return "bg-blue-50 text-blue-700 border-blue-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "active":
      return <IconCircleCheck className="h-4 w-4 text-green-600" />;
    case "pending":
      return <IconClock className="h-4 w-4 text-yellow-600" />;
    case "inactive":
      return <IconAlertTriangle className="h-4 w-4 text-gray-600" />;
    case "trial":
      return <IconClock className="h-4 w-4 text-blue-600" />;
    default:
      return <IconCircleCheck className="h-4 w-4 text-gray-600" />;
  }
}

function getTierColor(tier: string) {
  switch (tier) {
    case "enterprise":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "professional":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "starter":
      return "bg-gray-50 text-gray-700 border-gray-200";
    case "trial":
      return "bg-orange-50 text-orange-700 border-orange-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

export default function ClientsPage() {
  const tenantConfig = getTenantConfig();
  const activeClients = clients.filter(
    client => client.status === "active"
  ).length;
  const totalShares = clients.reduce((sum, client) => sum + client.shares, 0);
  const totalUsers = clients.reduce((sum, client) => sum + client.users, 0);
  const trialClients = clients.filter(
    client => client.status === "trial"
  ).length;

  const totalDataVolume = clients.reduce((sum, client) => {
    const value = parseFloat(client.dataVolume.replace(/[GMB]/g, ""));
    const multiplier = client.dataVolume.includes("GB")
      ? 1
      : client.dataVolume.includes("MB")
        ? 0.001
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
                Clients
                {tenantConfig.id !== "default" && (
                  <span className="text-slate-400 ml-2">
                    • {tenantConfig.name}
                  </span>
                )}
              </h1>
              <p className="text-slate-600">
                Manage your client relationships and access
              </p>
            </div>
          </div>
          <Button>
            <IconPlus className="h-4 w-4 mr-2" />
            Add Client
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
                Active Clients
              </CardTitle>
              <IconUsers className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeClients}</div>
              <p className="text-xs text-slate-600">
                out of {clients.length} total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Data Shares
              </CardTitle>
              <IconShare className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalShares}</div>
              <p className="text-xs text-slate-600">across all clients</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Volume</CardTitle>
              <IconTrendingUp className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalDataVolume.toFixed(1)} GB
              </div>
              <p className="text-xs text-slate-600">total shared</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <IconBuilding className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUsers}</div>
              <p className="text-xs text-slate-600">
                {trialClients > 0
                  ? `${trialClients} on trial`
                  : "across all clients"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Clients Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Clients</CardTitle>
            <CardDescription>
              Manage client accounts, access, and data sharing permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client Name</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Shares</TableHead>
                  <TableHead>Data Volume</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Last Activity</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map(client => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          <IconBuilding className="h-4 w-4 text-slate-600" />
                          {client.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {client.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge variant="outline">{client.industry}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(client.status)}
                        <Badge
                          variant="outline"
                          className={getStatusColor(client.status)}
                        >
                          {client.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getTierColor(client.tier)}
                      >
                        {client.tier}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{client.shares}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      {client.dataVolume}
                    </TableCell>
                    <TableCell>{client.users}</TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {client.lastActivity}
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
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconEdit className="h-4 w-4 mr-2" />
                            Edit Client
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconShare className="h-4 w-4 mr-2" />
                            Manage Shares
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconUsers className="h-4 w-4 mr-2" />
                            Manage Users
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconMail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconSettings className="h-4 w-4 mr-2" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconFileText className="h-4 w-4 mr-2" />
                            View Contract
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

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Clients */}
          <Card>
            <CardHeader>
              <CardTitle>Recently Added Clients</CardTitle>
              <CardDescription>
                Newest clients in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients
                  .sort(
                    (a, b) =>
                      new Date(b.joined).getTime() -
                      new Date(a.joined).getTime()
                  )
                  .slice(0, 3)
                  .map(client => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-sm text-slate-600">
                          {client.industry} • {client.tier}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{client.joined}</p>
                        <Badge
                          variant="outline"
                          className={getStatusColor(client.status)}
                        >
                          {client.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Clients by Data Volume */}
          <Card>
            <CardHeader>
              <CardTitle>Top Clients by Data Volume</CardTitle>
              <CardDescription>
                Highest data consumers this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients
                  .sort((a, b) => {
                    const aValue = parseFloat(
                      a.dataVolume.replace(/[GMB]/g, "")
                    );
                    const bValue = parseFloat(
                      b.dataVolume.replace(/[GMB]/g, "")
                    );
                    const aMultiplier = a.dataVolume.includes("GB") ? 1 : 0.001;
                    const bMultiplier = b.dataVolume.includes("GB") ? 1 : 0.001;
                    return bValue * bMultiplier - aValue * aMultiplier;
                  })
                  .slice(0, 3)
                  .map(client => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-sm text-slate-600">
                          {client.shares} shares • {client.users} users
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{client.dataVolume}</p>
                        <p className="text-sm text-slate-600">
                          {client.industry}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
