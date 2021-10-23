import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Avatar,
  Flex,
  Button
} from '@chakra-ui/react'
import {Element} from 'react-scroll'

import GanttChart from '../../../molecules/GanttChart'
import {DataType} from '../../../molecules/GanttChart/types'

interface TimeLineSectionProps {
  data: DataType[]
}

interface SortedDataType {
  [room: string]: DataType[]
}

interface AccordionType {
  [room: string]: [
    {
      element: JSX.Element
      index: number
    }
  ]
}

const TimeLineSection = ({data}: TimeLineSectionProps) => {
  const sortData = () => {
    const sortedData: SortedDataType = {}
    const rooms: string[] = []
    for (const d of data) {
      if (!(d.room in sortedData)) {
        sortedData[d.room] = [d]
      } else {
        sortedData[d.room].push(d)
      }
      if (!(d.room in rooms)) {
        rooms.push(d.room)
      }
    }

    for (const room of rooms) {
      sortedData[room].sort((a, b) => {
        return a.startDate.getTime() - b.startDate.getTime()
      })
    }

    return sortedData
  }

  const generateAccordions = () => {
    const accordion: JSX.Element[] = []
    let accordionItems: AccordionType = {}
    const sortedData = sortData()
    for (const key in sortedData) {
      accordionItems[key] = [{}]
      for (const obj of sortedData[key]) {
        accordionItems[key].push({
          index: data.indexOf(obj),
          element: (
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {obj.startDate
                    .toLocaleTimeString('de-AT')
                    .substring(
                      0,
                      obj.startDate.toLocaleTimeString('de-AT').length - 3
                    )}
                  {' - '}
                  {obj.endDate
                    .toLocaleTimeString('de-AT')
                    .substring(
                      0,
                      obj.endDate.toLocaleTimeString('de-AT').length - 3
                    )}{' '}
                  <b>{obj.title}</b> Sprecher:{' '}
                  {obj.speakers.map((speaker, index) => {
                    return (
                      speaker.name +
                      (index !== obj.speakers.length - 1 ? ', ' : '')
                    )
                  })}
                  {' Tags: '}
                  {obj.tags.map((tag, index) => {
                    return tag + (index !== obj.tags.length - 1 ? ', ' : '')
                  })}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text>{obj.title}</Text>
                <Text mb="5">{obj.description}</Text>
                <hr />
                <Text mt="5" mb="3">
                  Sprecher
                </Text>
                {obj.speakers.map((speaker, index) => {
                  return (
                    <Flex
                      key={index}
                      mb={index !== obj.speakers.length - 1 ? 3 : 5}>
                      <Avatar src={speaker.imageSrc} />
                      <Box ml="3">
                        <Text>{speaker.name}</Text>
                        <Text>{speaker.bio}</Text>
                      </Box>
                    </Flex>
                  )
                })}
                <hr />
                <Button
                  mb="5"
                  mt="10"
                  colorScheme="blue"
                  variant="solid"
                  size="lg">
                  Powerpoint
                </Button>
                <hr />
                <Box fontSize="sm" mt="5">
                  <Text>
                    {obj.startDate
                      .toLocaleString('de-AT')
                      .substring(
                        0,
                        obj.startDate.toLocaleString('de-AT').length - 3
                      )}{' '}
                    -{' '}
                    {obj.endDate
                      .toLocaleTimeString('de-AT')
                      .substring(
                        0,
                        obj.endDate.toLocaleTimeString('de-AT').length - 3
                      )}
                  </Text>
                  <Text>Raum: {obj.room}</Text>
                  <Text>
                    Tags:{' '}
                    {obj.tags.map((tag, index) => {
                      return tag + (index !== obj.tags.length - 1 ? ', ' : '')
                    })}
                  </Text>
                  <Text>Typ: {obj.type}</Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          )
        })
      }
      accordion.push(
        <Box my="10">
          <Text>{key}</Text>
          <Accordion allowToggle>
            {accordionItems[key].map(item => {
              return <Element name={item.index}>{item.element}</Element>
            })}
          </Accordion>
        </Box>
      )
    }
    return accordion
  }

  return (
    <Box>
      <GanttChart data={data} />
      {generateAccordions().map(accordion => {
        return (
          <Box w="80%" mx="auto">
            {accordion}
          </Box>
        )
      })}
    </Box>
  )
}

export default TimeLineSection
