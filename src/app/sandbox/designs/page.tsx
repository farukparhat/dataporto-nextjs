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

          <div className="space-y-12">
            {/* Post 1: AI & Data Quality */}
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Post 1: AI & Data Quality
                </h2>
                <span className="text-xs text-slate-500 font-mono">
                  #ai-data-quality
                </span>
              </div>
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

            {/* Post 2: Data Warehouse OS */}
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Post 2: Data Warehouse as OS
                </h2>
                <span className="text-xs text-slate-500 font-mono">
                  #data-warehouse-os
                </span>
              </div>
              <div className="bg-white rounded-lg p-4 inline-block">
                <LinkedInPostGraphic
                  highlight="Snowflake ($80B) + Databricks ($100B)"
                  title="The Data Warehouse is the new enterprise operating system."
                  subtitle="Use this to your advantage."
                  footer=""
                  theme="light"
                  logos={[
                    { src: "/snowflake.svg", alt: "Snowflake" },
                    { src: "/databricks.svg", alt: "Databricks" },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-2 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
            <p className="text-slate-300 text-sm font-semibold">
              📥 How to download:
            </p>
            <p className="text-slate-400 text-sm">
              Right-click on the design above and "Save as PNG" or take a
              screenshot
            </p>
            <p className="text-slate-300 text-sm font-semibold mt-3">
              🎬 For GIF animation:
            </p>
            <p className="text-slate-400 text-sm">
              Use ScreenToGif, Gifox, or Kap to record 8-11 seconds of the
              animation
            </p>
          </div>
        </div>

        {/* LinkedIn Cover Variations */}
        <div className="pt-8 border-t border-slate-800">
          <h1 className="text-2xl font-bold text-white mb-2">
            LinkedIn Cover Designs
          </h1>
          <p className="text-slate-400 text-sm mb-6">
            Two variations optimized for different LinkedIn page types
          </p>

          <div className="space-y-8">
            {/* Company Page Cover */}
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Company Page Cover
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Dimensions: 1584px × 275px (~5.76:1 aspect ratio)
                  </p>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  #company-page
                </span>
              </div>
              <div className="bg-white rounded-lg p-4 inline-block">
                <LinkedInCover variant="company" />
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-slate-400 text-sm">
                  Use for: LinkedIn Company Pages
                </p>
              </div>
            </div>

            {/* Personal Profile Cover */}
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Personal Profile Cover
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Dimensions: 1584px × 396px (4:1 aspect ratio)
                  </p>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  #personal-profile
                </span>
              </div>
              <div className="bg-white rounded-lg p-4 inline-block">
                <LinkedInCover variant="personal" />
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-slate-400 text-sm">
                  Use for: LinkedIn Personal Profiles
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
            <p className="text-slate-300 text-sm font-semibold">
              📥 How to download:
            </p>
            <p className="text-slate-400 text-sm">
              Right-click on the design above and "Save as PNG" or take a
              screenshot
            </p>
            <p className="text-slate-300 text-sm font-semibold mt-3">
              📤 How to upload:
            </p>
            <p className="text-slate-400 text-sm">
              LinkedIn Profile/Page → Edit cover photo → Upload the image
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
