import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleListItem } from '~/app/ArticleListItem'

export default {
  title: 'app/ArticleListItem',
  component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
)

export const Default = Template.bind({})

// FYI: https://github.com/storybookjs/storybook/issues/13747
Default.args = {
  article: {
    id: 'xxx',
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
}
