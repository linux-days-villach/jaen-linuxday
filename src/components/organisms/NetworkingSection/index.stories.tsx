import NetworkingSection, {NetworkingSectionProps} from '.'
import {Story, Meta} from '@storybook/react'

export default {
  component: NetworkingSection,
  title: 'HomePage/NetworkingSection'
} as Meta

const Template: Story<NetworkingSectionProps> = args => (
  <NetworkingSection {...args} />
)

export const Section = Template.bind({})

Section.args = {
  networkingtext: (
    <p>
      neque egestas congue quisque egestas diam in arcu cursus euismod quis
      viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed
      cras ornare arcu dui vivamus arcu felis bibendum neque egestas congue
      quisque egestas diam in arcu cursus euismod quis viverra nibh cras
      pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui
      vivamus arcu felis bibendum neque egestas congue quisque egestas diam in
      arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed
      blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis
      bibendum
    </p>
  ),
  workshoptext: (
    <p>
      malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra
      massa massa ultricies mi
    </p>
  ),
  workshopbullets: (
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  ),
  talktext: (
    <p>
      malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra
      massa massa ultricies mi
    </p>
  ),
  talkbullets: (
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  )
}
