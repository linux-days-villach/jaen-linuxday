import {useColorMode} from '@chakra-ui/react'
import {Flex, Box, SimpleGrid, Container, Heading} from '@chakra-ui/react'


//> Additional
// Typing animations
import Typed from "react-typed";

import DescriptionCard from '../../../molecules/DescriptionCard'

export interface DescriptionSectionProps {
  headlines: string[]
  teaser: React.ReactNode
  securitytext: React.ReactNode
  linuxtext: React.ReactNode
  networkingtext: React.ReactNode
  digitalisingtext: React.ReactNode
}

const DescriptionSection = ({
  headlines,
  teaser,
  securitytext,
  linuxtext,
  networkingtext,
  digitalisingtext
}: DescriptionSectionProps) => {

  const {colorMode} = useColorMode()
  const dm = colorMode === 'light'

  return (
    <Box mt="20">
      <Container
        maxW={{base: '100%', md: '80%'}}
      >
        <Heading as="h2" size="4xl" minH="12rem">
          <Typed
            strings={headlines}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Heading>
      </Container>
      <Container
        maxW={{base: '100%', md: '80%'}}
        mt={10}
      >
        {/* <Box w="100%">
          {teaser}
        </Box> */}
      </Container>
      <Flex
        pb={20}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
        <SimpleGrid
          columns={{base: 1, lg: 2}}
          spacing={'20'}
          mt={10}
          mx={'auto'}>
          <DescriptionCard
            title="Security"
            index={1}
            lottie={
              require(dm
                ? `./457-shield-security-outline.json`
                : `./457-shield-security-outline-dm.json`)
            }
            text={securitytext}
          />
          <DescriptionCard
            title="Networking"
            index={2}
            lottie={
              require(dm
                ? `./680-it-developer-outline.json`
                : `./680-it-developer-outline-dm.json`)
            }
            text={networkingtext}
          />
          <DescriptionCard
            title="Digitalisierung"
            index={3}
            lottie={
              require(dm
                ? `./959-internet-outline.json`
                : `./959-internet-outline-dm.json`)
            }
            text={digitalisingtext}
          />
          <DescriptionCard
            title="Linux"
            index={4}
            lottie={
              require(dm
                ? `./1132-penguin-outline.json`
                : `./1132-penguin-outline-dm.json`)
            }
            text={linuxtext}
          />
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default DescriptionSection
