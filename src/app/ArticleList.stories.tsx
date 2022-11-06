import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleList } from '~/app/ArticleList'
import { rest } from 'msw'

export default {
  title: 'app/ArticleList',
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
)

export const SuccessBehavior = Template.bind({})

SuccessBehavior.parameters = {
  msw: {
    handlers: [
      rest.get('https://tac.microcms.io/api/v1/articles/', (req, res, ctx) => {
        return res(
          ctx.json({
            totalCount: 2,
            offset: 0,
            limit: 0,
            contents: [
              {
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
              },
              {
                id: 'bbb',
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
              },
            ],
          }),
        )
      }),
    ],
  },
}
