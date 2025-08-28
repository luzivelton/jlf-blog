import type { MenuProps } from '@/components/Menu/MenuInterfaces'

type Option<T> = {
  label: string
  value: T
}

export type CommonProps<T> = Omit<MenuProps, 'onChange'> & {
  options?: Option<T>[]
  position?: 'left' | 'right'
}

export type DropdownProps<T> = CommonProps<T> & {
  options?: Option<T>[]
  onChange: (valueIndex: number) => void
  container?: HTMLElement | null
  valueIndex: number
  classNames?: {
    trigger?: string
    panel?: string
  }
}

export type PanelProps<T> = CommonProps<T> & {
  isOpen: boolean
  handleChange: (valueIndex: number) => void
}
