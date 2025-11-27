import { redirect } from "next/navigation";
import { LinkedInCover } from "@/components/linkedin-cover";
import { LinkedInPostGraphic } from "@/components/linkedin-post-graphic";

export default function SandboxDesignsPage() {
  // Redirect to / if not in dev environment
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* LinkedIn Post Graphics */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            LinkedIn Post Graphics
          </h1>
          <p className="text-slate-400 text-sm mb-6">
            Dimensions: 1080px × 1080px (Square format)
          </p>

          <div className="space-y-8">
            {/* AI & Data Quality Post */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                AI & Data Quality
              </h2>
              <div className="bg-white rounded-lg p-4 inline-block">
                <LinkedInPostGraphic
                  highlight="Intelligence lives downstream of quality"
                  title="AI will reward the companies who invest in data early."
                  subtitle="Prepare now, or fall behind."
                  footer=""
                  theme="light"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-slate-400 text-sm">
              To download: Right-click on the design above and "Save as PNG" or
              take a screenshot
            </p>
            <p className="text-slate-400 text-sm">
              To use in LinkedIn: Create a post → Add media → Upload the image
            </p>
          </div>
        </div>

        {/* LinkedIn Cover */}
        <div className="pt-8 border-t border-slate-800">
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
