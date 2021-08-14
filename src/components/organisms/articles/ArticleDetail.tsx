import dayjs from 'dayjs'
import { FC } from 'react'
import { ArticleDetailBody } from './ArticleDetailBody'

type Props = {
  article: Article
}

export const ArticleDetail: FC<Props> = ({ article }) => (
  <article className="bg-white w-full max-w-screen-md mx-auto shadow-sm rounded-lg md:p-8 p-4">
    <h1 className="font-bold text-2xl mb-4">{article.title}</h1>
    <span className="block text-gray-500 text-right mb-4">
      {dayjs(article.revisedAt).format('YYYY/MM/DD')}
    </span>
    {article.mainVisual && (
      <div className="relative pt-mv-aspect-ratio">
        <img
          src={article.mainVisual.url}
          alt="記事のメインビジュアル"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    )}
    <ArticleDetailBody articleHtml={article.body} />
  </article>
)
