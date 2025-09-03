"use client"

import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconUsers,
  IconShare,
  IconDatabase,
  IconActivity,
  IconTrendingUp,
  IconCircleCheck,
  IconAlertTriangle
} from "@tabler/icons-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function AppRoot() {
  // Redirect to / if not in dev environment
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="md:hidden" />
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
                <p className="text-slate-600">Welcome back! Here&apos;s your data sharing overview.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Shares</CardTitle>
                <IconShare className="h-4 w-4 text-slate-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-slate-600">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clients</CardTitle>
                <IconUsers className="h-4 w-4 text-slate-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-slate-600">
                  +1 new this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
                <IconDatabase className="h-4 w-4 text-slate-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-slate-600">
                  All synced
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Data Volume Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <IconTrendingUp className="h-5 w-5 mr-2" />
                  Data Volume Shared (Last 30 Days)
                </CardTitle>
                <CardDescription>
                  Total data transferred to clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200">
                  <p className="text-slate-500">Chart visualization coming soon</p>
                </div>
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
              <CardDescription>
                Latest events and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <IconCircleCheck className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Data sync completed</p>
                    <p className="text-sm text-slate-600">PostgreSQL source synced successfully • 2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <IconUsers className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">New client onboarded</p>
                    <p className="text-sm text-slate-600">TechFlow Inc added to Databricks sharing • 1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <IconAlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Schema change detected</p>
                    <p className="text-sm text-slate-600">New column added to users table • 4 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}