"use client";

import * as React from "react";
import { Dialog, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { joinWaitlist } from "@/app/actions";

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

  async function onSubmit(formData: FormData) {
    try {
      setPending(true);
      setMessage(undefined);
      const res = await joinWaitlist(formData);
      if (res.ok) {
        setMessage(
          "Thank you! We'll be in touch within 24 hours to schedule your demo."
        );
        setTimeout(() => onOpenChange(false), 2000);
      } else {
        setMessage(res.message ?? "Something went wrong. Please try again.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle>Get Started with dataporto</DialogTitle>
      <DialogDescription>
        Schedule a personalized demo to see how dataporto can transform your
        data sharing operations.
      </DialogDescription>
      <form action={onSubmit} className="space-y-4">
        <input type="hidden" name="source" value={source} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-700">
              Full Name *
            </label>
            <input
              name="name"
              required
              className="h-10 rounded-md border px-3 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              placeholder="Jane Doe"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-700">
              Work Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="h-10 rounded-md border px-3 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              placeholder="jane@company.com"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-700">
              Company *
            </label>
            <input
              name="company"
              required
              className="h-10 rounded-md border px-3 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              placeholder="Acme Inc."
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-slate-700">
              Job Title
            </label>
            <input
              name="title"
              className="h-10 rounded-md border px-3 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              placeholder="Data Engineer, CTO, etc."
            />
          </div>
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700">
            Current Data Sharing Challenges
          </label>
          <textarea
            name="challenges"
            rows={3}
            className="rounded-md border px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            placeholder="Tell us about your current data sharing setup and pain points..."
          />
        </div>

        <div className="grid gap-1 md:max-w-xs">
          <label className="text-sm font-medium text-slate-700">
            Number of Clients
          </label>
          <select
            name="clientCount"
            className="h-10 rounded-md border px-3 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <option value="">Select range</option>
            <option value="1-10">1-10 clients</option>
            <option value="11-50">11-50 clients</option>
            <option value="51-100">51-100 clients</option>
            <option value="100+">100+ clients</option>
          </select>
        </div>

        {message && (
          <p className="text-sm text-slate-600" role="status">
            {message}
          </p>
        )}

        <div className="pt-2">
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Submitting..." : "Schedule Demo"}
          </Button>
        </div>

        <p className="text-xs text-slate-500 text-center">
          By submitting this form, you agree to receive communications from
          dataporto about our services.
        </p>
      </form>
    </Dialog>
  );
}
