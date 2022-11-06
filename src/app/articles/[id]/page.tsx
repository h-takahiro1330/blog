'use client'

import { ArticleDetail } from '~/app/articles/[id]/ArticleDetail'
import { FC, Suspense } from 'react'

type Props = {
  params: { id: string }
}

// TODO: https://github.com/vercel/next.js/issues/41884
const ArticlePage: FC<Props> = ({ params }: Props) => (
  <Suspense fallback={null}>
    <ArticleDetail {...params} />
  </Suspense>
)

export default ArticlePage
