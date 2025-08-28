import { BlogLayout } from '@/layouts/BlogLayout/BlogLayout'
import { FeedAside } from '@/pages/Feed/components/FeedAside/FeedAside'
import { FeedCardList } from '@/pages/Feed/components/FeedCardList/FeedCardList'
import { FeedTopbar } from '@/pages/Feed/components/FeedTopbar/FeedTopbar'
import styles from './Feed.module.scss'

export function Feed() {
  return (
    <BlogLayout>
      <FeedAside />
      <div className={styles.feed}>
        <FeedTopbar />
        <FeedCardList />
      </div>
    </BlogLayout>
  )
}
