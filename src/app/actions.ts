"use server";

import { z } from "zod";
import supabaseAdminClient from "@/lib/supabase/admin";

const WaitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().email("Invalid email"),
  company: z.string().trim().min(1, "Company is required").max(200),
  title: z.string().trim().max(120).optional().nullable(),
  challenges: z.string().trim().max(1000).optional().nullable(),
  clientCount: z.string().trim().max(50).optional().nullable(),
  source: z.string().trim().max(120).default("website"),
});

export type WaitlistInput = z.infer<typeof WaitlistSchema>;
export type JoinWaitlistResult = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function joinWaitlist(
  input: unknown
): Promise<JoinWaitlistResult> {
  let candidate: unknown = input;
  if (typeof FormData !== "undefined" && input instanceof FormData) {
    candidate = {
      name: input.get("name"),
      email: input.get("email"),
      company: input.get("company"),
      title: input.get("title"),
      challenges: input.get("challenges"),
      clientCount: input.get("clientCount"),
      source: input.get("source") ?? "website",
    };
  }
  const parsed = WaitlistSchema.safeParse(candidate);
  if (!parsed.success) {
    return {
      ok: false as const,
      message: parsed.error.issues[0]?.message ?? "Invalid input",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, company, title, challenges, clientCount, source } =
    parsed.data;

  const { error } = await supabaseAdminClient.from("waitlist").upsert(
    [
      {
        name,
        email: email.toLowerCase(),
        company,
        title: title ?? null,
        challenges: challenges ?? null,
        client_count: clientCount ?? null,
        source,
      },
    ],
    { onConflict: "email" }
  );

  if (error) {
    console.error(error);
    return { ok: false as const, message: "Failed to save. Please try again." };
  }

  return { ok: true as const };
}
