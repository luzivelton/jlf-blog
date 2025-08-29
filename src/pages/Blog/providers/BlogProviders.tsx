import { PostsProvider } from '@/providers/PostsProvider/PostsProvider'

type BlogProvidersProps = {
  children: React.ReactNode
}

export function BlogProviders({ children }: BlogProvidersProps) {
  return <PostsProvider>{children}</PostsProvider>
}
