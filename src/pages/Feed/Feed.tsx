import { FeedAside } from '@/pages/Feed/components/FeedAside/FeedAside'
import { FeedCardList } from '@/pages/Feed/components/FeedCardList/FeedCardList'
import { FeedTopbar } from '@/pages/Feed/components/FeedTopbar/FeedTopbar'
import styles from './Feed.module.scss'
import { usePosts } from '@/pages/Feed/hooks/usePosts'
import { BlogLayout } from '@/layouts/BlogLayout/BlogLayout'

export function Feed() {
  const { posts } = usePosts()

  return (
    <BlogLayout>
      <FeedAside />
      <div className={styles.feed}>
        <FeedTopbar />
        <FeedCardList posts={posts} />
      </div>
    </BlogLayout>
  )
}
