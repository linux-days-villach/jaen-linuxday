import DescriptionSection, {DescriptionSectionProps} from '.'
import {Story, Meta} from '@storybook/react'

export default {
  component: DescriptionSection,
  title: 'HomePage/DescriptionSection'
} as Meta

const Template: Story<DescriptionSectionProps> = args => (
  <DescriptionSection {...args} />
)

export const Section = Template.bind({})

Section.args = {
  headlines: (
    [
      "Deine chance deine FOSS zu presentieren.",
      "Deine chance dich mit Experten auszutauschen.",
      "Deine chance dich in der welt der technik einzubringen.",
    ]
  ),
  teaser: (
    <h2>
      Vertreter aus Wirtschaft, Bildung und der Linux-Gemeinde treffen sich zum Wissensaustausch und knüpfen neue Netzwerke.
    </h2>
  ),
  digitalisingtext: (
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    </p>
  ),
  linuxtext: (
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    </p>
  ),
  networkingtext: (
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    </p>
  ),
  securitytext: (
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    </p>
  )
}
