import clsx from 'clsx'
import styles from './Menu.module.scss'
import { Typography } from '@/components/Typography/Typography'
import { MdOutlineInfo } from 'react-icons/md'
import type { MenuProps } from './MenuInterfaces'

export function Menu({ className, ...props }: MenuProps) {
  return <div className={clsx(className)} {...props}></div>
}

Menu.Item = function MenuItem({
  className,
  children,
  ...props
}: React.JSX.IntrinsicElements['div']) {
  return (
    <div className={clsx(styles.item, className)} {...props}>
      {children}
    </div>
  )
}

Menu.Empty = function MenuEmpty() {
  return (
    <div className={styles.empty}>
      <MdOutlineInfo />
      <Typography variant='bodySmall'>No options found</Typography>
    </div>
  )
}
