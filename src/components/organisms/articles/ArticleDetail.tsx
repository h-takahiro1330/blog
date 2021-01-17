import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Article } from '../../../../types'
import { ArticleDetailBody } from './ArticleDetailBody'

type Props = {
  article: Article
}

export const ArticleDetail: FC<Props> = ({ article }) => (
  <section className="bg-white w-full max-w-screen-md mx-auto shadow-sm md:my-8 md:p-8 p-4">
    <h1 className="font-bold text-2xl mb-4">{article.title}</h1>
    <span className="block text-gray-500 text-right mb-12">
      {dayjs(article.revisedAt).format('YYYY/MM/DD')}
    </span>
    <ArticleDetailBody articleHtml={article.body} />
  </section>
)
