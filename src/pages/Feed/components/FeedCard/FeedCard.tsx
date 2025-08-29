import { Typography } from '@/components/Typography/Typography'
import { ArticleAuthorAndDate } from '@/pages/Blog/components/ArticleAuthorAndDate/ArticleAuthorAndDate'
import { ArticleCategories } from '@/pages/Blog/components/ArticleCategories/ArticleCategories'
import { ArticleImage } from '@/pages/Blog/components/ArticleImage/ArticleImage'
import styles from './FeedCard.module.scss'
import { Link } from '@/components/Link/Link'
import type { IPost } from '@/interfaces/IPost'
import clsx from 'clsx'
import { memo } from 'react'

type FeedCardProps = React.JSX.IntrinsicElements['section'] & IPost

const FeedCardInner = ({
  id,
  author,
  authorId,
  categories,
  content,
  createdAt,
  thumbnail_url,
  title,
  updatedAt,
  className,
  ...props
}: FeedCardProps) => {
  return (
    <article className={clsx(styles.container, className)} {...props}>
      <ArticleImage className={styles.image} src={thumbnail_url} alt={title} />
      <div className={styles.content}>
        <ArticleAuthorAndDate.Compact
          authorName={author.name}
          createdAt={createdAt}
        />
        <Typography variant='h3' asVariant={true} numberOfLines={2}>
          <Link className={styles.title} query={{ id }}>
            {title}
          </Link>
        </Typography>
        <Typography
          className={styles.description}
          variant='bodySmall'
          numberOfLines={2}
        >
          <p>{content}</p>
        </Typography>
        <ArticleCategories
          className={styles.categories}
          categories={categories}
        />
      </div>
    </article>
  )
}

export const FeedCard = memo(FeedCardInner)
