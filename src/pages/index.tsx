import {Box, Heading, Center} from '@chakra-ui/react'

import {DataType} from '../components/molecules/GanttChart/types'
import TimeLineSection from '../components/organisms/sections/TimeLineSection'

const data: DataType[] = [
  {
    tags: ['security', 'software-development'],
    room: 'Große Halle',
    startDate: new Date(2021, 9, 19, 15),
    endDate: new Date(2021, 9, 19, 17),
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
    startDate: new Date(2021, 9, 19, 15),
    endDate: new Date(2021, 9, 19, 17),
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
    startDate: new Date(2021, 9, 19, 14),
    endDate: new Date(2021, 9, 19, 16),
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
    startDate: new Date(2021, 9, 19, 16),
    endDate: new Date(2021, 9, 19, 18),
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
    startDate: new Date(2021, 9, 19, 16),
    endDate: new Date(2021, 9, 19, 17),
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
    startDate: new Date(2021, 9, 19, 17),
    endDate: new Date(2021, 9, 19, 18),
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
      <TimeLineSection data={data} />
    </Box>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
