import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleDetailHead } from '~/features/articles/ArticleDetailHead'
import { rest } from 'msw'

export default {
  title: 'features/articles/ArticleDetailHead',
  component: ArticleDetailHead,
} as ComponentMeta<typeof ArticleDetailHead>

const Template: ComponentStory<typeof ArticleDetailHead> = (args) => (
  <ArticleDetailHead {...args}>sample ArticleDetailHead</ArticleDetailHead>
)

export const SuccessBehavior = Template.bind({})

SuccessBehavior.parameters = {
  nextRouter: {
    path: '/articles/[id]',
    asPath: '/articles/aaa',
    query: {
      id: 'aaa',
    },
  },
  msw: {
    handlers: [
      rest.get(
        'https://tac.microcms.io/api/v1/articles/aaa',
        (req, res, ctx) => {
          return res(
            ctx.json({
              id: 'aaa',
              createdAt: '2022/10/08',
              updatedAt: '2022/10/08',
              publishedAt: '2022/10/08',
              revisedAt: '2022/10/08',
              title: 'sample title',
              body: 'sample body',
              mainVisual: {
                url:
                  'https://images.microcms-assets.io/protected/ap-northeast-1:2f439cb7-4796-469e-ac2e-9430041882be/service/tac/media/2020-12-12-13-35-21-513.jpg?w=6000&h=4000',
              },
            }),
          )
        },
      ),
    ],
  },
}
