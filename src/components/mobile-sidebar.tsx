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
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const navigationItems = [
    { href: "#how-it-works", label: "How it Works" },
    { href: "/blog", label: "Blog" },
    { href: "/demo", label: "Demo" },
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
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center space-x-3">
              <Image
                src="/icon.png"
                alt="Dataporto"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <SheetTitle className="text-xl font-bold text-slate-900">
                dataporto
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6">
            <div className="space-y-1">
              {navigationItems.map((item, index) => (
                <div key={item.href}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 group"
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex-1">{item.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center w-full px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 text-left group"
                    >
                      <span className="flex-1">{item.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <SheetFooter className="px-6 py-4 border-t bg-slate-50">
            <div className="w-full space-y-4">
              <div className="text-sm">
                <p className="font-semibold text-slate-900 mb-2">
                  Get in touch
                </p>
                <a
                  href="mailto:hello@dataporto.com"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  hello@dataporto.com
                </a>
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Terms
                </a>
              </div>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
