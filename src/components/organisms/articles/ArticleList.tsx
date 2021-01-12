import Link from 'next/link'
import React, { FC } from 'react'
import { Articles } from '../../../../types'
import { ArticleListItem } from './ArticleListItem'

type Props = {
  articles: Articles
}

export const ArticleList: FC<Props> = ({ articles }) => (
  <section className="container mx-auto px-20 py-12">
    <ul className="grid grid-cols-3 gap-8">
      {articles.contents.map((article) => (
        <li key={article.id}>
          <Link href={`articles/${article.id}`}>
            <a>
              <ArticleListItem article={article} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </section>
)
