import { FC } from 'react'
import { BLOG_TITLE } from '~/components/Header'
import { Layout } from '~/components/Layout'
import '~/styles/tailwind.css'

export const RootLayout: FC = ({ children }) => (
  <html lang="ja">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{BLOG_TITLE}</title>
    </head>
    <body>
      <Layout>{children}</Layout>
    </body>
  </html>
)

export default RootLayout
