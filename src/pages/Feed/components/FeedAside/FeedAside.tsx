import { Typography } from '@/components/Typography/Typography'
import { useIsMobile } from '@/hooks/useIsMobile'
import { FeedFilters } from '@/pages/Feed/components/FeedFilters/FeedFilters'

export function FeedAside() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return null
  }

  return (
    <aside>
      <Typography variant='h1' asVariant={true}>
        DWS Blog
      </Typography>
      <FeedFilters variant='panel' />
    </aside>
  )
}
