import { Button } from '@/components/Button/Button'
import { MdArrowBack } from 'react-icons/md'
import styles from './ArticleAside.module.scss'
import { Link } from '@/components/Link/Link'

export function ArticleAside() {
  return (
    <aside>
      <Button
        asChild={true}
        className={styles.backButton}
        variant='secondary'
        small={true}
      >
        <Link query={{ id: null }}>
          <MdArrowBack className={styles.backIcon} size='1.25rem' />
          Back
        </Link>
      </Button>
    </aside>
  )
}
