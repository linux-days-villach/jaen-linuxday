import {Box, Center, Flex, Heading} from '@chakra-ui/react'

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

const ImagePositioning = (props: {image: React.ReactNode}) => {
  return (
    <Box ml={{base: '0', md: '20px'}} mt={{base: '80px', md: '0'}}>
      {props.image}
    </Box>
  )
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
          <Flex direction={{base: 'column', md: 'row'}}>
            <Box order={{base: 1, md: 0}}>
              <Flex
                w={{base: '300px', md: '560px'}}
                mt="50px"
                direction={{base: 'column', md: 'row'}}>
                <Box ml={{base: '0', md: '20px'}}>{sponsorOneImage}</Box>
                <ImagePositioning image={sponsorTwoImage} />
              </Flex>
              <Flex
                ml={{base: '0', md: '20'}}
                mt={{base: '0px', md: '80px'}}
                direction={{base: 'column', md: 'row'}}>
                <Box mt={{base: '80px', md: '0'}}>{sponsorThreeImage}</Box>
                <ImagePositioning image={sponsorFourImage} />
              </Flex>
            </Box>
            <Box w="30vw" h="30vh" order={{base: 0, md: 1}} />
            <Box order={{base: 1, md: 2}}>
              <Flex
                mt={{base: '80px', md: '50px'}}
                ml={{base: '0', md: '20'}}
                mr={{base: '0', md: '20px'}}
                direction={{base: 'column', md: 'row'}}>
                <Box> {sponsorFiveImage}</Box>
                <ImagePositioning image={sponsorSixImage} />
              </Flex>
              <Flex
                w={{base: '300px', md: '560px'}}
                mt="80px"
                direction={{base: 'column', md: 'row'}}>
                <Box>{sponsorSevenImage}</Box>
                <ImagePositioning image={sponsorEightImage} />
              </Flex>
            </Box>
          </Flex>
        </style.SponsorImage>
      </Center>
    </Box>
  )
}

export default SponsorSection
