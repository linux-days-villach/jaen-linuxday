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

  const axisScale = d3
    .scaleTime()
    .domain([new Date().setHours(17), new Date().setHours(24)])
    .range([paddingX, width - paddingX])
    .nice()

makeGant(taskArray, w, h)

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

function drawRects(
  theArray,
  theGap,
  theTopPad,
  theSidePad,
  theBarHeight,
  theColorScale,
  w,
  h
) {
  var bigRects = svg
    .append('g')
    .selectAll('rect')
    .data(theArray)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', function (d, i) {
      return i * theGap + theTopPad - 2
    })
    .attr('width', function (d) {
      return w - theSidePad / 2
    })
    .attr('height', theGap)
    .attr('stroke', 'none')
    .attr('fill', function (d) {
      for (var i = 0; i < categories.length; i++) {
        if (d.type == categories[i]) {
          return d3.rgb(theColorScale(i))
        }
      }
    })
    .attr('opacity', 0.2)

  var rectangles = svg.append('g').selectAll('rect').data(theArray).enter()

  var innerRects = rectangles
    .append('rect')
    .attr('rx', 3)
    .attr('ry', 3)
    .attr('x', function (d) {
      return timeScale(dateFormat.parse(d.startTime)) + theSidePad
    })
    .attr('y', function (d, i) {
      return i * theGap + theTopPad
    })
    .attr('width', function (d) {
      return (
        timeScale(dateFormat.parse(d.endTime)) -
        timeScale(dateFormat.parse(d.startTime))
      )
    })
    .attr('height', theBarHeight)
    .attr('stroke', 'none')
    .attr('fill', function (d) {
      for (var i = 0; i < categories.length; i++) {
        if (d.type == categories[i]) {
          return d3.rgb(theColorScale(i))
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
