"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition",
        open ? "visible" : "invisible"
      )}
      aria-hidden={!open}
      onClick={() => onOpenChange(false)}
    >
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-md rounded-xl border bg-white p-6 shadow-xl",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 text-xl font-semibold text-slate-900">{children}</h3>
  );
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm text-slate-600">{children}</p>;
}
