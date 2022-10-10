import { NextPage } from 'next'
import { ArticleDetail } from '~/features/articles/ArticleDetail'
import { Layout } from '~/components/Layout'
import { ArticleDetailHead } from '~/features/articles/ArticleDetailHead'

const ArticlePage: NextPage = () => {
  return (
    <>
      <ArticleDetailHead />
      <Layout>
        <ArticleDetail />
      </Layout>
    </>
  )
}

export default ArticlePage
