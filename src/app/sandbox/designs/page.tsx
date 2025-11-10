import { redirect } from "next/navigation";
import { LinkedInCover } from "@/components/linkedin-cover";

export default function SandboxDesignsPage() {
  // Redirect to / if not in dev environment
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            LinkedIn Cover Design
          </h1>
          <p className="text-slate-400 text-sm mb-4">
            Dimensions: 1584px × 396px (LinkedIn standard)
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <LinkedInCover />
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-slate-400 text-sm">
              To download: Right-click on the design above and "Save as PNG" or
              take a screenshot
            </p>
            <p className="text-slate-400 text-sm">
              Upload to LinkedIn: Profile → Edit cover photo → Upload the image
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
