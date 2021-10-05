import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'

import * as style from './style'

export interface JanusFaceProps {
  heading: string
  teaser: React.ReactNode
  factOneHeading: React.ReactNode
  factOneContent: React.ReactNode
  factTwoHeading: React.ReactNode
  factTwoContent: React.ReactNode
  factThreeHeading: React.ReactNode
  factThreeContent: React.ReactNode
  factFourHeading: React.ReactNode
  factFourContent: React.ReactNode
  backgroundimage: React.ReactNode
}

const JanusFace = ({
  heading,
  teaser,
  factOneHeading,
  factOneContent,
  factTwoHeading,
  factTwoContent,
  factThreeHeading,
  factThreeContent,
  factFourHeading,
  factFourContent,
  backgroundimage
}: JanusFaceProps) => {
  return (
    <Box position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{base: 'none', lg: 'flex'}}
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <style.BackgroundImage>{backgroundimage}</style.BackgroundImage>
        <Flex
          bgGradient={'linear(to-r, white 10%, transparent)'}
          w={'full'}
          h={'full'}
          zIndex={1}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{base: 'column', lg: 'row'}}>
          <Stack
            flex={1}
            justify={{lg: 'center'}}
            py={{base: 4, md: 20, xl: 60}}>
            <Box mb={{base: 8, md: 20}}>
              <Heading mb={5} fontSize={{base: '3xl', md: '5xl'}}>
                {heading}
              </Heading>
              <Text fontSize={'xl'}>{teaser}</Text>
            </Box>

            <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
              <Box>
                <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                  {factOneHeading}
                </Text>
                <Text fontSize={'xl'}>{factOneContent}</Text>
              </Box>
              <Box>
                <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                  {factTwoHeading}
                </Text>
                <Text fontSize={'xl'}>{factTwoContent}</Text>
              </Box>
              <Box>
                <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                  {factThreeHeading}
                </Text>
                <Text fontSize={'xl'}>{factThreeContent}</Text>
              </Box>
              <Box>
                <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                  {factFourHeading}
                </Text>
                <Text fontSize={'xl'}>{factFourContent}</Text>
              </Box>
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

export default JanusFace
