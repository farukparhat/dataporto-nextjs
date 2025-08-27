import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Calendar, Users, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoSignupForm from "@/components/demo-signup-form";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="Dataporto"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-2xl font-bold text-slate-900">dataporto</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/#how-it-works"
              className="text-slate-600 hover:text-slate-900"
            >
              How it Works
            </Link>
            <Link
              href="/#before-after"
              className="text-slate-600 hover:text-slate-900"
            >
              Before & After
            </Link>
            <Link
              href="/#differentiators"
              className="text-slate-600 hover:text-slate-900"
            >
              Differentiators
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-6">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Your Demo
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          See DataPorto in Action
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Get a personalized walkthrough of how DataPorto can transform your
          data sharing operations. Our team will show you exactly how to
          eliminate custom pipelines and scale client data delivery.
        </p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Demo Form */}
          <div className="order-2 lg:order-1">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours to schedule your personalized demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DemoSignupForm />
              </CardContent>
            </Card>
          </div>

          {/* Demo Benefits */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What You&apos;ll See in Your Demo
                </h2>
                <p className="text-slate-600 mb-6">
                  Our 30-minute personalized demo will cover everything you need
                  to know about modernizing your data sharing operations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Live Platform Walkthrough
                    </h3>
                    <p className="text-sm text-slate-600">
                      See the DataPorto interface in action with real examples
                      of multi-platform data sharing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Governance & Security
                    </h3>
                    <p className="text-sm text-slate-600">
                      Learn how client-by-client access controls and data
                      masking work in practice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Client Onboarding Process
                    </h3>
                    <p className="text-sm text-slate-600">
                      Understand how easy it is to onboard new clients and
                      manage their data access.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Demo Agenda
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Platform overview and key features
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Multi-platform delivery demonstration
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Governance and security controls
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Client lifecycle management
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Q&A and next steps
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-slate-900 mb-2">
                  No Commitment Required
                </h3>
                <p className="text-sm text-slate-600">
                  This is a no-pressure demo focused on education and
                  understanding your specific use case. We&apos;ll help you
                  evaluate if DataPorto is the right solution for your data
                  sharing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/icon.png"
                alt="Dataporto"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-xl font-bold">dataporto</span>
            </div>
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
