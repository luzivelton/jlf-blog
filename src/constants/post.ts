import type { DropdownOption } from '@/components/Dropdown/DropdownInterfaces'
import type { _sortType } from '@/interfaces/IPost'

export const POSTS_SORT_OPTIONS: DropdownOption<_sortType>[] = [
  { label: 'Newest First', value: 'date_desc' },
  { label: 'Oldest First', value: 'date_asc' },
  { label: 'Title A-Z', value: 'title_asc' },
  { label: 'Title Z-A', value: 'title_desc' },
]

export const DEFAULT_POSTS_SORT_OPTION = POSTS_SORT_OPTIONS[0]
