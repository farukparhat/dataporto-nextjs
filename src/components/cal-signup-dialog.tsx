"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Cal from "@calcom/embed-react";

export default function CalSignupDialog({
  open,
  onOpenChange,
  userEmail,
  userName,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userEmail?: string;
  userName?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-lg sm:text-xl">
            Schedule Your Demo
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Great! Now let&apos;s schedule your personalized dataporto demo.
            Choose a time that works best for you.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="min-h-[400px]">
            <Cal
              calLink="faruk-parhat-afj3wo/dataporto-introduction"
              style={{ width: "100%", height: "400px", border: "none" }}
              config={{
                email: userEmail || "",
                name: userName || "",
                theme: "light",
                layout: "month_view",
                hideEventTypeDetails: "false",
                hideGdprBanner: "true",
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={() => onOpenChange(false)}
              className="flex-1"
              variant="outline"
            >
              Close
            </Button>
          </div>

          <p className="text-xs text-slate-500 text-center leading-relaxed">
            Need to reschedule? You can modify your booking anytime through the
            confirmation email.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
