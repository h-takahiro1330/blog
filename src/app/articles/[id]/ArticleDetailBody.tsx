import { FC } from 'react'

type Props = {
  articleHtml: string
}

export const ArticleDetailBody: FC<Props> = ({ articleHtml }) => (
  <>
    <article
      className="body"
      dangerouslySetInnerHTML={{
        __html: `${articleHtml}`,
      }}
    />

    <style jsx global>{`
      .body {
        h2 {
          background-color: rgba(243, 244, 246, 1);
          @apply font-bold text-lg p-4 border-l-8 mt-12 mb-6;
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
