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
  IconShield,
  IconEye,
  IconClock,
  IconAlertTriangle,
  IconPlus,
  IconDots,
  IconEdit,
  IconFileText,
  IconBan,
  IconKey,
  IconActivity,
  IconLock,
  IconUserCheck,
  IconTrendingUp,
  IconGlobe,
  IconDatabase,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

// Mock data for governance policies
const governancePolicies = [
  {
    id: 1,
    name: "Customer PII Protection",
    type: "access-control",
    scope: "customers table",
    status: "active",
    lastUpdated: "2 hours ago",
    affectedShares: 8,
    riskLevel: "high",
    description: "Mask personal identifiable information for all client shares",
    rules: ["email masking", "phone encryption", "address filtering"],
    compliance: ["GDPR", "CCPA"],
    created: "2024-01-10",
  },
  {
    id: 2,
    name: "Financial Data Access Control",
    type: "role-based",
    scope: "sales_summary view",
    status: "active",
    lastUpdated: "1 day ago",
    affectedShares: 5,
    riskLevel: "medium",
    description:
      "Restrict financial metrics to approved enterprise clients only",
    rules: ["role verification", "client tier filtering", "audit logging"],
    compliance: ["SOX", "PCI-DSS"],
    created: "2024-01-08",
  },
  {
    id: 3,
    name: "Marketing Data Retention",
    type: "expiration",
    scope: "campaign_metrics table",
    status: "expiring",
    lastUpdated: "3 days ago",
    affectedShares: 3,
    riskLevel: "low",
    description: "Auto-expire marketing data shares after 12 months",
    rules: [
      "time-based expiration",
      "automated cleanup",
      "client notification",
    ],
    compliance: ["GDPR"],
    created: "2023-12-15",
  },
  {
    id: 4,
    name: "Regional Data Sovereignty",
    type: "compliance",
    scope: "user_sessions table",
    status: "active",
    lastUpdated: "5 hours ago",
    affectedShares: 12,
    riskLevel: "high",
    description: "Ensure EU user data remains within European data centers",
    rules: ["geo-filtering", "regional routing", "jurisdiction compliance"],
    compliance: ["GDPR", "Data Residency"],
    created: "2024-01-05",
  },
  {
    id: 5,
    name: "Schema Change Protection",
    type: "safety",
    scope: "all tables",
    status: "active",
    lastUpdated: "30 minutes ago",
    affectedShares: 22,
    riskLevel: "medium",
    description: "Prevent breaking changes to shared schemas without approval",
    rules: ["change detection", "impact analysis", "approval workflow"],
    compliance: ["Internal SLA"],
    created: "2024-01-12",
  },
  {
    id: 6,
    name: "Analytics Data Masking",
    type: "filtering",
    scope: "product_analytics view",
    status: "pending",
    lastUpdated: "2 days ago",
    affectedShares: 4,
    riskLevel: "medium",
    description:
      "Apply client-specific data filtering for competitive analytics",
    rules: ["client segmentation", "competitive filtering", "usage tracking"],
    compliance: ["NDA", "Competitive Protection"],
    created: "2024-01-18",
  },
];

// Mock data for audit logs
const auditLogs = [
  {
    id: 1,
    timestamp: "2024-01-20 14:30:22",
    user: "Acme Corp",
    action: "data_access",
    resource: "customers table",
    details: "Accessed 1,250 customer records via Snowflake share",
    status: "success",
    ip: "198.51.100.42",
    location: "New York, US",
  },
  {
    id: 2,
    timestamp: "2024-01-20 14:25:15",
    user: "TechFlow Inc",
    action: "schema_change",
    resource: "product_analytics view",
    details: "Attempted to access deprecated column 'old_metric'",
    status: "blocked",
    ip: "203.0.113.58",
    location: "London, UK",
  },
  {
    id: 3,
    timestamp: "2024-01-20 14:20:08",
    user: "DataCo Ltd",
    action: "export_request",
    resource: "campaign_metrics table",
    details: "Downloaded Q1 campaign data (52MB)",
    status: "success",
    ip: "192.0.2.184",
    location: "Toronto, CA",
  },
  {
    id: 4,
    timestamp: "2024-01-20 14:15:33",
    user: "Growth Labs",
    action: "policy_violation",
    resource: "financial_summary view",
    details: "Attempted access outside approved hours",
    status: "denied",
    ip: "198.51.100.91",
    location: "San Francisco, US",
  },
];

