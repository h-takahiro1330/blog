import { ComponentProps, FC } from 'react'
import { Layout } from '~/components/organisms/common/Layout'
import { ArticleList } from '~/components/organisms/articles/ArticleList'

type Props = ComponentProps<typeof ArticleList>

export const ArticleListTemplate: FC<Props> = ({ articles }) => (
  <Layout>
    <ArticleList articles={articles} />
  </Layout>
)
