import { LoadingScreen } from "@/components/loading-screen"

export default function TasksLoading() {
  return <LoadingScreen message="Loading your tasks..." variant="default" showProgress={true} />
}
