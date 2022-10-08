import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Paper } from '~/components/Paper'

export default {
  title: 'components/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = () => <Paper>sample paper</Paper>

export const Default = Template.bind({})
