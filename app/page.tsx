import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, ListTodo, Sparkles, Star, Users, Zap, Shield, Clock, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/80">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold">TaskFlow</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" asChild size="lg">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="gradient" size="lg">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </header>

        <main>
          {/* Hero Section - Enhanced */}
          <section className="py-20 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Social Proof Badge */}
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                Trusted by 10,000+ productive teams
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 leading-tight">
                Organize your work and life, effortlessly
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                TaskFlow helps you manage projects, track tasks, and stay on top of your priorities with seamless
                workflow management that actually works.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-3 text-xl px-12 py-6 h-16 text-white font-bold shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-purple-700 hover:to-blue-700 border-2 border-purple-400/50 hover:border-purple-300/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Get Started Free <ArrowRight className="h-6 w-6" />
                </Link>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 h-16">
                  <Link href="#demo">
                    <Zap className="h-5 w-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <p className="mt-6 text-sm text-muted-foreground">
                ✨ Free forever plan • 🚀 No credit card required • 🔒 Enterprise-grade security
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 border-y bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-purple-600">10K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-muted-foreground mt-1">Tasks Completed</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-muted-foreground mt-1">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-600">4.9★</div>
                  <div className="text-sm text-muted-foreground mt-1">User Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Features Section */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to stay organized</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Powerful features designed to help you and your team achieve more, faster.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10">
                  <CardContent className="p-0">
                    <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                      <ListTodo className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Project Management</h3>
                    <p className="text-muted-foreground">
                      Create and organize projects with intelligent categorization and automated workflows.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
                  <CardContent className="p-0">
                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Task Tracking</h3>
                    <p className="text-muted-foreground">
                      Track progress with priorities, due dates, and custom categories that adapt to your workflow.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10">
                  <CardContent className="p-0">
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                    <p className="text-muted-foreground">
                      Share projects, assign tasks, and collaborate seamlessly with your team in real-time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10">
                  <CardContent className="p-0">
                    <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
                    <p className="text-muted-foreground">
                      Set and track meaningful goals with progress visualization and milestone celebrations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/20 dark:to-indigo-900/10">
                  <CardContent className="p-0">
                    <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-indigo-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Time Management</h3>
                    <p className="text-muted-foreground">
                      Built-in time tracking and productivity insights to help you optimize your workflow.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-pink-50 to-pink-100/50 dark:from-pink-950/20 dark:to-pink-900/10">
                  <CardContent className="p-0">
                    <div className="h-12 w-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                    <p className="text-muted-foreground">
                      Enterprise-grade security with end-to-end encryption to keep your data safe and private.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="py-20 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by teams worldwide</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Join thousands of productive teams already using TaskFlow
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "TaskFlow transformed how our team collaborates. We're 40% more productive since switching."
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-muted-foreground">Product Manager, TechCorp</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "The best task management tool I've used. Simple, powerful, and actually enjoyable to use."
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold">Marcus Rodriguez</div>
                      <div className="text-muted-foreground">Freelance Designer</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "Finally, a tool that adapts to our workflow instead of forcing us to change how we work."
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold">Emily Watson</div>
                      <div className="text-muted-foreground">Startup Founder</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get organized?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of productive people who've transformed their workflow with TaskFlow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-3 text-xl px-12 py-6 h-16 text-white font-bold shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-purple-700 hover:to-blue-700 border-2 border-purple-400/50 hover:border-purple-300/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Start Free Today <ArrowRight className="h-6 w-6" />
                </Link>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 h-16">
                  <Link href="/login">Already have an account?</Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                No credit card required • Free forever plan • Cancel anytime
              </p>
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="border-t py-12 mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">TaskFlow</span>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Support
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-8">© 2024 TaskFlow. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
