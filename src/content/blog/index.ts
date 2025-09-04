import React from "react";
import { multiPlatformDataSharingGuide } from "./multi-platform-data-sharing-guide";
import { enterpriseSecurityCompliance } from "./enterprise-security-compliance";
import { howToShareDataWithClients } from "./how-to-share-data-with-clients";
import { snowflakeFromDatabricks } from "./snowflake-data-shares-from-databricks";

export const blogPosts = {
  [multiPlatformDataSharingGuide.id]: multiPlatformDataSharingGuide,
  [enterpriseSecurityCompliance.id]: enterpriseSecurityCompliance,
  [howToShareDataWithClients.id]: howToShareDataWithClients,
  [snowflakeFromDatabricks.id]: snowflakeFromDatabricks,
};

export type BlogPost = typeof multiPlatformDataSharingGuide & {
  headerComponent?: React.ComponentType;
};

export const getAllBlogPosts = () => Object.values(blogPosts);

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts[id as keyof typeof blogPosts];
};

export const getFeaturedPost = (): BlogPost | undefined => {
  return Object.values(blogPosts).find(post => post.featured);
};

export const getRegularPosts = (): BlogPost[] => {
  return Object.values(blogPosts).filter(post => !post.featured);
};
