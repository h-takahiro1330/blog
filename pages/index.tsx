import React from 'react'
import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'
import { Articles } from '../types'

type Props = {
  articles: Articles
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://tac.microcms.io/api/v1/articles', {
    headers: {
      'X-API-KEY': process.env.API_KEY || '',
    },
  })
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

const ArticlesPage: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      {articles.contents.map((article) => (
        <ul key={article.id}>
          <li>
            <Link href={`articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default ArticlesPage
