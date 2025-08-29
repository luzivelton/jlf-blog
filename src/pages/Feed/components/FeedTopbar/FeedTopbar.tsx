import { useIsMobile } from '@/hooks/useIsMobile'
import { FeedFilters } from '@/pages/Feed/components/FeedFilters/FeedFilters'
import { FeedSort } from '@/pages/Feed/components/FeedSort/FeedSort'
import styles from './FeedTopbar.module.scss'

export function FeedTopbar() {
  const isMobile = useIsMobile()

  return (
    <div className={styles.feedTopbar}>
      {isMobile && <FeedFilters.Inline />}
      <FeedSort />
    </div>
  )
}
