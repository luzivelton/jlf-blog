import { Typography } from '@/components/Typography/Typography'
import { useArticle } from '@/pages/Article/hooks/useArticle'
import { ArticleAuthorAndDate } from '@/pages/Blog/components/ArticleAuthorAndDate/ArticleAuthorAndDate'
import { ArticleImage } from '@/pages/Blog/components/ArticleImage/ArticleImage'
import { Divider } from '@/components/Divider/Divider'
import { ArticleLoader } from '@/pages/Article/components/ArticleLoader/ArticleLoader'
import styles from './ArticleContent.module.scss'
import { LatestArticles } from '@/pages/Article/components/LatestArticles/LatestArticles'
import React from 'react'

export function ArticleContent() {
  const { article, isLoading } = useArticle()

  if (isLoading) {
    return
  }

  if (!article) throw new Error('Not found')

  return (
    <ArticleLoader isLoading={isLoading}>
      <div className={styles.container}>
        <Typography variant='h3' asVariant={true} numberOfLines={2}>
          {article.title}
        </Typography>
        <ArticleAuthorAndDate.Detailed
          authorName={article.author.name}
          createdAt={article.createdAt}
          authorImage={article.author.profilePicture}
        />
        <ArticleImage src={article.thumbnail_url} alt={article.title} />
        <Typography variant='body' numberOfLines={2} asVariant={true}>
          {article.content.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>
        <Divider />
        <LatestArticles articleId={article.id} />
      </div>
    </ArticleLoader>
  )
}
