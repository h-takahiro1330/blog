import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from '~/components/Header'
import { screen, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => (
  <Header>sample Header</Header>
)

export const Default = Template.bind({})

Default.play = async () => {
  const submitButton = screen.getByRole('button')
  await userEvent.click(submitButton)
  expect(submitButton.innerText).toBe('🗻')

  await userEvent.click(submitButton)
  expect(submitButton.innerText).toBe('🏕️')
}
