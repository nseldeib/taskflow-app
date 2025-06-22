import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, Construction } from "lucide-react"

export default function WorkInProgressPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Card className="w-[90%] max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Construction className="h-6 w-6 mr-2" />
            Work In Progress
          </CardTitle>
          <CardDescription>This page is currently under construction. Please check back later.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <p className="text-muted-foreground text-sm text-center mb-4">
            We are working hard to bring you the best possible experience.
          </p>
          <Button asChild className="w-full" variant="gradient">
            <Link href="/login">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

import Link from "next/link"
