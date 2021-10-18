import {Box, Heading, Center} from '@chakra-ui/react'

import {fields} from '@snek-at/jaen-pages'
import React from 'react'
import GanttChart from '../components/molecules/GanttChart'
import {DataType} from '../components/molecules/GanttChart/types'

const data: DataType[] = [
  {
    tags: ['security'],
    room: 'Große Halle',
    startDate: new Date(2021, 9, 18, 15),
    endDate: new Date(2021, 9, 18, 17),
    title: 'About some shit and',
    description: 'Its about some shit and so on and so on',
    speakers: [
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      }
    ],
    powerpointUrl: '',
    type: 'Vortrag'
  },
  {
    tags: ['security'],
    room: 'Große Halle',
    startDate: new Date(2021, 9, 18, 15),
    endDate: new Date(2021, 9, 18, 17),
    title: 'About some shit',
    description: 'Its about some shit and so on and so on',
    speakers: [
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      }
    ],
    powerpointUrl: '',
    type: 'Vortrag'
  },
  {
    tags: ['security'],
    room: 'Große Halle',
    startDate: new Date(2021, 9, 18, 15),
    endDate: new Date(2021, 9, 18, 17),
    title: 'About some shit and',
    description: 'Its about some shit and so on and so on',
    speakers: [
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      }
    ],
    powerpointUrl: '',
    type: 'Vortrag'
  },
  {
    tags: ['security'],
    room: 'Große Halle',
    startDate: new Date(2021, 9, 18, 15),
    endDate: new Date(2021, 9, 18, 17),
    title: 'About some shit',
    description: 'Its about some shit and so on and so on',
    speakers: [
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      }
    ],
    powerpointUrl: '',
    type: 'Vortrag'
  },
  {
    tags: ['security'],
    room: 'Kleine Halle',
    startDate: new Date(2021, 9, 18, 16),
    endDate: new Date(2021, 9, 18, 17),
    title: 'About some shit',
    description: 'Its about some shit and so on and so on',
    speakers: [
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      },
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      }
    ],
    powerpointUrl: '',
    type: 'Vortrag'
  },
  {
    tags: ['security'],
    room: 'Aula',
    startDate: new Date(2021, 9, 18, 17),
    endDate: new Date(2021, 9, 18, 18),
    title: 'About some shit',
    description: 'Its about some shit and so on and so on',
    speakers: [
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      },
      {
        name: 'Friedrich Dominik',
        bio: 'Very successfull',
        imageSrc:
          'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
      }
    ],
    powerpointUrl: '',
    type: 'Vortrag'
  }
]
const IndexPage = () => {
  return (
    <Box>
      <GanttChart data={data} />
    </Box>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
