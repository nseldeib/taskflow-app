import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, ListTodo, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-500" />
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

        <main className="py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Organize your work and life
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              TaskFlow helps you manage projects, track tasks, and stay on top of your priorities with seamless workflow
              management.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                asChild
                variant="gradient"
                className="text-lg px-12 py-6 h-16 text-white font-semibold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <ListTodo className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-medium">Project Management</h3>
              <p className="mt-2 text-muted-foreground">
                Create and organize projects to keep your work structured and focused.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium">Task Tracking</h3>
              <p className="mt-2 text-muted-foreground">
                Track important and planned tasks with priorities and categories.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-medium">Custom Categories</h3>
              <p className="mt-2 text-muted-foreground">Add emojis to categories and organize your tasks your way.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
