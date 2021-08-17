import dayjs from 'dayjs'
import { FC } from 'react'
import { Paper } from '~/components/atoms/Paper'
import Image from 'next/image'

type Props = {
  article: Article
}

export const ArticleListItem: FC<Props> = ({ article }) => (
  <Paper>
    <section className="h-80 mx-auto hover:opacity-80 hover:bg-gray-50">
      <div className="relative h-2/3 w-full">
        {article.mainVisual?.url ? (
          <Image
            className="object-cover rounded-t-lg"
            layout="fill"
            placeholder="blur"
            blurDataURL={article.mainVisual.url}
            src={article.mainVisual.url}
            alt="記事のメインビジュアル"
          />
        ) : (
          <p className="flex items-center justify-center">Camper's Blog</p>
        )}
      </div>
      <div className="border-t h-1/3 p-4 flex flex-col justify-between">
        <h2 className="font-bold multiple-ellipsis">{article.title}</h2>
        <span className="block w-full text-right text-gray-500 text-sm">
          {dayjs(article.revisedAt).format('YYYY/MM/DD')}
        </span>
      </div>
    </section>
  </Paper>
)
