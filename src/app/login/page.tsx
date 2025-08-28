import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LogIn, Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Welcome Back to DataPorto
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Sign in to your DataPorto dashboard to manage your data sharing
          operations, monitor client deliveries, and configure your platform
          settings.
        </p>
      </section>

      {/* Login Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your DataPorto account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      className="h-11 w-full rounded-md border pl-10 pr-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      className="h-11 w-full rounded-md border pl-10 pr-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:text-sm"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-600">Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Sign In</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <Separator className="my-6" />

              <div className="text-center">
                <p className="text-sm text-slate-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/demo"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Schedule a demo
                  </Link>{" "}
                  to get started.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
