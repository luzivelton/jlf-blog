import { useState } from 'react'
import styles from './SearchFeed.module.scss'
import { Search } from '@/components/Search/Search'

interface SearchFeedProps {
  container: React.RefObject<HTMLElement | null>
}

export function SearchFeed({ container }: SearchFeedProps) {
  const [value, setValue] = useState<string>('')

  return (
    <Search
      container={container}
      classNames={{ contentFocused: styles.searchFocused }}
      placeholder='Search'
      value={value}
      onChange={(val) => setValue(val)}
    />
  )
}
