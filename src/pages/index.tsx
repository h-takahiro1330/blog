import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { Layout } from '~/components/Layout'
import { ArticleList } from '~/features/articles/ArticleList'
import { BLOG_TITLE } from '~/components/Header'

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
  <>
    <Head>
      <title>{BLOG_TITLE}</title>
    </Head>
    <Layout>
      <ArticleList articles={articles} />
    </Layout>
  </>
)

export default ArticlesPage
