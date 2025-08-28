import type { DropdownProps } from '@/components/Dropdown/DropdownInterfaces'
import type { IconType } from 'react-icons'

export type DropdownTextProps<T> = Omit<DropdownProps<T>, 'classNames'> & {
  Icon: IconType
  valueLabel: string
  classNames?: {
    content?: string
    text?: string
  }
}
