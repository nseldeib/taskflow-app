import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderKanban } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description?: string
    created_at: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const createdDate = new Date(project.created_at).toLocaleDateString()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center">
            <FolderKanban className="h-4 w-4 text-purple-500" />
          </div>
          <CardTitle className="text-lg">{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-muted-foreground text-sm line-clamp-2 min-h-[40px]">
          {project.description || "No description provided."}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Badge variant="outline" className="text-xs">
            Created {createdDate}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/dashboard/projects/${project.id}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
