import JanusFace, {JanusFaceProps} from '../../../molecules/JanusFace'
import React from 'react'
import {Box, Switch, Center, Flex, Text} from '@chakra-ui/react'

export interface JanusSectionProps {
  developer: JanusFaceProps
  economist: JanusFaceProps
}

const JanusSection = ({developer, economist}: JanusSectionProps) => {
  const [checked, setChecked] = React.useState(true)

  return (
    <>
      <Center mb="5">
        <Flex>
          <Text mr="2">Für Entwickler</Text>
          <Switch onChange={() => setChecked(!checked)} />
          <Text ml="2">Für Unternehmer</Text>
        </Flex>
      </Center>
      <Flex>
        <Box w="5%" h="100%" bg="black"></Box>
        <Box w="95%">
          {checked ? (
            <JanusFace {...developer} />
          ) : (
            <JanusFace {...economist} />
          )}
        </Box>
      </Flex>
    </>
  )
}

export default JanusSection
