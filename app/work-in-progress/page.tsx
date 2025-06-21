import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Construction, Clock, Sparkles } from "lucide-react"

export default function WorkInProgress() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center backdrop-blur-sm">
                <Construction className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                Work in Progress
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <Clock className="h-5 w-5" />
              <span className="text-lg">This page is coming soon!</span>
            </div>

            <p className="text-xl text-white/70 leading-relaxed">
              We're working hard to bring you this feature. In the meantime, explore the rest of TaskFlow and start
              organizing your projects.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-white/50 bg-white/5 rounded-lg p-4 border border-white/10">
              <Sparkles className="h-4 w-4" />
              <span>Check back soon for updates!</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90 font-semibold">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
