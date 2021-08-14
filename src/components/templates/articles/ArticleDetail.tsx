import { ComponentProps, FC } from 'react'
import { Layout } from '~/components/organisms/common/Layout'
import { ArticleDetail } from '~/components/organisms/articles/ArticleDetail'

type Props = ComponentProps<typeof ArticleDetail>

export const ArticleDetailTemplate: FC<Props> = ({ article }) => (
  <Layout>
    <ArticleDetail article={article} />
  </Layout>
)
