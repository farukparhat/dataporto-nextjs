import { multiPlatformDataSharingGuide } from "./multi-platform-data-sharing-guide";
import { enterpriseSecurityCompliance } from "./enterprise-security-compliance";

export const blogPosts = {
  [multiPlatformDataSharingGuide.id]: multiPlatformDataSharingGuide,
  [enterpriseSecurityCompliance.id]: enterpriseSecurityCompliance,
};

export type BlogPost = typeof multiPlatformDataSharingGuide;

export const getAllBlogPosts = () => Object.values(blogPosts);

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts[id as keyof typeof blogPosts];
};

export const getFeaturedPost = (): BlogPost | undefined => {
  return Object.values(blogPosts).find((post) => post.featured);
};

export const getRegularPosts = (): BlogPost[] => {
  return Object.values(blogPosts).filter((post) => !post.featured);
};
