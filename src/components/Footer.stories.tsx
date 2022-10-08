import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from '~/components/Footer'

export default {
  title: 'components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => (
  <Footer>sample Footer</Footer>
)

export const Default = Template.bind({})
