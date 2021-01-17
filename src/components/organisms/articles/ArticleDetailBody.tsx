import { FC } from 'react'

type Props = {
  articleHtml: string
}

export const ArticleDetailBody: FC<Props> = ({ articleHtml }) => (
  <>
    <section
      className="body"
      dangerouslySetInnerHTML={{
        __html: `${articleHtml}`,
      }}
    />
    <style jsx global>{`
      .body {
        h2 {
          @apply font-bold text-lg p-4 bg-gray-100 border-l-8 my-6;
        }
        p {
          @apply my-6;
        }
        img {
          @apply mx-auto my-4;
        }
      }
    `}</style>
  </>
)
