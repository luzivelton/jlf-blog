import { Topbar } from '@/layouts/AppLayout/components/Topbar/Topbar'
import styles from './AppLayout.module.scss'

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return <section className={styles.container}>{children}</section>
}

type ContentProps = {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  return <main className={styles.content}>{children}</main>
}

AppLayout.Topbar = Topbar
AppLayout.Content = Content
