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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Mobile Layout */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center lg:hidden">
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
            <span className="text-xl font-bold text-gray-900">dataporto</span>
          </Link>
        </div>

        {/* Mobile Right side buttons */}
        <div className="flex items-center space-x-3">
          <MobileSidebar />
          <WaitlistButton size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
            Book a Live Demo
          </WaitlistButton>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="container mx-auto px-4 py-3 hidden lg:flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-64">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="Dataporto"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-xl font-bold text-gray-900">dataporto</span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer group flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 focus:outline-none">
              <span className="font-medium">Products</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-72 mt-1 bg-white border border-gray-200 shadow-lg rounded-lg p-1"
              sideOffset={8}
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/#snowflake-shares"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 bg-blue-100 rounded-md">
                    <Snowflake className="h-4 w-4 text-blue-600" />
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
                  href="/#databricks-sharing"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 bg-orange-100 rounded-md">
                    <DataBricks className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Databricks Delta Sharing
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      Live data in Databricks
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#sftp-delivery"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 bg-green-100 rounded-md">
                    <Folder className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      sFTP File Delivery
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      Automated file transfers
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer group flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 focus:outline-none">
              <span className="font-medium">Solutions</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-72 mt-1 bg-white border border-gray-200 shadow-lg rounded-lg p-1"
              sideOffset={8}
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/#multi-platform"
                  className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 bg-purple-100 rounded-md">
                    <Share2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Multi-Platform Orchestration
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      Unified control plane
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
                    <Check className="h-4 w-4 text-indigo-600" />
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
            <DropdownMenuTrigger className="cursor-pointer group flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 focus:outline-none">
              <span className="font-medium">Resources</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-60 mt-1 bg-white border border-gray-200 shadow-lg rounded-lg p-1"
              sideOffset={8}
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/#how-it-works"
                  className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="font-medium text-gray-900">How it Works</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/blog"
            className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 font-medium"
          >
            Blog
          </Link>

          {/* <Link
            href="/pricing"
            className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 font-medium"
          >
            Pricing
          </Link> */}
        </nav>

        {/* Desktop Right side buttons */}
        <div className="flex items-center space-x-4 w-64">
          <Link
            href="/login"
            className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200 font-medium"
          >
            Sign In
          </Link>
          <WaitlistButton className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium">
            Book a Live Demo
          </WaitlistButton>
        </div>
      </div>
    </header>
  );
}
