import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { ArticleListTemplate } from '~/components/templates/articles/ArticleList'
import { BLOG_TITLE } from '~/components/organisms/common/Header'

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
    <ArticleListTemplate articles={articles} />
  </>
)

export default ArticlesPage
