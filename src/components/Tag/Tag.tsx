import clsx from 'clsx'
import styles from './Tag.module.scss'

type TagProps = React.HTMLAttributes<HTMLDivElement>

export function Tag({ className, ...props }: TagProps) {
  return <div className={clsx(styles.tag, className)} {...props} />
}
