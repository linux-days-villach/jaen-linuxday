//#region > Imports

import * as React from 'react'
import * as d3 from 'd3'
import GanttStyle from './style'
import {dataType} from './types'

//#endregion

const data: dataType[] = [
  {
    categorie: 'security',
    startDate: new Date(2021, 10, 12, 17),
    endDate: new Date(2021, 10, 12, 18)
  },
  {
    categorie: 'franz',
    startDate: new Date(2021, 10, 12, 17),
    endDate: new Date(2021, 10, 12, 18)
  },
  {
    categorie: 'herbert',
    startDate: new Date(2021, 10, 12, 17),
    endDate: new Date(2021, 10, 12, 18)
  },
  {
    categorie: 'friedrich',
    startDate: new Date(2021, 10, 12, 17),
    endDate: new Date(2021, 10, 12, 18)
  }
]

//#region Utils

// only push unique categories in categories array
const uniqueCategories = (data: dataType[]) => {
  const categories: string[] = []
  for (const d of data) {
    if (!categories.includes(d.categorie)) {
      categories.push(d.categorie)
    }
  }
  return categories
}

//#endregion

const GanttChart = () => {
  //#region Setup

  const ref = React.useRef(null)
  const [width, setWidth] = React.useState(document.documentElement.clientWidth)
  const [height, setHeight] = React.useState(
    document.documentElement.clientHeight / 1.5
  )
  const paddingX = 20
  const currentTime = new Date()
  const categories = uniqueCategories(data)

  const axisScale = d3
    .scaleTime()
    .domain([new Date().setHours(17), new Date().setHours(24)])
    .range([paddingX, width - paddingX])
    .nice()

  const colorScale = d3.scaleOrdinal().domain(categories).range(d3.schemeSet3)

  //#endregion

  //#region Draw

  React.useEffect(() => {
    const svgElement = d3.select(ref.current)

    /* draw x-axis */
    svgElement
      .append('g')
      .attr('className', 'axis')
      .attr('transform', `translate(0,${height - 20})`)
      .call(
        d3
          .axisBottom(axisScale)
          .ticks(
            d3.utcMinute.every(width < 1500 ? 60 : 30),
            d3.utcFormat('%H:%M')
  )
          .tickSize(-height)
      )

    /* draw background colorrects */
    for (let i = 0; i < categories.length; i++) {
      svgElement
    .append('rect')
        .attr('x', paddingX)
        .attr('y', i * ((height - 20) / categories.length))
        .attr('width', width - 40)
        .attr('height', (height - 20) / categories.length)
        .attr('fill', (d = categories[i]) => {
          return colorScale(d)
    })
        .attr('opacity', 0.4)
        }

    /* draw ellapsed time area */
    svgElement
      .append('line')
      .attr(
        'x1',
        axisScale(currentTime) > width
          ? width - paddingX
          : axisScale(currentTime)
      )
      .attr('y1', 0)
      .attr(
        'x2',
        axisScale(currentTime) > width
          ? width - paddingX
          : axisScale(currentTime)
      )
      .attr('y2', height - 20)
      .style('stroke-width', 2)
      .style('stroke', 'red')

    svgElement
    .append('rect')
      .attr('x', paddingX)
      .attr('y', 0)
      .attr(
        'width',
        axisScale(currentTime) - paddingX > width - paddingX
          ? width - 40
          : axisScale(currentTime) - paddingX
      )
      .attr('height', height - 20)
      .attr('fill', 'red')
      .attr('opacity', 0.2)

        }
  }, [width, height])

  //#endregion

      return (
    <GanttStyle>
      <svg ref={ref} width={width} height={height} />
    </GanttStyle>
      )
      }
      var output = document.getElementById('tag')

export default GanttChart
