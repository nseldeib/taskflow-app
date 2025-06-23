import { LoadingScreen } from "@/components/loading-screen"

export default function LoginLoading() {
  return <LoadingScreen message="Preparing sign in..." variant="minimal" showProgress={false} />
}
