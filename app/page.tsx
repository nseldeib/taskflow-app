import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle, Sparkles, Zap, Heart, Coffee, Lightbulb, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/10">
      <div className="container mx-auto px-4 py-8">
        {/* Clean Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">TaskFlow</h1>
              <Badge variant="outline" className="text-xs mt-1">
                <Heart className="h-3 w-3 mr-1" />
                Made with care
              </Badge>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" asChild size="lg">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="gradient" size="lg">
              <Link href="/signup">Try it out</Link>
            </Button>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="py-20 text-center relative">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="mb-8">
                <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
                  <Coffee className="h-4 w-4 mr-2" />
                  Built by a developer who loves organization
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 mb-6 leading-tight">
                Finally, a task manager that just works
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                I built TaskFlow because I was tired of overcomplicated project management tools. Sometimes you just
                want to organize your tasks without the bloat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-3 text-xl px-12 py-6 h-16 text-white font-bold shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-purple-700 hover:to-blue-700 border-2 border-purple-400/50 hover:border-purple-300/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Give it a try <ArrowRight className="h-6 w-6" />
                </Link>

                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 h-16">
                  <Link href="/login">
                    <Zap className="h-5 w-5 mr-2" />
                    Already have an account?
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Free to use • No credit card needed • Takes 30 seconds to set up
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Built for
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  {" "}
                  real people
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No enterprise nonsense. Just the features you actually need to stay organized.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent group-hover:from-purple-500/10 transition-all duration-300"></div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Projects that make sense</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Organize your work into projects without overthinking it. Add tasks, set priorities, and actually
                    get things done.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent group-hover:from-blue-500/10 transition-all duration-300"></div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Tasks with personality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Add emojis, set due dates, mark things as important. Your tasks should feel as unique as you are.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent group-hover:from-indigo-500/10 transition-all duration-300"></div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Actually intuitive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    No training videos needed. If you can use a smartphone, you can use TaskFlow. It just works the way
                    you'd expect.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Personal Touch Section */}
          <section className="py-20 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <Coffee className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why I built this</h2>
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  I'm a developer who tried every task manager out there. They were either too simple (just lists) or
                  way too complicated (enterprise features I'll never use).
                </p>
                <p>
                  So I built TaskFlow for people like me - developers, designers, freelancers, students - anyone who
                  wants to stay organized without the corporate overhead.
                </p>
                <p className="text-foreground font-medium">
                  It's free, it's fast, and it doesn't try to be everything to everyone. Just a really good task
                  manager.
                </p>
              </div>
            </div>
          </section>

          {/* Simple Features List */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What you get</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Unlimited projects & tasks</h3>
                      <p className="text-muted-foreground">
                        No artificial limits. Create as many projects as you need.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Dark mode (obviously)</h3>
                      <p className="text-muted-foreground">Because who wants to burn their retinas at 2am?</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Works on everything</h3>
                      <p className="text-muted-foreground">
                        Desktop, mobile, tablet - it adapts to whatever you're using.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Priority & due dates</h3>
                      <p className="text-muted-foreground">Mark things as urgent, set deadlines, stay on track.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Daily reflection</h3>
                      <p className="text-muted-foreground">End each day by reflecting on what you accomplished.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">No ads, no tracking</h3>
                      <p className="text-muted-foreground">Your data stays yours. No creepy analytics or ads.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                {" "}
                organized
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Give TaskFlow a try. If you don't like it, no hard feelings - but I think you will.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-3 text-xl px-12 py-6 h-16 text-white font-bold shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 hover:from-purple-600 hover:via-purple-700 hover:to-blue-700 border-2 border-purple-400/50 hover:border-purple-300/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Start organizing <ArrowRight className="h-6 w-6" />
            </Link>

            <p className="text-sm text-muted-foreground mt-6">
              Free forever • No credit card • Set up in under a minute
            </p>
          </section>
        </main>

        {/* Simple Footer */}
        <footer className="py-12 mt-20 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-lg">TaskFlow</span>
              <Badge variant="outline" className="text-xs ml-2">
                v1.0
              </Badge>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="mailto:hello@taskflow.dev" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 inline text-red-500" /> by an indie developer
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
