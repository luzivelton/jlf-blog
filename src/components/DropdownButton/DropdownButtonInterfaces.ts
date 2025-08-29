import type { DropdownProps } from '@/components/Dropdown/DropdownInterfaces'

export type DropdownButtonProps<T> = Omit<
  DropdownProps<T>,
  'classNames' | 'children'
> & {
  label: string
  labelOfSelected: string | undefined
  classNames?: {
    content?: string
    text?: string
  } & Partial<DropdownProps<T>['classNames']>
}
