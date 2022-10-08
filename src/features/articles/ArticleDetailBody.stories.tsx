import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleDetailBody } from '~/features/articles/ArticleDetailBody'

export default {
  title: 'features/articles/ArticleDetailBody',
  component: ArticleDetailBody,
} as ComponentMeta<typeof ArticleDetailBody>

const Template: ComponentStory<typeof ArticleDetailBody> = (args) => (
  <ArticleDetailBody {...args}>sample ArticleDetailBody</ArticleDetailBody>
)

export const Default = Template.bind({})

Default.args = {
  articleHtml: `
  <h2>sample subtitle</h2>
  <p>sample text</p>
  <img src="https://images.microcms-assets.io/protected/ap-northeast-1:2f439cb7-4796-469e-ac2e-9430041882be/service/tac/media/2020-12-12-13-35-21-513.jpg?w=6000&h=4000" />
`,
}
