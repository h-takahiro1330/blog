import dayjs from 'dayjs'
import { FC } from 'react'

type Props = {
  article: Article
}

export const ArticleListItem: FC<Props> = ({ article }) => (
  <section className="border h-80 bg-white shadow-sm max-w-md mx-auto rounded-lg hover:opacity-80 hover:bg-gray-50">
    {article.mainVisual ? (
      <img
        className="h-2/3 w-full object-cover rounded-t-lg"
        src={article.mainVisual ? article.mainVisual.url : ''}
        alt="記事のメインビジュアル"
      />
    ) : (
      <div className="h-2/3 flex items-center justify-center">
        Camper's Blog
      </div>
    )}
    <div className="border-t h-1/3 p-4 flex flex-col justify-between">
      <h2 className="font-bold multiple-ellipsis">{article.title}</h2>
      <span className="block w-full text-right text-gray-500 text-sm">
        {dayjs(article.revisedAt).format('YYYY/MM/DD')}
      </span>
    </div>
  </section>
)
