import { clsx } from 'clsx'
import styles from './BackgroundEffect.module.scss'

export function BackgroundEffect() {
  return (
    <div className={styles.container}>
      <Circle variant='secondary' />
      <Circle variant='tertiary' />
      <Circle variant='primary' />
      <Circle variant='secondary' />
      <Circle variant='tertiary' />
    </div>
  )
}

type CircleProps = {
  variant: 'primary' | 'secondary' | 'tertiary'
}

function Circle({ variant }: CircleProps) {
  return <span className={clsx(styles.circle, styles[variant])} />
}
