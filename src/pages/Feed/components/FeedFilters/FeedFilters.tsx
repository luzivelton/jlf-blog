import type { DropdownOption } from '@/components/Dropdown/DropdownInterfaces'
import { DropdownButton } from '@/components/DropdownButton/DropdownButton'

export function FeedFilters() {}

FeedFilters.Inline = function FeedFiltersInline<T>() {
  const labelOfSelected = ''

  const categoryOptions: DropdownOption<string>[] = []

  function handleCategory() {}

  return (
    <div>
      <DropdownButton
        label='Category'
        labelOfSelected={labelOfSelected}
        onChange={handleCategory}
        options={categoryOptions}
        value={''}
      />
    </div>
  )
}
