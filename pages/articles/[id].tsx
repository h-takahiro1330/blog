import React from 'react'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next'
import { ArticleDetail } from '~/components/organisms/articles/ArticleDetail'
import { Layout } from '~/components/organisms/common/Layout'

type Props = {
  article: Article
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://tac.microcms.io/api/v1/articles', {
    headers: {
      'X-API-KEY': process.env.API_KEY || '',
    },
  })
  const data = await res.json()
  const paths = data.contents.map(
    (content: Article) => `/articles/${content.id}`,
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const res = await fetch(
    `https://tac.microcms.io/api/v1/articles/${context.params.id}`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY || '',
      },
    },
  )
  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

const ArticlePage: NextPage<Props> = ({ article }) => (
  <Layout>
    <ArticleDetail article={article} />
  </Layout>
)

export default ArticlePage
