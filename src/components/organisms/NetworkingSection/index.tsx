import {Box, Button, Center, Flex, Heading} from '@chakra-ui/react'

export interface NetworkingSectionProps {
  networkingtext: React.ReactNode
  workshoptext: React.ReactNode
  workshopbullets: React.ReactNode
  talktext: React.ReactNode
  talkbullets: React.ReactNode
}

const NetworkingSection = ({
  networkingtext,
  workshoptext,
  workshopbullets,
  talktext,
  talkbullets
}: NetworkingSectionProps) => {
  return (
    <Box>
      <Flex>
        <Box width="5%"></Box>
        <Box w="80%" mx="auto">
          <Heading w="90%" textAlign="center" mb="5">
            Networking
          </Heading>
          {networkingtext}
        </Box>
      </Flex>
      <Flex>
        <Box w="45%" h="20vh"></Box>
        <Button
          mt="15vh"
          colorScheme="blue"
          variant="solid"
          borderRadius="25px"
          size="lg">
          Programm
        </Button>
        <Box w="45%" h="20vh"></Box>
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Box w="30%" border="1px" p="5" borderRadius="25px">
          <Heading textAlign="center" mb="5">
            Vorträge
          </Heading>
          {talktext}
          <Box pt="5" />
          {talkbullets}
        </Box>
        <Box w="20%"></Box>
        <Box w="30%" border="1px" p="5" borderRadius="25px">
          <Heading textAlign="center" mb="5">
            Workshops
          </Heading>
          {workshoptext}
          <Box pt="5" />
          {workshopbullets}
        </Box>
      </Flex>
    </Box>
  )
}

export default NetworkingSection
