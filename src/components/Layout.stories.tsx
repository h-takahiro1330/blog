import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '~/components/Layout'

export default {
  title: 'components/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = () => (
  <Layout>sample Layout</Layout>
)

export const Default = Template.bind({})
