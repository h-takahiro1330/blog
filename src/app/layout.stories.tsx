import { ComponentStory, ComponentMeta } from '@storybook/react'
import RootLayout from '~/app/layout'

export default {
  title: 'app/layout',
  component: RootLayout,
} as ComponentMeta<typeof RootLayout>

const Template: ComponentStory<typeof RootLayout> = () => (
  <RootLayout>sample root layout</RootLayout>
)

export const Default = Template.bind({})
