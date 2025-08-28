import { Dropdown } from '@/components/Dropdown/Dropdown'
import { Typography } from '@/components/Typography/Typography'
import styles from './DropdownText.module.scss'

import { useIsMobile } from '@/hooks/useIsMobile'
import { useRef } from 'react'
import clsx from 'clsx'
import type { DropdownTextProps } from '@/components/DropdownText/DropdownTextInterfaces'

export function DropdownText<T>({
  children,
  valueIndex,
  valueLabel,
  Icon,
  className,
  classNames,
  ...props
}: DropdownTextProps<T>) {
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={containerRef} className={clsx(styles.container, className)}>
      <Dropdown
        container={containerRef.current}
        valueIndex={valueIndex}
        classNames={{
          trigger: clsx(styles.trigger, classNames?.trigger),
          panel: clsx(styles.panel, classNames?.panel),
        }}
        {...props}
      >
        {!isMobile && (
          <Typography variant='bodySmall' secondary={true} strong={true}>
            {children}
          </Typography>
        )}
        <button className={clsx(styles.content, classNames?.content)}>
          <Typography
            className={clsx(styles.text, classNames?.text)}
            variant='bodySmall'
          >
            {String(valueLabel)}
          </Typography>
          <Icon
            size='1rem'
            className={styles.icon}
            data-testid='dropdown-icon'
          />
        </button>
      </Dropdown>
    </div>
  )
}
