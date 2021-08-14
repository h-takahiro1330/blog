import { GetStaticProps, NextPage } from 'next'
import { ArticleListTemplate } from '~/components/templates/articles/ArticleList'

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
  <ArticleListTemplate articles={articles} />
)

export default ArticlesPage
