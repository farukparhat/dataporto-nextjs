import { TenantConfig } from "./types";
import { defaultConfig } from "./default";
import { momosConfig } from "./momos";
import { hangConfig } from "./hang";
import { toastConfig } from "./toast";

const tenantConfigs: Record<string, TenantConfig> = {
  default: defaultConfig,
  momos: momosConfig,
  hang: hangConfig,
  toast: toastConfig,
};

export function getTenantConfig(): TenantConfig {
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

  if (!tenantId) {
    return defaultConfig;
  }

  const config = tenantConfigs[tenantId.toLowerCase()];

  if (!config) {
    console.warn(
      `Tenant config not found for ID: ${tenantId}. Using default config.`
    );
    return defaultConfig;
  }

  return config;
}

export { defaultConfig, momosConfig, hangConfig, toastConfig };
export * from "./types";