function getPolicyTypeIcon(type: string) {
  switch (type) {
    case "access-control":
      return <IconKey className="h-4 w-4 text-slate-600" />;
    case "role-based":
      return <IconUserCheck className="h-4 w-4 text-slate-600" />;
    case "expiration":
      return <IconClock className="h-4 w-4 text-slate-600" />;
    case "compliance":
      return <IconGlobe className="h-4 w-4 text-slate-600" />;
    case "safety":
      return <IconShield className="h-4 w-4 text-slate-600" />;
    case "filtering":
      return <IconEye className="h-4 w-4 text-slate-600" />;
    default:
      return <IconLock className="h-4 w-4 text-slate-600" />;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "active":
      return "bg-green-50 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "expiring":
      return "bg-orange-50 text-orange-700 border-orange-200";
    case "inactive":
      return "bg-gray-50 text-gray-700 border-gray-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getRiskColor(risk: string) {
  switch (risk) {
    case "high":
      return "bg-red-50 text-red-700 border-red-200";
    case "medium":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "low":
      return "bg-green-50 text-green-700 border-green-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getAuditStatusIcon(status: string) {
  switch (status) {
    case "success":
      return <IconActivity className="h-4 w-4 text-green-600" />;
    case "blocked":
    case "denied":
      return <IconBan className="h-4 w-4 text-red-600" />;
    case "warning":
      return <IconAlertTriangle className="h-4 w-4 text-yellow-600" />;
    default:
      return <IconActivity className="h-4 w-4 text-slate-600" />;
  }
}

export default function GovernPage() {
  const activePolicies = governancePolicies.filter(
    p => p.status === "active"
  ).length;
  const highRiskPolicies = governancePolicies.filter(
    p => p.riskLevel === "high"
  ).length;
  const totalAffectedShares = governancePolicies.reduce(
    (sum, p) => sum + p.affectedShares,
    0
  );
  const complianceFrameworks = new Set(
    governancePolicies.flatMap(p => p.compliance)
  ).size;

  const recentViolations = auditLogs.filter(
    log => log.status === "blocked" || log.status === "denied"
  ).length;

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="md:hidden" />
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Governance & Compliance
              </h1>
              <p className="text-slate-600">Keep control and stay compliant</p>
            </div>
          </div>
          <Button>
            <IconPlus className="h-4 w-4 mr-2" />
            New Policy
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
                Active Policies
              </CardTitle>
              <IconShield className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activePolicies}</div>
              <p className="text-xs text-slate-600">
                of {governancePolicies.length} total policies
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                High Risk Areas
              </CardTitle>
              <IconAlertTriangle className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{highRiskPolicies}</div>
              <p className="text-xs text-slate-600">
                policies require attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Governed Shares
              </CardTitle>
              <IconDatabase className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAffectedShares}</div>
              <p className="text-xs text-slate-600">shares under governance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Compliance Frameworks
              </CardTitle>
              <IconGlobe className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{complianceFrameworks}</div>
              <p className="text-xs text-slate-600">
                {recentViolations > 0
                  ? `${recentViolations} recent violations`
                  : "all compliant"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Governance Policies Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Governance Policies</CardTitle>
            <CardDescription>
              Access control, compliance rules, and data protection policies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Policy Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Scope</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Affected Shares</TableHead>
                  <TableHead>Compliance</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {governancePolicies.map(policy => (
                  <TableRow key={policy.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{policy.name}</div>
                        <div className="text-sm text-slate-500">
                          {policy.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getPolicyTypeIcon(policy.type)}
                        <span className="font-medium capitalize">
                          {policy.type.replace("-", " ")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge variant="outline">{policy.scope}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getStatusColor(policy.status)}
                      >
                        {policy.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getRiskColor(policy.riskLevel)}
                      >
                        {policy.riskLevel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{policy.affectedShares}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {policy.compliance.slice(0, 2).map((comp, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {comp}
                          </Badge>
                        ))}
                        {policy.compliance.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{policy.compliance.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {policy.lastUpdated}
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
                            Edit Policy
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconActivity className="h-4 w-4 mr-2" />
                            View Audit Trail
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconTrendingUp className="h-4 w-4 mr-2" />
                            Policy Impact
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <IconFileText className="h-4 w-4 mr-2" />
                            Compliance Report
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

        {/* Recent Audit Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Audit Activity</CardTitle>
            <CardDescription>
              Real-time logs of data access, policy enforcement, and compliance
              events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User/Client</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map(log => (
                  <TableRow key={log.id}>
                    <TableCell className="whitespace-nowrap text-sm">
                      {log.timestamp}
                    </TableCell>
                    <TableCell className="font-medium">{log.user}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge variant="outline" className="capitalize">
                        {log.action.replace("_", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>{log.resource}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getAuditStatusIcon(log.status)}
                        <span className="capitalize">{log.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {log.location}
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="text-sm text-slate-600 truncate">
                        {log.details}
                      </div>
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
