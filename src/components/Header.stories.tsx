import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from '~/components/Header'

export default {
  title: 'components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => (
  <Header>sample Header</Header>
)

export const Default = Template.bind({})
