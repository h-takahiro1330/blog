import Link from 'next/link'
import { FC } from 'react'
import { ArticleListItem } from '~/features/articles/ArticleListItem'

type Props = {
  articles: Articles
}

export const ArticleList: FC<Props> = ({ articles }) => (
  <article className="grid grid-cols-list gap-8 w-10/12 mx-auto max-w-7xl">
    {articles.contents.map((article) => (
      <Link href={`/articles/${article.id}`} key={article.id}>
        <a>
          <ArticleListItem article={article} />
        </a>
      </Link>
    ))}
  </article>
)
