import { FiltersProvider } from '@/providers/FiltersProvider/FiltersProvider'
import { PostsProvider } from '@/providers/PostsProvider/PostsProvider'
import { SortProvider } from '@/providers/SortProvider/SortProvider'

type BlogProvidersProps = {
  children: React.ReactNode
}

export function BlogProviders({ children }: BlogProvidersProps) {
  return (
    <SortProvider>
      <FiltersProvider>
        <PostsProvider>{children}</PostsProvider>
      </FiltersProvider>
    </SortProvider>
  )
}
