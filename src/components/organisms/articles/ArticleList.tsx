import Link from 'next/link'
import { FC } from 'react'
import { ArticleListItem } from '~/components/organisms/articles/ArticleListItem'

type Props = {
  articles: Articles
}

export const ArticleList: FC<Props> = ({ articles }) => (
  <ul className="grid grid-cols-list gap-8 w-10/12 mx-auto max-w-7xl">
    {articles.contents.map((article) => (
      <li key={article.id}>
        <Link href={`/articles/${article.id}`}>
          <a>
            <ArticleListItem article={article} />
          </a>
        </Link>
      </li>
    ))}
  </ul>
)
