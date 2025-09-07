"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  IconMenu2,
  IconChevronRight,
  IconChevronDown,
  IconFolder,
  IconBox,
  IconShare,
  IconCheck,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { SnowflakeIcon } from "./brand-icons";

type NavigationItem = {
  href?: string;
  label: string;
  children?: {
    href: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
  isExpanded?: boolean;
};

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (label: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedSections(newExpanded);
  };

  const navigationItems: NavigationItem[] = [
    {
      label: "Products",
      children: [
        {
          href: "/#snowflake-shares",
          label: "Snowflake Data Shares",
          description: "Zero-copy data sharing",
          icon: <SnowflakeIcon className="h-4 w-4" />,
        },
        {
          href: "/#sftp-delivery",
          label: "sFTP File Delivery",
          description: "Automated file transfers",
          icon: <IconFolder className="h-4 w-4" />,
        },
        {
          href: "/#deployment",
          label: "Deployment Options",
          description: "Managed, Hybrid, or BYOC",
          icon: <IconBox className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Solutions",
      children: [
        {
          href: "/#multi-platform",
          label: "Multi-Platform Orchestration",
          description: "Unified control plane",
          icon: <IconShare className="h-4 w-4" />,
        },
        {
          href: "/solutions/snowflake",
          label: "Snowflake Solutions",
          description: "Enterprise data sharing",
          icon: <SnowflakeIcon className="h-4 w-4" />,
        },
        {
          href: "/#governance",
          label: "Data Governance & Security",
          description: "Enterprise-grade controls",
          icon: <IconCheck className="h-4 w-4" />,
        },
      ],
    },
    {
      label: "Resources",
      children: [
        {
          href: "/#how-it-works",
          label: "How it Works",
        },
      ],
    },
    { href: "/blog", label: "Blog" },
    { href: "/login", label: "Sign In" },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      // Handle anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <IconMenu2 className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] p-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-gray-200/30 dark:border-gray-700/30"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="px-6 py-4 border-b border-gray-200/30 dark:border-gray-700/30">
            <div className="flex items-center space-x-3">
              <Image
                src="/icon.png"
                alt="Dataporto"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <SheetTitle className="text-xl font-bold text-gray-900 dark:text-white">
                dataporto
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6">
            <div className="space-y-2">
              {navigationItems.map(item => (
                <div key={item.href || item.label}>
                  {item.children ? (
                    // Expandable section with children
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/40 rounded-lg transition-all duration-200"
                      >
                        <span>{item.label}</span>
                        <IconChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedSections.has(item.label) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedSections.has(item.label) && (
                        <div className="ml-4 space-y-1">
                          {item.children.map(child => (
                            <button
                              key={child.href}
                              onClick={() => handleNavClick(child.href)}
                              className="flex items-start gap-3 w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/40 rounded-lg transition-all duration-200 group"
                            >
                              {child.icon && (
                                <div className="mt-0.5 text-gray-500 dark:text-gray-400">
                                  {child.icon}
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 dark:text-white text-sm">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                              <IconChevronRight className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.href?.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/40 rounded-lg transition-all duration-200 group"
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                      <IconChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href!)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/40 rounded-lg transition-all duration-200 text-left group"
                    >
                      <span>{item.label}</span>
                      <IconChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* CTA Section */}
          <div className="px-6 py-6 border-t border-gray-200/30 dark:border-gray-700/30">
            <Link
              href="/demo"
              className="block w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-center py-3 px-4 rounded-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Book a Demo
            </Link>
          </div>

          {/* Footer */}
          <SheetFooter className="px-6 py-4 border-t border-gray-200/30 dark:border-gray-700/30">
            <div className="w-full space-y-4">
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  Get in touch
                </p>
                <a
                  href="mailto:hello@dataporto.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  hello@dataporto.com
                </a>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Terms
                </Link>
              </div>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
