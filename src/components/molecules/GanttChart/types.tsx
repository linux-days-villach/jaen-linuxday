interface SpeakerType {
  name: string
  bio: string
  imageSrc: string
}

export interface DataType {
  room: string
  startDate: Date
  endDate: Date
  title: string
  description: string
  speakers: SpeakerType[]
  tags: string[]
  powerpointUrl: string
  type: 'Vortrag' | 'Workshop'
}

interface StartAndEndTimeType {
  startTime: Date
  endTime: Date
}

export interface RoomAndTimesType {
  [category: string]: [
    {
      startTime: Date
      endTime: Date
      count: number
      timesCalled: number
      individualDates?: StartAndEndTimeType[]
    }
  ]
}

export interface GanttProps {
  data: DataType[]
}
