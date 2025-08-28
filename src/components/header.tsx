"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check, Share2, Folder } from "lucide-react";
import { Snowflake, DataBricks } from "@/components/brand-icons";
import MobileSidebar from "@/components/mobile-sidebar";
import WaitlistButton from "@/components/waitlist-button";

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
      {/* Mobile Layout */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center md:hidden">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="Dataporto"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-2xl font-bold text-slate-900">dataporto</span>
          </Link>
        </div>

        {/* Mobile Right side buttons */}
        <div className="flex items-center space-x-4">
          <MobileSidebar />
          <WaitlistButton>Schedule a Demo</WaitlistButton>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="container mx-auto px-4 py-4 hidden md:grid md:grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="Dataporto"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-2xl font-bold text-slate-900">dataporto</span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="flex space-x-2 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer group flex items-center gap-1 px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50">
              <span className="font-medium">Solutions</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-64 mt-2 bg-white border border-slate-200 shadow-lg rounded-lg p-2"
              sideOffset={8}
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/#snowflake-shares"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-blue-50 transition-colors group"
                >
                  <div className="p-1.5 bg-blue-100 rounded-md group-hover:bg-blue-200 transition-colors">
                    <Snowflake className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Snowflake Data Shares
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Zero-copy data sharing
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#databricks-sharing"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-orange-50 transition-colors group"
                >
                  <div className="p-1.5 bg-orange-100 rounded-md group-hover:bg-orange-200 transition-colors">
                    <DataBricks className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Databricks Delta Sharing
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Live data in Databricks
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#sftp-delivery"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-green-50 transition-colors group"
                >
                  <div className="p-1.5 bg-green-100 rounded-md group-hover:bg-green-200 transition-colors">
                    <Folder className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      sFTP File Delivery
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Automated file transfers
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#multi-platform"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-purple-50 transition-colors group"
                >
                  <div className="p-1.5 bg-purple-100 rounded-md group-hover:bg-purple-200 transition-colors">
                    <Share2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Multi-Platform Orchestration
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Unified control plane
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#governance"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-indigo-50 transition-colors group"
                >
                  <div className="p-1.5 bg-indigo-100 rounded-md group-hover:bg-indigo-200 transition-colors">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Data Governance & Security
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Enterprise-grade controls
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/#how-it-works"
            className="flex items-center px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 font-medium"
          >
            How it Works
          </Link>
          <Link
            href="/blog"
            className="flex items-center px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 font-medium"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop Right side buttons */}
        <div className="flex items-center space-x-4 justify-end">
          <MobileSidebar />
          <Link
            href="/login"
            className="flex items-center px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 font-medium"
          >
            Log In
          </Link>
          <WaitlistButton>Schedule a Demo</WaitlistButton>
        </div>
      </div>
    </header>
  );
}
