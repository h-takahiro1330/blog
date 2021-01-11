export type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  mainVisual: {
    url: string
  }
}

export type Articles = {
  contents: Article[]
  totalCount: number
  offset: number
  limit: number
}
