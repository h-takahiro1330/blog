import { FC } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Head from 'next/head'

const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: { 'X-API-KEY': `${process.env.NEXT_PUBLIC_API_KEY}` },
  })
  return res.data
}

export const ArticleDetailHead: FC = () => {
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
    <Head>
      <title>{data.title}</title>
    </Head>
  )
}
