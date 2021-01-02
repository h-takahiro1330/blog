import React from 'react'
import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  blogs: [
    {
      id: string
      title: string
    },
  ]
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://tac.microcms.io/api/v1/blogs', {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
  const data = await res.json()

  return {
    props: {
      blogs: data.contents,
    },
  }
}

const Blogs: NextPage<Props> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <ul key={blog.id}>
          <li>
            <Link href={`blogs/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Blogs
