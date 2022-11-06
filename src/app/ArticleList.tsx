import Link from 'next/link'
import { FC } from 'react'
import { ArticleListItem } from '~/app/ArticleListItem'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: { 'X-API-KEY': `${process.env.NEXT_PUBLIC_API_KEY}` },
  })
  return res.data
}

export const ArticleList: FC = () => {
  // TODO: fetch
  const { data, error } = useSWR<Articles>(
    'https://tac.microcms.io/api/v1/articles/',
    fetcher,
    { suspense: true },
  )

  // TODO: error
  if (error) {
    return <p>error</p>
  }

  return (
    <article className="grid grid-cols-list gap-8 w-10/12 mx-auto max-w-7xl">
      {data.contents.map((article) => (
        <Link href={`/articles/${article.id}`} key={article.id}>
          <ArticleListItem article={article} />
        </Link>
      ))}
    </article>
  )
}
