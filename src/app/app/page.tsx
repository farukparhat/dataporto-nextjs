import { redirect } from "next/navigation";

export default function AppRoot() {
  // Redirect to / if not in dev environment
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return <div>AppRoot</div>;
}