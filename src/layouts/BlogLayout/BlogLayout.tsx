import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { useRef } from 'react'
import { SearchFeed } from '@/layouts/BlogLayout/components/SearchFeed/SearchFeed'
import type { AppLayoutProps } from '@/layouts/AppLayout/AppLayoutInterfaces'

type BlogLayoutProps = AppLayoutProps & {
  children: React.ReactNode
}

export function BlogLayout({ children, ...props }: BlogLayoutProps) {
  const topbarRef = useRef<HTMLElement>(null)

  return (
    <AppLayout {...props}>
      <AppLayout.Topbar ref={topbarRef}>
        <SearchFeed container={topbarRef} />
      </AppLayout.Topbar>
      <AppLayout.Content>{children}</AppLayout.Content>
    </AppLayout>
  )
}
