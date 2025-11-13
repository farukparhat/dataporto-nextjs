"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconHome,
  IconShare,
  IconUsers,
  IconShield,
  IconChartBar,
  IconSettings,
  IconDatabase,
  IconBooks,
  IconAnchor,
} from "@tabler/icons-react";
import Image from "next/image";

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
} from "@/components/ui/sidebar";
import { getTenantConfig } from "@/config/tenants";
import { NavUser } from "@/components/nav-user";

const navigationItems = [
  {
    title: "Home",
    href: "/app",
    icon: IconHome,
    description: "Overview — snapshot of shares, clients, alerts",
  },
  {
    title: "Data Sources",
    href: "/app/data-sources",
    icon: IconDatabase,
    description: "Manage connected databases (Postgres, Redshift, MySQL, S3)",
  },
  {
    title: "Data Catalog",
    href: "/app/data-catalog",
    icon: IconBooks,
    description: "Browse and discover available datasets and tables",
  },
  {
    title: "Data Shares",
    href: "/app/data-shares",
    icon: IconShare,
    description: "Create/manage Snowflake shares, track usage, revoke",
  },
  {
    title: "Data Dock",
    href: "/app/data-dock",
    icon: IconAnchor,
    description: "Self-serve data sharing portal for enterprise clients",
  },
  {
    title: "Clients",
    href: "/app/clients",
    icon: IconUsers,
    description: "Provision accounts, assign permissions, view activity",
  },
  {
    title: "Governance",
    href: "/app/governance",
    icon: IconShield,
    description: "Masking rules, row/column-level filters, audit access",
  },
  {
    title: "Monitoring & Logs",
    href: "/app/monitoring",
    icon: IconChartBar,
    description: "Pipeline health, credit usage, alerts, logs",
  },
  {
    title: "Settings",
    href: "/app/settings",
    icon: IconSettings,
    description: "Billing, users, API keys, integrations",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const tenantConfig = getTenantConfig();

  // User data - uses tenant config if available, otherwise defaults
  const user = {
    name: tenantConfig.user?.name || "Demo User",
    email: tenantConfig.user?.email || "demo@dataporto.com",
    avatar: tenantConfig.id !== "default" ? tenantConfig.logo : "/icon.png",
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center space-x-3 px-3 py-3">
          <Image
            src="/icon.png"
            alt="dataporto"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            dataporto
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map(item => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={`group relative transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 border-l-3 border-l-blue-500 text-blue-700 font-semibold shadow-sm"
                          : "hover:bg-slate-50 font-medium text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 w-full"
                      >
                        <Icon
                          className={`h-4 w-4 ${isActive ? "text-blue-600" : "text-slate-500"}`}
                        />
                        <span className="text-sm leading-tight">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
