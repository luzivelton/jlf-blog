import { Typography } from '@/components/Typography/Typography'
import { ArticleAuthorAndDate } from '@/pages/Blog/components/ArticleAuthorAndDate/ArticleAuthorAndDate'
import { ArticleCategories } from '@/pages/Blog/components/ArticleCategories/ArticleCategories'
import { ArticleImage } from '@/pages/Blog/components/ArticleImage/ArticleImage'
import styles from './FeedCard.module.scss'
import { Link } from '@/components/Link/Link'

export function FeedCard() {
  return (
    <section className={styles.container}>
      <ArticleImage className={styles.image} />
      <div className={styles.content}>
        <ArticleAuthorAndDate variant='compact' />
        <Typography variant='h3' numberOfLines={2}>
          <Link className={styles.title} query={{ id: '12' }}>
            Title
          </Link>
        </Typography>
        <Typography
          className={styles.description}
          variant='body'
          numberOfLines={2}
        >
          <p>Description</p>
        </Typography>
        <ArticleCategories className={styles.categories} />
      </div>
    </section>
  )
}
