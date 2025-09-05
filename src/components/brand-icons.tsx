import Image from "next/image";
import {
  IconBrandDatabricks,
  IconBrandSnowflake,
  IconFolderUp,
} from "@tabler/icons-react";

// export const DataBricks = ({ className }: { className?: string }) => (
//   <Image
//     src="databricks.svg"
//     alt="DataBricks"
//     width={20}
//     height={20}
//     className={className}
//   />
// );

// export const Snowflake = ({ className }: { className?: string }) => (
//   <Image
//     src="/snowflake.svg"
//     alt="Snowflake"
//     width={20}
//     height={20}
//     className={className}
//   />
// );

export const Postgres = ({ className }: { className?: string }) => (
  <Image
    src="postgresql.svg"
    alt="Postgres"
    width={20}
    height={20}
    className={className}
  />
);

export const Aws = ({ className }: { className?: string }) => (
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
