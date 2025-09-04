import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureScreenshotProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FeatureScreenshot({
  src,
  alt,
  className,
}: FeatureScreenshotProps) {
  return (
    <div className={cn("mb-6", className)}>
      <div className="relative overflow-hidden rounded-md">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2970ff]/10 via-[#2970ff]/5 to-transparent rounded-md blur-lg"></div>

        {/* Screenshot container */}
        <div className="relative overflow-hidden rounded-md bg-white">
          {/* Screenshot container with responsive crop and zoom */}
          <div className="relative w-full h-0 pb-[60%]">
            <div className="absolute inset-0 transform scale-125 sm:scale-150 origin-top-left sm:-mt-6 overflow-hidden">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10 pointer-events-none rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
