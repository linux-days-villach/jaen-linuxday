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

export interface RoomAndTimesType {
  [category: string]: [
    {
      startTime: Date
      endTime: Date
      count: number
      timesCalled: number
    }
  ]
}

export interface GanttProps {
  data: DataType[]
}
