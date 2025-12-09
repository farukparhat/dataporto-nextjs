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

export const SnowflakeIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <Image
    src="/snowflake.svg"
    alt="Snowflake"
    width={32}
    height={32}
    className={className}
  />
);

export const DatabricksIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <Image
    src="/databricks.svg"
    alt="Databricks"
    width={32}
    height={32}
    className={className}
  />
);

export const SftpIcon = ({ className = "h-8 w-8", size }: IconProps) => (
  <IconFolderUp
    className={className}
    style={{ color: "#22c55e" }}
    size={size}
  />
);

export const BigQueryIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <Image
    src="/big-query.svg"
    alt="BigQuery"
    width={32}
    height={32}
    className={className}
  />
);

export const RedshiftIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <svg
    viewBox="0 0 1615 1783.7"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m807.5 1363.8 678.3 161.5v-1270.5l-678.3 161.5z" fill="#205b97" />
    <path
      d="m1485.8 254.8 129.2 64.6v1141.3l-129.2 64.6zm-678.3 1109-678.3 161.5v-1270.5l678.3 161.5z"
      fill="#5193ce"
    />
    <path d="m129.2 254.8-129.2 64.6v1141.3l129.2 64.6z" fill="#205b97" />
    <path
      d="m979.8 1783.7 258.4-129.2v-1525.3l-258.4-129.2-79 847z"
      fill="#5193ce"
    />
    <path
      d="m635.2 1783.7-258.4-129.2v-1525.3l258.4-129.2 79 847z"
      fill="#205b97"
    />
    <path d="m635.2 0h348.1v1780.1h-348.1z" fill="#2e73b7" />
  </svg>
);

export const FabricIcon = ({ className = "h-8 w-8" }: IconProps) => (
  <Image
    src="/microsoft-fabric.svg"
    alt="Microsoft Fabric"
    width={32}
    height={32}
    className={className}
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
