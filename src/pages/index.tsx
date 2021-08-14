import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Layout } from '~/components/organisms/common/Layout'
import { ArticleList } from '~/components/organisms/articles/ArticleList'

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

const ArticlesPage: NextPage<Props> = ({ articles }) => (
  <Layout>
    <ArticleList articles={articles} />
  </Layout>
)

export default ArticlesPage
