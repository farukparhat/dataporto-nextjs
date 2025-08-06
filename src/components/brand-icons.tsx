import Image from "next/image";

export const DataBricks = ({ className }: { className?: string }) => (
  <Image
    src="databricks.svg"
    alt="DataBricks"
    width={20}
    height={20}
    className={className}
  />
);

export const Snowflake = ({ className }: { className?: string }) => (
  <Image
    src="snowflake.svg"
    alt="Snowflake"
    width={20}
    height={20}
    className={className}
  />
);

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
  <Image src="aws.svg" alt="Aws" width={20} height={20} className={className} />
);
