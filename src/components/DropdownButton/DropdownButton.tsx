import { Dropdown } from '@/components/Dropdown/Dropdown'
import { useRef } from 'react'
import clsx from 'clsx'
import styles from './DropdownButton.module.scss'
import type { DropdownButtonProps } from '@/components/DropdownButton/DropdownButtonInterfaces'
import { Button } from '@/components/Button/Button'
import { FaChevronDown } from 'react-icons/fa6'

export function DropdownButton<T, M extends boolean | undefined>({
  label,
  labelOfSelected,
  className,
  classNames,
  ...props
}: DropdownButtonProps<T, M>) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={containerRef} className={clsx(styles.container, className)}>
      <Dropdown
        container={containerRef.current}
        classNames={{
          trigger: clsx(styles.trigger, classNames?.trigger),
          panel: clsx(styles.panel, classNames?.panel),
        }}
        {...props}
      >
        <Button
          variant='secondary'
          className={clsx(styles.content, classNames?.content)}
        >
          {labelOfSelected || label}
          <FaChevronDown
            size='1rem'
            className={styles.icon}
            data-testid='dropdown-icon'
          />
        </Button>
      </Dropdown>
    </div>
  )
}
