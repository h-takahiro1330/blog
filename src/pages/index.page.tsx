import Head from 'next/head'
import { NextPage } from 'next'
import { Layout } from '~/components/Layout'
import { ArticleList } from '~/features/articles/ArticleList'
import { BLOG_TITLE } from '~/components/Header'
import { Suspense } from 'react'

const ArticlesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{BLOG_TITLE}</title>
      </Head>
      <Layout>
        <Suspense fallback={null}>
          <ArticleList />
        </Suspense>
      </Layout>
    </>
  )
}

export default ArticlesPage
