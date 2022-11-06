'use client'

import { ArticleDetail } from '~/app/articles/[id]/ArticleDetail'
import { Suspense } from 'react'
import { NextPage } from 'next'

type Props = {
  params: { id: string }
}

const ArticlePage: NextPage<Props> = ({ params }: Props) => (
  <Suspense fallback={null}>
    <ArticleDetail {...params} />
  </Suspense>
)

export default ArticlePage
