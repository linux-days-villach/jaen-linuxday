import {Box, Center, Flex, Heading, Spacer} from '@chakra-ui/react'

import * as style from './style'

export interface SponsorSectionProps {
  sponsorOneImage: React.ReactNode
  sponsorTwoImage: React.ReactNode
  sponsorThreeImage: React.ReactNode
  sponsorFourImage: React.ReactNode
  sponsorFiveImage: React.ReactNode
  sponsorSixImage: React.ReactNode
  sponsorSevenImage: React.ReactNode
  sponsorEightImage: React.ReactNode
}

const SponsorSection = ({
  sponsorOneImage,
  sponsorTwoImage,
  sponsorThreeImage,
  sponsorFourImage,
  sponsorFiveImage,
  sponsorSixImage,
  sponsorSevenImage,
  sponsorEightImage
}: SponsorSectionProps) => {
  return (
    <Box>
      <Center>
        <Heading>Unsere Sponsoren</Heading>
      </Center>
      <Center>
        <style.SponsorImage>
          <Flex>
            <Box>
              <Flex mt="50px">
                {sponsorOneImage}
                {sponsorTwoImage}
              </Flex>
              <Flex ml="20" mt="80px">
                {sponsorThreeImage}
                {sponsorFourImage}
              </Flex>
            </Box>
            <Box w="40vw" />
            <Box>
              <Flex mt="50px">
                {sponsorFiveImage}
                {sponsorSixImage}
              </Flex>
              <Flex mr="200px" mt="80px">
                {sponsorSevenImage}
                {sponsorEightImage}
              </Flex>
            </Box>
          </Flex>
        </style.SponsorImage>
      </Center>
    </Box>
  )
}

export default SponsorSection
