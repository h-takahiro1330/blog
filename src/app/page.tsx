'use client'

import { ArticleList } from '~/app/ArticleList'
import { FC, Suspense } from 'react'

type Props = {
  params: {
    //
  }
}

// TODO: https://github.com/vercel/next.js/issues/41884
const ArticlesPage: FC<Props> = () => (
  <Suspense fallback={null}>
    <ArticleList />
  </Suspense>
)

export default ArticlesPage
