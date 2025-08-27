import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft, Anchor, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  "multi-platform-data-sharing-guide": {
    id: "multi-platform-data-sharing-guide",
    title: "The Complete Guide to Multi-Platform Data Sharing",
    excerpt:
      "Learn how to implement governed data sharing across Snowflake, Databricks, and sFTP without building custom pipelines for each client.",
    author: "DataPorto Team",
    date: "2025-08-15",
    readTime: "8 min read",
    category: "Best Practices",
    content: `
# The Complete Guide to Multi-Platform Data Sharing

In today's data-driven economy, enterprises need to share data with clients, partners, and subsidiaries across multiple platforms. However, building custom data pipelines for each client and platform combination quickly becomes a maintenance nightmare.

## The Challenge: Platform Fragmentation

Different clients have different preferences and infrastructure setups:

- **Enterprise clients** often prefer Snowflake Data Shares for real-time access
- **Analytics teams** may request Databricks Delta Sharing for ML workflows  
- **Legacy systems** still require traditional sFTP file transfers
- **Compliance requirements** vary by client and industry

Building separate infrastructure for each combination leads to:

- High engineering overhead
- Inconsistent security controls
- Difficult change management
- Operational complexity

## The Solution: Unified Control Plane

A modern approach consolidates all data sharing operations through a single control plane that:

### 1. Source Connectivity
Connect once to your primary data sources:
- Snowflake warehouses
- Databricks clusters
- PostgreSQL databases
- Cloud storage (S3, Azure Blob, GCS)

### 2. Governance Layer
Apply consistent controls across all destinations:
- Row-level security filters
- Column masking and encryption
- Client-specific access policies
- Audit logging and compliance tracking

### 3. Multi-Destination Delivery
Automatically deliver to client preferences:
- **Snowflake Data Share**: Zero-copy sharing for real-time access
- **Databricks Delta Sharing**: Native integration with Delta Lake
- **sFTP**: Encrypted file transfers for legacy systems

## Implementation Best Practices

### Security First
- Implement least-privilege access controls
- Use client-specific encryption keys
- Maintain detailed audit trails
- Regular access reviews and revocation

### Operational Excellence
- Automate schema change propagation
- Monitor delivery success rates
- Set up alerting for failures
- Document client-specific requirements

### Performance Optimization
- Cache frequently accessed datasets
- Optimize data formats per platform
- Implement intelligent retry logic
- Monitor and tune delivery times

## Getting Started

1. **Assess Current State**: Document existing data sharing arrangements
2. **Define Governance**: Establish security and compliance requirements
3. **Choose Architecture**: Select unified platform vs custom build
4. **Pilot Implementation**: Start with 2-3 key clients
5. **Scale Gradually**: Migrate remaining clients systematically

## Conclusion

Multi-platform data sharing doesn't have to mean multi-platform complexity. By implementing a unified control plane with proper governance, you can deliver data to any platform while maintaining security, compliance, and operational efficiency.

The key is to abstract away platform differences while preserving the native benefits each platform provides to your clients.
    `,
  },
  "enterprise-security-compliance": {
    id: "enterprise-security-compliance",
    title: "Enterprise Security and Compliance in Data Sharing",
    excerpt:
      "SOC 2, GDPR, and industry-specific compliance requirements for modern data sharing platforms.",
    author: "DataPorto Team",
    date: "2025-06-12",
    readTime: "9 min read",
    category: "Security",
    content: "",
  },
};

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Anchor className="h-6 w-6" />
            <span className="text-2xl font-bold text-slate-900">dataporto</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Back to Blog */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500">
              <Badge variant="outline">{post.category}</Badge>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <div className="ml-auto">
                <button className="flex items-center text-slate-600 hover:text-slate-900">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <Separator className="mb-8" />

          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Written by {post.author}
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-slate-600 hover:text-slate-900">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(blogPosts)
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <Badge variant="outline" className="mb-3 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read Article →
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <Anchor className="h-6 w-6" />
              <span className="text-xl font-bold">dataporto</span>
            </Link>
            <div className="flex space-x-6">
              <Link href="#" className="text-slate-400 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <p className="text-center text-slate-400">
            © 2025 Dataporto. All rights reserved. Multi‑Platform Data Sharing
            as a Service.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: "Blog Post Not Found | DataPorto",
    };
  }

  return {
    title: `${post.title} | DataPorto Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}
