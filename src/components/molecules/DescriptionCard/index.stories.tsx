import DescriptionCard from '.'
import {Story, Meta} from '@storybook/react'
import {ComponentProps} from 'react'

export default {
  component: DescriptionCard,
  title: 'HomePage/DescriptionSection'
} as Meta

const Template: Story<ComponentProps<typeof DescriptionCard>> = args => (
  <DescriptionCard {...args} />
)

export const Card = Template.bind({})
Card.args = {
  title: 'title',
  lottie: '',
  index: 1,
  text: (
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    </p>
  )
}
