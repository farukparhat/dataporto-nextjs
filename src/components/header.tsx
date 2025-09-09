"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconChevronDown,
  IconCheck,
  IconShare,
  IconFolder,
  IconBox,
  IconMenu,
  IconQuestionMark,
  IconArticle,
  IconTrendingUp,
  IconShield,
} from "@tabler/icons-react";
import MobileSidebar from "@/components/mobile-sidebar";
import WaitlistButton from "@/components/waitlist-button";
import { DatabricksIcon, SnowflakeIcon } from "./brand-icons";

export default function Header() {
  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      {/* Floating Pill Container */}
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center justify-between bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full shadow-2xl border border-white/30 dark:border-gray-700/30 px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="Dataporto"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              dataporto
            </span>
          </Link>

          {/* Mobile Right side - Demo Button and Hamburger Menu */}
          <div className="flex items-center space-x-2">
            <WaitlistButton
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm px-3 py-1.5"
            >
              Book a Demo
            </WaitlistButton>
            <MobileSidebar />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full shadow-2xl border border-white/30 dark:border-gray-700/30 px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icon.png"
                alt="Dataporto"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                dataporto
              </span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className="flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer group flex items-center gap-1 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-full transition-all duration-200 focus:outline-none">
                <span className="font-medium">Products</span>
                <IconChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 mt-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-xl p-1"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/#snowflake-shares"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-blue-100 rounded-md">
                      <SnowflakeIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Snowflake Data Shares
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Zero-copy data sharing
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/#data-sharing-methods"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-green-100 rounded-md">
                      <IconShare className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Data Sharing Methods
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Snowflake, Databricks & sFTP
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/#deployment"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-gray-100 rounded-md">
                      <IconBox className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Deployment Options
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Managed, Hybrid, or BYOC
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer group flex items-center gap-1 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-full transition-all duration-200 focus:outline-none">
                <span className="font-medium">Solutions</span>
                <IconChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 mt-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-xl p-1"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/#features"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-purple-100 rounded-md">
                      <IconShare className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Platform Features
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Catalog, Share & Govern
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/solutions/snowflake"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-blue-100 rounded-md">
                      <SnowflakeIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Snowflake Solutions
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Enterprise data sharing
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/#governance"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-indigo-100 rounded-md">
                      <IconCheck className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Data Governance & Security
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Enterprise-grade controls
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer group flex items-center gap-1 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-full transition-all duration-200 focus:outline-none">
                <span className="font-medium">Resources</span>
                <IconChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 mt-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-xl p-1"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/#faq"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-purple-100 rounded-md">
                      <IconQuestionMark className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">FAQ</div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Frequently asked questions
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/#how-it-works"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-blue-100 rounded-md">
                      <IconArticle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        How it Works
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        See our data sharing process
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/#market"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-green-100 rounded-md">
                      <IconTrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Market Analysis
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Data sharing evolution
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/#before-after"
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-orange-100 rounded-md">
                      <IconShield className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Why Replace Custom Builds
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Stop building custom pipelines
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-full transition-all duration-200 font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Right side buttons */}
          <div className="flex items-center space-x-2">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-gray-800/40 rounded-full transition-all duration-200 font-medium"
            >
              Sign In
            </Link>
            <WaitlistButton className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full font-medium">
              Book a Live Demo
            </WaitlistButton>
          </div>
        </div>
      </div>
    </header>
  );
}
