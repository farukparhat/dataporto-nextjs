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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IconSettings,
  IconUser,
  IconBell,
  IconShield,
  IconKey,
  IconCreditCard,
  IconUsers,
  IconDatabase,
  IconMail,
  IconBrandSlack,
  IconWebhook,
  IconCopy,
  IconRefresh,
  IconTrash,
  IconPlus,
  IconEye,
  IconEyeOff,
  IconCircleCheck,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getTenantConfig } from "@/config/tenants";
import Image from "next/image";
import { useState } from "react";

// Mock data for API keys
const apiKeys = [
  {
    id: 1,
    name: "Production API Key",
    key: "pk_live_1234567890abcdef",
    created: "2024-01-15",
    lastUsed: "2 hours ago",
    status: "active",
  },
  {
    id: 2,
    name: "Development API Key",
    key: "pk_test_abcdef1234567890",
    created: "2024-01-10",
    lastUsed: "5 minutes ago",
    status: "active",
  },
  {
    id: 3,
    name: "Staging Environment",
    key: "pk_stage_xyz7890123456",
    created: "2024-02-01",
    lastUsed: "1 day ago",
    status: "active",
  },
];

// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@company.com",
    role: "Admin",
    status: "active",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@company.com",
    role: "Editor",
    status: "active",
    lastActive: "5 minutes ago",
  },
  {
    id: 3,
    name: "Mike Davis",
    email: "mike@company.com",
    role: "Viewer",
    status: "active",
    lastActive: "1 day ago",
  },
  {
    id: 4,
    name: "Emily Chen",
    email: "emily@company.com",
    role: "Editor",
    status: "pending",
    lastActive: "Never",
  },
];

