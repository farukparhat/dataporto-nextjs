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
import { joinWaitlist } from "@/app/actions";
import CalSignupDialog from "./cal-signup-dialog";

export default function WaitlistModal({
  open,
  onOpenChange,
  source = "website",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}) {
  const [pending, setPending] = React.useState(false);
  const [message, setMessage] = React.useState<string | undefined>();
  const [showCalDialog, setShowCalDialog] = React.useState(false);
  const [userData, setUserData] = React.useState<{
    email?: string;
    name?: string;
  }>({});

  async function onSubmit(formData: FormData) {
    try {
      setPending(true);
      setMessage(undefined);
      const res = await joinWaitlist(formData);
      if (res.ok) {
        // Store user data for Cal.com prefill
        setUserData({
          email: formData.get("email") as string,
          name: formData.get("name") as string,
        });
        setMessage("Thank you! Let's schedule your demo now.");
        // Show Cal.com dialog after a short delay
        setTimeout(() => {
          onOpenChange(false);
          setShowCalDialog(true);
        }, 1500);
      } else {
        setMessage(res.message ?? "Something went wrong. Please try again.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-[425px] max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-lg sm:text-xl">
              Get Started with dataporto
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Schedule a personalized demo to see how dataporto can transform
              your data sharing operations.
            </DialogDescription>
          </DialogHeader>
          <form action={onSubmit} className="space-y-4 sm:space-y-5">
            <input type="hidden" name="source" value={source} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Full Name *
                </label>
                <input
                  name="name"
                  required
                  className="h-11 rounded-md border px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:text-sm"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-11 rounded-md border px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:text-sm"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Company *
                </label>
                <input
                  name="company"
                  required
                  className="h-11 rounded-md border px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:text-sm"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Job Title
                </label>
                <input
                  name="title"
                  className="h-11 rounded-md border px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:text-sm"
                  placeholder="Data Engineer, CTO, etc."
                />
              </div>
            </div>

            {message && (
              <p
                className="text-sm text-slate-600 p-3 bg-slate-50 rounded-md"
                role="status"
              >
                {message}
              </p>
            )}

            <div className="pt-2">
              <Button
                type="submit"
                disabled={pending}
                className="w-full h-11 text-base sm:h-10 sm:text-sm"
              >
                {pending ? "Submitting..." : "Schedule Demo"}
              </Button>
            </div>

            <p className="text-xs text-slate-500 text-center leading-relaxed">
              By submitting this form, you agree to receive communications from
              dataporto about our services.
            </p>
          </form>
        </DialogContent>
      </Dialog>

      <CalSignupDialog
        open={showCalDialog}
        onOpenChange={setShowCalDialog}
        userEmail={userData.email}
        userName={userData.name}
      />
    </>
  );
}
