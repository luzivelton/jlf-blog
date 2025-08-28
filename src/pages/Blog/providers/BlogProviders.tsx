import { PostsProvider } from '@/providers/components/PostsProvider'

type BlogProvidersProps = {
  children: React.ReactNode
}

export function BlogProviders({ children }: BlogProvidersProps) {
  return <PostsProvider>{children}</PostsProvider>
}
