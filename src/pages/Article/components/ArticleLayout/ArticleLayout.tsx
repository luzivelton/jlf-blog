import { BlogLayout } from '@/layouts/BlogLayout/BlogLayout'
import { ArticleAside } from '@/pages/Article/components/ArticleAside/ArticleAside'
import styles from './ArticleLayout.module.scss'
import type { BlogLayoutProps } from '@/layouts/BlogLayout/BlogLayoutInterfaces'

type ArticleLayoutProps = BlogLayoutProps & {
  children: React.ReactNode
}

export function ArticleLayout({
  children,
  className,
  ...props
}: ArticleLayoutProps) {
  return (
    <BlogLayout classNames={{ content: styles.container }} {...props}>
      <ArticleAside />
      {children}
    </BlogLayout>
  )
}
