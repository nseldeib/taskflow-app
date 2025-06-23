import { LoadingScreen } from "@/components/loading-screen"

export default function ProjectsLoading() {
  return <LoadingScreen message="Loading your projects..." variant="default" showProgress={true} />
}
