import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Article } from '../../../../types'
import { ArticleDetailBody } from './ArticleDetailBody'

type Props = {
  article: Article
}

export const ArticleDetail: FC<Props> = ({ article }) => (
  <section className="container mx-auto my-12 px-20 py-12 bg-white w-2/3 shadow-sm">
    <h1 className="font-bold text-3xl mb-4">{article.title}</h1>
    <span className="block text-gray-500 text-right mb-12">
      {dayjs(article.revisedAt).format('YYYY/MM/DD')}
    </span>
    <ArticleDetailBody articleHtml={article.body} />
  </section>
)
