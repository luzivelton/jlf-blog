import { FeedCard } from '@/pages/Feed/components/FeedCard/FeedCard'
import styles from './FeedCardList.module.scss'

export function FeedCardList() {
  return (
    <section className={styles.list}>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </section>
  )
}
