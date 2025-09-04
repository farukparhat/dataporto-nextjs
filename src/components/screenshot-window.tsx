import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScreenshotWindowProps {
  src: string;
  alt: string;
  url: string;
  urlShort: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  overlayIntensity?: "light" | "medium";
}

export default function ScreenshotWindow({
  src,
  alt,
  url,
  urlShort,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px",
  overlayIntensity = "light",
}: ScreenshotWindowProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden backdrop-blur-sm",
        className
      )}
    >
      {/* Browser chrome - hidden on mobile */}
      <div className="hidden sm:block p-2 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="flex-1 bg-white rounded-md h-6 mx-4 flex items-center px-3">
            <div className="w-3 h-3 bg-gray-300 rounded-sm mr-2"></div>
            <div className="text-xs text-gray-500 font-mono hidden md:block">
              {url}
            </div>
            <div className="text-xs text-gray-500 font-mono md:hidden">
              {urlShort}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className="w-full h-auto"
          priority={priority}
          sizes={sizes}
        />
        {/* Overlay gradient for depth */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t via-transparent to-transparent pointer-events-none",
            overlayIntensity === "light" ? "from-black/5" : "from-black/10"
          )}
        ></div>
      </div>
    </div>
  );
}
