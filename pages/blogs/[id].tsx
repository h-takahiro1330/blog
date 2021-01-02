import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = {
  blog: {
    id: string
    title: string
    body: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://tac.microcms.io/api/v1/blogs', {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  const data = await res.json()
  const paths = data.contents.map((content) => `/blogs/${content.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://tac.microcms.io/api/v1/blogs/${context.params.id}`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  )
  const data = await res.json()

  return {
    props: {
      blog: data,
    },
  }
}

const Blog: NextPage<Props> = ({ blog }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${blog.body}`,
      }}
    />
  )
}

export default Blog
