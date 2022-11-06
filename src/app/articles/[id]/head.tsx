'use client'

import axios from 'axios'
import { FC } from 'react'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: { 'X-API-KEY': `${process.env.NEXT_PUBLIC_API_KEY}` },
  })
  return res.data
}

type Props = {
  params: { id: string }
}

const Head: FC<Props> = ({ params }: Props) => {
  // TODO: fetch
  const { data, error } = useSWR<Article>(
    params.id ? `https://tac.microcms.io/api/v1/articles/${params.id}` : null,
    fetcher,
  )

  // TODO: error
  if (error) {
    return <p>error</p>
  }

  if (!data) return null

  return (
    <>
      <title>{data.title}</title>
    </>
  )
}

export default Head
