import { Tag } from '@/components/Tag/Tag'
import styles from './ArticleCategories.module.scss'
import { clsx } from 'clsx'

type ArticleCategoriesProps = React.HTMLAttributes<HTMLDivElement>

export function ArticleCategories({
  className,
  ...props
}: ArticleCategoriesProps) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <Tag>Tag Content</Tag>
      <Tag>Tag Content</Tag>
    </div>
  )
}
