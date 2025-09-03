"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconHome,
  IconShare,
  IconUsers,
  IconShield,
  IconChartBar,
  IconSettings,
  IconDatabase
} from "@tabler/icons-react"
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Home",
    href: "/app",
    icon: IconHome,
    description: "Overview — snapshot of shares, clients, alerts"
  },
  {
    title: "Data Sources",
    href: "/app/data-sources",
    icon: IconDatabase,
    description: "Manage connected databases (Postgres, Redshift, MySQL, S3)"
  },
  {
    title: "Data Shares",
    href: "/app/data-shares",
    icon: IconShare,
    description: "Create/manage Snowflake shares, track usage, revoke"
  },
  {
    title: "Clients",
    href: "/app/clients",
    icon: IconUsers,
    description: "Provision accounts, assign permissions, view activity"
  },
  {
    title: "Governance",
    href: "/app/governance",
    icon: IconShield,
    description: "Masking rules, row/column-level filters, audit access"
  },
  {
    title: "Monitoring & Logs",
    href: "/app/monitoring",
    icon: IconChartBar,
    description: "Pipeline health, credit usage, alerts, logs"
  },
  {
    title: "Settings",
    href: "/app/settings",
    icon: IconSettings,
    description: "Billing, users, API keys, integrations"
  }
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-2">
          <Image
            src="/icon.png"
            alt="Dataporto"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-lg font-semibold text-slate-900">dataporto</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link href={item.href}>
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <div className="p-2">
          <div className="rounded-md bg-slate-50 p-3">
            <p className="text-xs text-slate-600">
              Multi‑Platform Data Sharing as a Service
            </p>
            <p className="mt-1 text-xs font-medium text-slate-900">
              v1.0.0
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
