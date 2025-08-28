import { FeedCard } from '@/pages/Feed/components/FeedCard/FeedCard'
import styles from './FeedCardList.module.scss'
import type { IPost } from '@/interfaces/IPost'

type FeedCardListProps = React.HTMLAttributes<HTMLElement> & {
  posts: IPost[]
}

export function FeedCardList({ posts }: FeedCardListProps) {
  return (
    <section className={styles.list}>
      {posts.map((post) => (
        <FeedCard
          key={post.id}
          id={post.id}
          author={post.author}
          authorId={post.authorId}
          categories={post.categories}
          content={post.content}
          createdAt={post.createdAt}
          thumbnail_url={post.thumbnail_url}
          title={post.title}
          updatedAt={post.updatedAt}
        />
      ))}
    </section>
  )
}
