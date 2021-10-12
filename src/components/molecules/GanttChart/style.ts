import styled from '@emotion/styled'
import {Box} from '@chakra-ui/react'

const GanttStyle = styled(Box)`
  .tick line {
    stroke: gray;
    opacity: 0.5;
    fill: none;
    stroke-width: 1px;
    shape-rendering: crispEdges;
  }
  .domain {
    stroke: gray;
    opacity: 0.5;
    fill: none;
    stroke-width: 1px;
    shape-rendering: crispEdges;
  }
  .ellapsed-time {
  }
`
export default GanttStyle
