import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { useRef } from 'react'
import { SearchFeed } from '@/layouts/BlogLayout/components/SearchFeed/SearchFeed'

type BlogLayoutProps = {
  children: React.ReactNode
}

export function BlogLayout({ children }: BlogLayoutProps) {
  const topbarRef = useRef<HTMLElement>(null)

  return (
    <AppLayout>
      <AppLayout.Topbar ref={topbarRef}>
        <SearchFeed container={topbarRef} />
      </AppLayout.Topbar>
      <AppLayout.Content>{children}</AppLayout.Content>
    </AppLayout>
  )
}
