import { FeedCardList } from '@/pages/Feed/components/FeedCardList/FeedCardList'
import { FeedFilters } from '@/pages/Feed/components/FeedFilters/FeedFilters'

export function Feed() {
  return (
    <section>
      <FeedFilters />
      <FeedCardList />
    </section>
  )
}
