import {Story, Meta} from '@storybook/react'
import {Image} from '@chakra-ui/react'

import SponsorSection, {SponsorSectionProps} from '.'

export default {
  component: SponsorSection,
  title: 'HomePage/SponsorSection'
} as Meta

const Template: Story<SponsorSectionProps> = args => (
  <SponsorSection {...args} />
)

export const Section = Template.bind({})

Section.args = {
  sponsorOneImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  ),
  sponsorTwoImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  ),
  sponsorThreeImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  ),
  sponsorFourImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  ),
  sponsorFiveImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  ),
  sponsorSixImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  ),
  sponsorSevenImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  ),
  sponsorEightImage: (
    <Image
      src="https://image.shutterstock.com/image-vector/sponsor-rubber-stamp-grunge-seal-260nw-1462113782.jpg"
      className="sponsorimagediv"
    />
  )
}
