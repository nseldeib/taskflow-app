import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  ListTodo,
  Sparkles,
  Star,
  Users,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Quote,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/30 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <header className="flex justify-between items-center py-6 relative">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">TaskFlow</h1>
              <Badge variant="secondary" className="text-xs">
                Beta
              </Badge>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" asChild size="lg">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="gradient" size="lg">
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </div>
        </header>

        <main>
          {/* Hero Section - Enhanced */}
          <section className="py-20 text-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="mb-6">
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Trusted by 10,000+ users worldwide
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 mb-6 leading-tight">
                Organize your work and life, effortlessly
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
                TaskFlow helps you manage projects, track tasks, and stay on top of your priorities with seamless
                workflow management.
              </p>

              <p className="text-lg text-muted-foreground/80 mb-12">
                Join thousands of professionals who've transformed their productivity
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-3 text-xl px-12 py-6 h-16 text-white font-bold shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-purple-700 hover:to-blue-700 border-2 border-purple-400/50 hover:border-purple-300/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Get Started Free <ArrowRight className="h-6 w-6" />
                </Link>

                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 h-16">
                  <Link href="#demo">
                    <Clock className="h-5 w-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2">4.9/5 from 2,000+ reviews</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Free forever plan available</span>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Features Section */}
          <section className="py-20 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything you need to stay
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  {" "}
                  organized
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to boost your productivity and keep your team in sync
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                    <ListTodo className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Smart Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Create and organize projects with intelligent categorization, custom workflows, and team
                    collaboration tools.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Team collaboration
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Advanced Task Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Track tasks with priorities, deadlines, and progress indicators. Never miss a deadline again.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Priority management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Deadline reminders
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Progress analytics
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-4">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Custom Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Personalize your workspace with custom categories, emojis, and workflows that match your style.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom categories
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Emoji support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Flexible layouts
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-20 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by teams worldwide</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of professionals boosting their productivity
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-muted-foreground">Tasks Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.9★</div>
                <div className="text-muted-foreground">User Rating</div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What our users say</h2>
              <p className="text-xl text-muted-foreground">Real feedback from real users</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "TaskFlow transformed how our team collaborates. We're 40% more productive since switching.",
                  author: "Sarah Chen",
                  role: "Product Manager at TechCorp",
                  avatar: "SC",
                },
                {
                  quote: "The best project management tool I've used. Clean interface and powerful features.",
                  author: "Michael Rodriguez",
                  role: "Freelance Designer",
                  avatar: "MR",
                },
                {
                  quote: "Simple yet powerful. TaskFlow helps me stay organized without overwhelming complexity.",
                  author: "Emily Johnson",
                  role: "Marketing Director",
                  avatar: "EJ",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-purple-500 mb-4" />
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to boost your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                {" "}
                productivity
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their workflow with TaskFlow
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-3 text-xl px-12 py-6 h-16 text-white font-bold shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-purple-700 hover:to-blue-700 border-2 border-purple-400/50 hover:border-purple-300/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Start Free Today <ArrowRight className="h-6 w-6" />
              </Link>

              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 h-16">
                <Link href="/login">
                  <Users className="h-5 w-5 mr-2" />
                  Sign In
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required • Free forever plan • Setup in 2 minutes
            </p>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="py-12 mt-20 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-lg">TaskFlow</span>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/help" className="hover:text-foreground transition-colors">
                Help
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">© 2024 TaskFlow. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
