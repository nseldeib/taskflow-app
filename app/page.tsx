import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Sparkles, Zap, Calendar, Star, Target, Layers } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Existing animated blobs with enhanced opacity */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl animate-pulse-glow delay-500"></div>

        {/* Multiple shimmering purple overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shimmer"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-400/8 to-transparent animate-shimmer-intense"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600/6 to-transparent animate-wave-shimmer"></div>

        {/* Enhanced floating shimmer elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-purple-300/25 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-purple-600/15 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-20 right-1/3 w-36 h-36 bg-purple-500/22 rounded-full blur-xl animate-float-reverse"></div>

        {/* Additional shimmer orbs */}
        <div className="absolute top-3/4 left-1/5 w-28 h-28 bg-purple-400/18 rounded-full blur-lg animate-float delay-1000"></div>
        <div className="absolute top-1/5 right-1/5 w-44 h-44 bg-purple-500/16 rounded-full blur-2xl animate-float-delayed delay-2000"></div>
        <div className="absolute bottom-1/3 right-2/3 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-float-reverse delay-1500"></div>

        {/* Enhanced diagonal shimmer lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-1/4 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent rotate-45 animate-shimmer-line"></div>
          <div className="absolute top-3/4 -right-1/4 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent -rotate-45 animate-shimmer-line-delayed"></div>
          <div className="absolute top-1/2 -left-1/3 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-500/35 to-transparent rotate-12 animate-shimmer-line delay-2000"></div>
          <div className="absolute top-1/6 -right-1/3 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -rotate-12 animate-shimmer-line-delayed delay-3000"></div>
        </div>

        {/* Radial shimmer effects */}
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gradient-radial from-purple-500/15 via-purple-400/8 to-transparent rounded-full animate-pulse-glow delay-500"></div>
        <div className="absolute bottom-1/3 right-1/2 w-80 h-80 bg-gradient-radial from-purple-600/12 via-purple-500/6 to-transparent rounded-full animate-pulse-glow delay-1500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">TaskFlow</h1>
                <Badge variant="secondary" className="text-xs bg-white/10 text-white/80 border-white/20">
                  Beta
                </Badge>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" asChild size="lg" className="text-white/80 hover:text-white hover:bg-white/10">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90 font-semibold">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Badge className="px-6 py-3 text-sm bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Project & Task Management
                </Badge>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                  Organize
                </span>
                <br />
                <span className="text-white/90">everything</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
                TaskFlow helps you manage projects, track tasks, and stay focused. Clean interface, powerful features,
                zero complexity.
              </p>

              <div className="flex justify-center mb-16">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-10 py-6 h-14 bg-white text-slate-900 hover:bg-white/90 font-semibold shadow-2xl"
                >
                  <Link href="/signup" className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-white/50">Free • No credit card • Ready in 30 seconds</p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Projects</h3>
                  <p className="text-white/70 leading-relaxed">
                    Organize work into projects. Add tasks, set priorities, track progress. Everything in one place.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Task Management</h3>
                  <p className="text-white/70 leading-relaxed">
                    Create tasks with due dates, priorities, and custom categories. Mark important items with stars.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Clean Interface</h3>
                  <p className="text-white/70 leading-relaxed">
                    Dark theme, responsive design, intuitive navigation. Works on desktop, tablet, and mobile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Feature Highlights */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  What's included
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-green-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white">Unlimited Everything</h3>
                      <p className="text-white/70">Projects, tasks, categories. No artificial limits or paywalls.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                      <Star className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white">Priority System</h3>
                      <p className="text-white/70">
                        Mark tasks as urgent, high, medium, or low priority. Star important items.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                      <Calendar className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white">Due Dates & Views</h3>
                      <p className="text-white/70">
                        Set deadlines, view today's tasks, this week's schedule, or all tasks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                      <Sparkles className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white">Daily Reflection</h3>
                      <p className="text-white/70">
                        End each day with a quick recap of accomplishments and mood tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-green-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                      <Layers className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white">Responsive Design</h3>
                      <p className="text-white/70">Beautiful dark theme that adapts to any screen size or device.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                      <Zap className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white">Fast & Secure</h3>
                      <p className="text-white/70">Built with modern tech. Your data is encrypted and stays private.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                  Ready to start?
                </span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Create your account and start organizing your projects in under a minute.
              </p>

              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-xl px-12 py-8 h-16 bg-white text-slate-900 hover:bg-white/90 font-bold shadow-2xl"
                >
                  <Link href="/signup" className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-white/50 mt-8">
                No credit card required • Free forever • Set up in 30 seconds
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 mt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">TaskFlow</span>
              <Badge variant="secondary" className="text-xs bg-white/10 text-white/60 border-white/20">
                v1.0
              </Badge>
            </div>

            <div className="flex gap-8 text-sm text-white/60">
              <Link href="/work-in-progress" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/work-in-progress" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/work-in-progress" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <p className="text-sm text-white/40">© 2024 TaskFlow</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
