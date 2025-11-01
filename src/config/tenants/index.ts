import { TenantConfig } from "./types";
import { defaultConfig } from "./default";
import { momosConfig } from "./momos";

const tenantConfigs: Record<string, TenantConfig> = {
  default: defaultConfig,
  momos: momosConfig,
};

export function getTenantConfig(): TenantConfig {
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
  
  if (!tenantId) {
    return defaultConfig;
  }
  
  const config = tenantConfigs[tenantId.toLowerCase()];
  
  if (!config) {
    console.warn(`Tenant config not found for ID: ${tenantId}. Using default config.`);
    return defaultConfig;
  }
  
  return config;
}

export { defaultConfig, momosConfig };
export * from "./types";