// Mock data for webhooks
const webhooks = [
  {
    id: 1,
    name: "Sync Completion Webhook",
    url: "https://api.company.com/webhooks/sync",
    events: ["sync.completed", "sync.failed"],
    status: "active",
    lastTriggered: "2 hours ago",
  },
  {
    id: 2,
    name: "Schema Change Notification",
    url: "https://api.company.com/webhooks/schema",
    events: ["schema.changed"],
    status: "active",
    lastTriggered: "1 day ago",
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
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getRoleBadgeColor(role: string) {
  switch (role) {
    case "Admin":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "Editor":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Viewer":
      return "bg-gray-50 text-gray-700 border-gray-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

export default function SettingsPage() {
  const tenantConfig = getTenantConfig();
  const [showApiKey, setShowApiKey] = useState<{ [key: number]: boolean }>({});

  const toggleApiKeyVisibility = (id: number) => {
    setShowApiKey(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const maskApiKey = (key: string) => {
    return key.substring(0, 12) + "••••••••••••••••";
  };

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
                Settings
                {tenantConfig.id !== "default" && (
                  <span className="text-slate-400 ml-2">
                    • {tenantConfig.name}
                  </span>
                )}
              </h1>
              <p className="text-slate-600">
                Manage your account and workspace preferences
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl">
          {/* Profile Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconUser className="h-5 w-5 mr-2" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Update your personal information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="John Smith"
                    defaultValue="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    defaultValue="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Acme Corporation"
                    defaultValue="Acme Corporation"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                      <SelectItem value="cet">
                        Central European Time (CET)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconBell className="h-5 w-5 mr-2" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Configure how and when you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-slate-600">
                      Receive email updates about sync jobs and alerts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Slack Notifications</Label>
                    <p className="text-sm text-slate-600">
                      Send notifications to your Slack workspace
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-green-700 bg-green-50"
                    >
                      Connected
                    </Badge>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Failed Sync Alerts</Label>
                    <p className="text-sm text-slate-600">
                      Get notified immediately when a sync job fails
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Schema Change Alerts</Label>
                    <p className="text-sm text-slate-600">
                      Notify when schema changes are detected
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Summary Report</Label>
                    <p className="text-sm text-slate-600">
                      Receive a weekly summary of your data sharing activity
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconShield className="h-5 w-5 mr-2" />
                Security
              </CardTitle>
              <CardDescription>
                Manage your account security and authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-slate-600">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Update Password</Button>
              </div>
            </CardContent>
          </Card>

          {/* API Keys */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconKey className="h-5 w-5 mr-2" />
                API Keys
              </CardTitle>
              <CardDescription>
                Manage API keys for programmatic access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>API Key</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys.map(key => (
                    <TableRow key={key.id}>
                      <TableCell className="font-medium">{key.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                            {showApiKey[key.id] ? key.key : maskApiKey(key.key)}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleApiKeyVisibility(key.id)}
                          >
                            {showApiKey[key.id] ? (
                              <IconEyeOff className="h-4 w-4" />
                            ) : (
                              <IconEye className="h-4 w-4" />
                            )}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <IconCopy className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">
                        {key.created}
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">
                        {key.lastUsed}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(key.status)}
                        >
                          {key.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <IconRefresh className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <IconTrash className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4">
                <Button variant="outline">
                  <IconPlus className="h-4 w-4 mr-2" />
                  Generate New API Key
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Webhooks */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconWebhook className="h-5 w-5 mr-2" />
                Webhooks
              </CardTitle>
              <CardDescription>
                Configure webhooks to receive real-time updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead>Events</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Triggered</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {webhooks.map(webhook => (
                    <TableRow key={webhook.id}>
                      <TableCell className="font-medium">
                        {webhook.name}
                      </TableCell>
                      <TableCell>
                        <code className="text-sm text-slate-600">
                          {webhook.url}
                        </code>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {webhook.events.map((event, idx) => (
                            <Badge key={idx} variant="secondary">
                              {event}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(webhook.status)}
                        >
                          {webhook.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">
                        {webhook.lastTriggered}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <IconTrash className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4">
                <Button variant="outline">
                  <IconPlus className="h-4 w-4 mr-2" />
                  Add Webhook
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconUsers className="h-5 w-5 mr-2" />
                Team Members
              </CardTitle>
              <CardDescription>
                Manage team access and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map(member => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">
                        {member.name}
                      </TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getRoleBadgeColor(member.role)}
                        >
                          {member.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(member.status)}
                        >
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">
                        {member.lastActive}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <IconTrash className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4">
                <Button variant="outline">
                  <IconPlus className="h-4 w-4 mr-2" />
                  Invite Team Member
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Billing */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <IconCreditCard className="h-5 w-5 mr-2" />
                Billing & Subscription
              </CardTitle>
              <CardDescription>
                Manage your billing information and subscription
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-lg">Enterprise Plan</h3>
                  <p className="text-sm text-slate-600">
                    $499/month • Billed annually
                  </p>
                </div>
                <Badge variant="outline" className="text-green-700 bg-green-50">
                  <IconCircleCheck className="h-4 w-4 mr-1" />
                  Active
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600">Current Usage</p>
                  <p className="text-2xl font-bold mt-1">12.4 TB</p>
                  <p className="text-sm text-slate-600 mt-1">
                    of 50 TB included
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600">Active Shares</p>
                  <p className="text-2xl font-bold mt-1">24</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Unlimited included
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-600">Next Billing Date</p>
                  <p className="text-2xl font-bold mt-1">Mar 15</p>
                  <p className="text-sm text-slate-600 mt-1">2025</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="font-medium">Payment Method</p>
                  <p className="text-sm text-slate-600">
                    •••• •••• •••• 4242 (Visa)
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Update Payment Method</Button>
                  <Button variant="outline">View Invoices</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <IconAlertTriangle className="h-5 w-5 mr-2" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                Irreversible actions that affect your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                <div>
                  <p className="font-medium text-red-900">Delete Account</p>
                  <p className="text-sm text-red-700">
                    Permanently delete your account and all associated data
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="text-red-700 border-red-300"
                >
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
