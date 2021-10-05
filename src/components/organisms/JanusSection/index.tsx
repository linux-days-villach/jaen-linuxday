import JanusFace, {JanusFaceProps} from '../../molecules/JanusFace'
import React from 'react'
import {Box, Switch, Center} from '@chakra-ui/react'

export interface JanusSectionProps {
  developer: JanusFaceProps
  economist: JanusFaceProps
}

const JanusSection = ({developer, economist}: JanusSectionProps) => {
  const [checked, setChecked] = React.useState(true)

  return (
    <Box>
      <Center mb="5">
        <Switch onChange={() => setChecked(!checked)} />
      </Center>
      {checked ? <JanusFace {...developer} /> : <JanusFace {...economist} />}
    </Box>
  )
}

export default JanusSection
