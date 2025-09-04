"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { joinWaitlist } from "@/app/actions";
import CalSignupDialog from "./cal-signup-dialog";
import { cn } from "@/lib/utils";

interface DemoSignupFormProps {
  className?: string;
}

export default function DemoSignupForm({ className }: DemoSignupFormProps) {
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
        // Reset form after successful submission
        const form = document.querySelector("form") as HTMLFormElement;
        if (form) form.reset();
        // Show Cal.com dialog after a short delay
        setTimeout(() => {
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
      <form action={onSubmit} className={cn("space-y-6", className)}>
        <input type="hidden" name="source" value="demo-page" />

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

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">
            Current Data Sharing Challenges
          </label>
          <textarea
            name="challenges"
            rows={3}
            className="rounded-md border px-3 py-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:py-2 sm:text-sm"
            placeholder="Tell us about your current data sharing setup and pain points..."
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-700">
            Number of Clients
          </label>
          <select
            name="clientCount"
            className="h-11 rounded-md border px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:text-sm"
          >
            <option value="">Select range</option>
            <option value="1-10">1-10 clients</option>
            <option value="11-50">11-50 clients</option>
            <option value="51-100">51-100 clients</option>
            <option value="100+">100+ clients</option>
          </select>
        </div>

        {message && (
          <div
            className={`text-sm p-4 rounded-md ${
              message.includes("Thank you")
                ? "text-green-700 bg-green-50 border border-green-200"
                : "text-red-700 bg-red-50 border border-red-200"
            }`}
            role="status"
          >
            {message}
          </div>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            disabled={pending}
            className="w-full h-12 text-base font-medium"
          >
            {pending ? "Submitting..." : "Schedule My Demo"}
          </Button>
        </div>

        <p className="text-xs text-slate-500 text-center leading-relaxed">
          By submitting this form, you agree to receive communications from
          dataporto about our services.
        </p>
      </form>

      <CalSignupDialog
        open={showCalDialog}
        onOpenChange={setShowCalDialog}
        userEmail={userData.email}
        userName={userData.name}
      />
    </>
  );
}
