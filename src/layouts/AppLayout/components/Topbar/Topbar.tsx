import { Logo } from '@/layouts/AppLayout/components/Logo/Logo'
import styles from './Topbar.module.scss'

interface TopbarProps {
  children: React.ReactNode
  ref?: React.Ref<HTMLElement>
}

export function Topbar({ children, ref }: TopbarProps) {
  return (
    <header className={styles.topbar} ref={ref}>
      <div className={styles.content}>
        <Logo />
        {children}
      </div>
    </header>
  )
}
