import { Tag } from '@/components/Tag/Tag'
import styles from './ArticleCategories.module.scss'
import { clsx } from 'clsx'
import type { ICategory } from '@/interfaces/ICategories'

type ArticleCategoriesProps = React.HTMLAttributes<HTMLDivElement> & {
  categories: ICategory[]
}

export function ArticleCategories({
  className,
  categories,
  ...props
}: ArticleCategoriesProps) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {categories.map((category) => (
        <Tag key={category.id}>{category.name}</Tag>
      ))}
    </div>
  )
}
