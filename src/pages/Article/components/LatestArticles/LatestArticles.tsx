import { Typography } from '@/components/Typography/Typography'
import styles from './LatestArticles.module.scss'
import { FeedCardList } from '@/pages/Feed/components/FeedCardList/FeedCardList'
import { usePosts } from '@/pages/Feed/hooks/usePosts'
import type { IPost } from '@/interfaces/IPost'
import { useMemo } from 'react'

export function LatestArticles() {
  const { posts: postsRaw } = usePosts()
  const posts = useMemo(() => getLatestPosts(postsRaw), [postsRaw])

  return (
    <section className={styles.container}>
      <Typography variant='h3' asVariant={true}>
        Latest Articles
      </Typography>
      <FeedCardList posts={posts} />
    </section>
  )
}

function getLatestPosts(postsRaw: IPost[]) {
  if (!postsRaw) return []

  return postsRaw.slice(0, 3)
}
