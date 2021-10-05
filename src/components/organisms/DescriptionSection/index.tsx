import {Flex, Box, SimpleGrid, Container} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import DescriptionCard from '../../molecules/DescriptionCard'

interface DescriptionSectionProps {
  teaser: React.ReactNode
  securitytext: React.ReactNode
  linuxtext: React.ReactNode
  networkingtext: React.ReactNode
  digitalisingtext: React.ReactNode
}

const DescriptionSection = ({
  teaser,
  securitytext,
  linuxtext,
  networkingtext,
  digitalisingtext
}: DescriptionSectionProps) => {
  return (
    <Box ml={{base: '0px', md: '100px'}} mt="20">
      <Container
        maxW={{base: '100%', md: '80%'}}
        ml={{base: '0px', md: '220px'}}
        centerContent>
        <Box w="100%" textAlign="center">
          {teaser}
        </Box>
      </Container>
      <Flex
        textAlign={'center'}
        pt={20}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
        <SimpleGrid
          columns={{base: 1, md: 2}}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          <DescriptionCard
            title="Security"
            index={1}
            lottie=""
            text={securitytext}
          />
          <DescriptionCard
            title="Networking"
            index={2}
            lottie=""
            text={networkingtext}
          />
          <DescriptionCard
            title="Digitalisierung"
            index={3}
            lottie=""
            text={digitalisingtext}
          />
          <DescriptionCard title="Linux" index={4} lottie="" text={linuxtext} />
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default DescriptionSection
