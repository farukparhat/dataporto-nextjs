import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowRight, Anchor } from "lucide-react";
import Link from "next/link";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: "multi-platform-data-sharing-guide",
    title: "The Complete Guide to Multi-Platform Data Sharing",
    excerpt:
      "Learn how to implement governed data sharing across Snowflake, Databricks, and sFTP without building custom pipelines for each client.",
    author: "DataPorto Team",
    date: "2025-08-15",
    readTime: "8 min read",
    category: "Best Practices",
    featured: true,
  },
  {
    id: "data-governance-at-scale",
    title: "Data Governance at Scale: Client-by-Client Security Controls",
    excerpt:
      "Implement granular data masking, row-level security, and compliance controls that scale with your client base.",
    author: "DataPorto Team",
    date: "2025-08-08",
    readTime: "6 min read",
    category: "Governance",
    featured: false,
  },
  {
    id: "snowflake-vs-databricks-sharing",
    title:
      "Snowflake Data Share vs Databricks Delta Sharing: When to Use Which",
    excerpt:
      "A comprehensive comparison of native sharing capabilities and how to choose the right approach for your clients.",
    author: "DataPorto Team",
    date: "2025-07-28",
    readTime: "10 min read",
    category: "Technical",
    featured: false,
  },
  {
    id: "replacing-custom-pipelines",
    title:
      "Case Study: Replacing 50+ Custom Pipelines with a Single Control Plane",
    excerpt:
      "How a Fortune 500 company reduced engineering overhead by 80% while improving data delivery reliability.",
    author: "DataPorto Team",
    date: "2025-07-18",
    readTime: "7 min read",
    category: "Case Study",
    featured: false,
  },
  {
    id: "api-first-data-sharing",
    title: "Building API-First Data Sharing Workflows",
    excerpt:
      "Automate client onboarding, schema updates, and access revocation with programmatic control.",
    author: "DataPorto Team",
    date: "2025-06-25",
    readTime: "5 min read",
    category: "Technical",
    featured: false,
  },
  {
    id: "enterprise-security-compliance",
    title: "Enterprise Security and Compliance in Data Sharing",
    excerpt:
      "SOC 2, GDPR, and industry-specific compliance requirements for modern data sharing platforms.",
    author: "DataPorto Team",
    date: "2025-06-12",
    readTime: "9 min read",
    category: "Security",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-slate-50">
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
            <Link href="/blog" className="text-slate-900 font-medium">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Data Sharing Insights & Best Practices
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Expert guidance on modern data sharing, governance, and
              multi-platform delivery
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                Featured
              </Badge>
              <Card className="overflow-hidden border-l-4 border-l-blue-600">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-500">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      <Separator className="bg-slate-200" />

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Latest Articles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-slate-500">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <CardTitle className="text-xl mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </CardTitle>

                    <CardDescription className="mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Stay Updated on Data Sharing Best Practices
            </h3>
            <p className="text-slate-600 mb-6">
              Get the latest insights on data governance, multi-platform
              sharing, and enterprise data strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
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
