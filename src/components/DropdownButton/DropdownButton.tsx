import { Dropdown } from '@/components/Dropdown/Dropdown'
import { Typography } from '@/components/Typography/Typography'
import { useRef } from 'react'
import clsx from 'clsx'
import styles from './DropdownButton.module.scss'
import type { DropdownButtonProps } from '@/components/DropdownButton/DropdownButtonInterfaces'
import { MdArrowDownward } from 'react-icons/md'
import { Button } from '@/components/Button/Button'

export function DropdownButton<T>({
  label,
  labelOfSelected,
  className,
  classNames,
  ...props
}: DropdownButtonProps<T>) {
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
          <Typography
            className={clsx(styles.text, classNames?.text)}
            variant='bodySmall'
          >
            {labelOfSelected ?? label}
          </Typography>
          <MdArrowDownward
            size='1rem'
            className={styles.icon}
            data-testid='dropdown-icon'
          />
        </Button>
      </Dropdown>
    </div>
  )
}
