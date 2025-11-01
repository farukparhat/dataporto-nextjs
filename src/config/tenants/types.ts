export interface Dataset {
  id: string;
  name: string;
  description: string;
  tables: string[];
  size: string;
  rows: string;
}

export interface TenantBranding {
  primaryColor?: string;
  accentColor?: string;
}

export interface TenantUser {
  name: string;
  email: string;
}

export interface TenantConfig {
  id: string;
  name: string;
  logo: string;
  datasets: Dataset[];
  branding?: TenantBranding;
  user?: TenantUser;
}
