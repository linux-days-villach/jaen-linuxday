import JanusFace, {JanusFaceProps} from '.'
import {Story, Meta} from '@storybook/react'
import {Image} from '@chakra-ui/react'

export default {
  component: JanusFace,
  title: 'HomePage/JanusSection'
} as Meta

const Template: Story<JanusFaceProps> = args => <JanusFace {...args} />

export const Face = Template.bind({})

Face.args = {
  heading: 'Jeder Tag ist Linux Tag',
  teaser: (
    <p>
      porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus
      vitae aliquet nec ullamcorper sit amet risus
    </p>
  ),
  factOneHeading: <p>Heading1</p>,
  factOneContent: (
    <p>
      id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
      ultrices sagittis orci a
    </p>
  ),
  factTwoHeading: <p>Heading1</p>,
  factTwoContent: (
    <p>
      id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
      ultrices sagittis orci a
    </p>
  ),
  factThreeHeading: <p>Heading1</p>,
  factThreeContent: (
    <p>
      id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
      ultrices sagittis orci a
    </p>
  ),
  factFourHeading: <p>Heading1</p>,
  factFourContent: (
    <p>
      id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
      ultrices sagittis orci a
    </p>
  ),
  backgroundimage: (
    <Image
      className="backgroundimage"
      alt="backgroundimage"
      src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
    />
  )
}
