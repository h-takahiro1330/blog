import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Article } from '../../../../types'

type Props = {
  article: Article
}

export const ArticleListItem: FC<Props> = ({ article }) => (
  <div className="border h-80 bg-white shadow-sm hover:opacity-80 hover:bg-gray-50">
    <img
      className="h-2/3 w-full object-cover"
      src={article.mainVisual ? article.mainVisual.url : ''}
      alt="記事のメインビジュアル"
    />
    <section className="border-t h-1/3 p-4 flex flex-col justify-between">
      <h2 className="font-bold">{article.title}</h2>
      <span className="block w-full text-right text-gray-500 text-sm">
        {dayjs(article.revisedAt).format('YYYY/MM/DD')}
      </span>
    </section>
  </div>
)
