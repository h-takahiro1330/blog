import dayjs from 'dayjs'
import { FC } from 'react'
import Image from 'next/image'
import { ArticleDetailBody } from '~/features/articles/ArticleDetailBody'
import { Paper } from '~/components/Paper'
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: { 'X-API-KEY': `${process.env.NEXT_PUBLIC_API_KEY}` },
  })
  return res.data
}

export const ArticleDetail: FC = () => {
  const router = useRouter()
  const { data, error } = useSWR<Article>(
    router.query.id
      ? `https://tac.microcms.io/api/v1/articles/${router.query.id}`
      : null,
    fetcher,
  )

  if (error) {
    return <p>error</p>
  }

  if (!data) return null

  return (
    <div className="w-full max-w-screen-md mx-auto md:p-8 p-4">
      <Paper>
        <article className="md:p-8 p-4">
          <h1 className="font-bold text-2xl mb-4">{data.title}</h1>
          <span className="block text-gray-500 text-right mb-4">
            {dayjs(data.revisedAt).format('YYYY/MM/DD')}
          </span>
          {data.mainVisual && (
            <div className="relative pt-mv-aspect-ratio">
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                layout="fill"
                placeholder="blur"
                blurDataURL={data.mainVisual.url}
                src={data.mainVisual.url}
                alt="記事のメインビジュアル"
              />
            </div>
          )}
          <ArticleDetailBody articleHtml={data.body} />
        </article>
      </Paper>
    </div>
  )
}
