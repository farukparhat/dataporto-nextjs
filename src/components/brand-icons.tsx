import Image from "next/image";
import {
  IconBrandDatabricks,
  IconBrandSnowflake,
  IconFolderUp,
} from "@tabler/icons-react";

export const DataportoIcon = ({ className }: { className?: string }) => (
  <Image
    src="/icon-transparent-white.png"
    alt="dataporto"
    width={20}
    height={20}
    className={className}
  />
);

export const DataBricksSvg = ({ className }: { className?: string }) => (
  <Image
    src="databricks.svg"
    alt="DataBricks"
    width={20}
    height={20}
    className={className}
  />
);

export const SnowflakeSvg = ({ className }: { className?: string }) => (
  <Image
    src="/snowflake.svg"
    alt="Snowflake"
    width={20}
    height={20}
    className={className}
  />
);

export const PostgresSvg = ({ className }: { className?: string }) => (
  <Image
    src="/postgresql.svg"
    alt="Postgres"
    width={20}
    height={20}
    className={className}
  />
);

export const AwsSvg = ({ className }: { className?: string }) => (
  <Image
    src="/aws.svg"
    alt="Aws"
    width={20}
    height={20}
    className={className}
  />
);

// Reusable Tabler Icon Components for consistent usage across the app
interface IconProps {
  className?: string;
  size?: number;
}

export const SnowflakeIcon = ({ className = "h-8 w-8", size }: IconProps) => (
  <IconBrandSnowflake
    className={className}
    style={{ color: "#2cb6e8" }}
    size={size}
  />
);

export const DatabricksIcon = ({ className = "h-8 w-8", size }: IconProps) => (
  <IconBrandDatabricks
    className={className}
    style={{ color: "#FF3621" }}
    size={size}
  />
);

export const SftpIcon = ({ className = "h-8 w-8", size }: IconProps) => (
  <IconFolderUp
    className={className}
    style={{ color: "#22c55e" }}
    size={size}
  />
);

// Company/Brand logo components
export const DHLIcon = ({ className }: { className?: string }) => (
  <Image
    src="/brands/dhl.svg"
    alt="DHL"
    width={20}
    height={20}
    className={className}
  />
);

export const McDonaldsIcon = ({ className }: { className?: string }) => (
  <Image
    src="/brands/mcdonalds.svg"
    alt="McDonald's"
    width={20}
    height={20}
    className={className}
  />
);

export const MariottIcon = ({ className }: { className?: string }) => (
  <Image
    src="/brands/mariott.svg"
    alt="Mariott"
    width={20}
    height={20}
    className={className}
  />
);
