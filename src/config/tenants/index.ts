import { TenantConfig } from "./types";
import { defaultConfig } from "./default";
import { momosConfig } from "./momos";
import { hangConfig } from "./hang";
import { toastConfig } from "./toast";
import { inceptaiConfig } from "./inceptai";
import { vapiConfig } from "./vapi";
import { biteConfig } from "./bite";
import { qualtricsConfig } from "./qualtrics";
import { solinkConfig } from "./solink";
import { hiautoConfig } from "./hiauto";

const tenantConfigs: Record<string, TenantConfig> = {
  default: defaultConfig,
  momos: momosConfig,
  hang: hangConfig,
  toast: toastConfig,
  inceptai: inceptaiConfig,
  vapi: vapiConfig,
  bite: biteConfig,
  qualtrics: qualtricsConfig,
  solink: solinkConfig,
  hiauto: hiautoConfig,
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

export { defaultConfig, momosConfig, hangConfig, toastConfig, inceptaiConfig, vapiConfig, biteConfig, qualtricsConfig, solinkConfig, hiautoConfig };
export * from "./types";
