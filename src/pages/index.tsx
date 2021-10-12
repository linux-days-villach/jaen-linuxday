import {Box, Heading, Center} from '@chakra-ui/react'

import {fields} from '@snek-at/jaen-pages'
import React from 'react'
import GanttChart from '../components/molecules/GanttChart'

const IndexPage = () => {
  return (
    <Box>
      <GanttChart />
    </Box>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
