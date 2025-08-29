import { Typography } from '@/components/Typography/Typography'
import styles from './LatestArticles.module.scss'
import { FeedCardList } from '@/pages/Feed/components/FeedCardList/FeedCardList'
import { usePosts } from '@/pages/Feed/hooks/usePosts'
import type { IPost } from '@/interfaces/IPost'
import { useMemo } from 'react'

interface LatestArticlesProps {
  articleId: string
}

export function LatestArticles({ articleId }: LatestArticlesProps) {
  const { posts: postsRaw } = usePosts()
  const posts = useMemo(
    () => getLatestUniqueArticles(postsRaw, articleId),
    [postsRaw, articleId]
  )

  return (
    <section className={styles.container}>
      <Typography variant='h3' asVariant={true}>
        Latest Articles
      </Typography>
      <FeedCardList posts={posts} />
    </section>
  )
}

function getLatestUniqueArticles(
  postsRaw: IPost[],
  currentArticleId: string
): IPost[] {
  if (!postsRaw) return []

  const result: IPost[] = []
  for (const post of postsRaw) {
    if (post.id !== currentArticleId) {
      result.push(post)
      if (result.length === 3) break
    }
  }
  return result
}
