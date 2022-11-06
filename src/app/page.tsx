'use client'

import { ArticleList } from '~/app/ArticleList'
import { Suspense } from 'react'
import { NextPage } from 'next'

const ArticlesPage: NextPage = () => (
  <Suspense fallback={null}>
    <ArticleList />
  </Suspense>
)

export default ArticlesPage
