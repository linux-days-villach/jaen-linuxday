//#region > Imports

import * as React from 'react'
import * as d3 from 'd3'
import GanttStyle from './style'
import {DataType, RoomAndTimesType, GanttProps} from './types'

//#endregion

//#region Utils
let categoriesAndTimes: RoomAndTimesType = {}

/* only push unique categories and times */
const setUniqueCategoriesAndTimes = (data: DataType[]) => {
  for (const d of data) {
    let changed = false
    if (!(d.room in categoriesAndTimes)) {
      changed = true
      categoriesAndTimes[d.room] = [
        {
          startTime: d.startDate,
          endTime: d.endDate,
          count: 1,
          timesCalled: 0
        }
      ]
    } else {
      for (let i = 0; i < categoriesAndTimes[d.room].length; i++) {
        if (
          (d.startDate < categoriesAndTimes[d.room][i].endTime &&
            d.startDate >= categoriesAndTimes[d.room][i].startTime) ||
          (d.endDate <= categoriesAndTimes[d.room][i].endTime &&
            d.endDate > categoriesAndTimes[d.room][i].startTime) ||
          (d.startDate < categoriesAndTimes[d.room][i].startTime &&
            d.endDate > categoriesAndTimes[d.room][i].endTime)
        ) {
          changed = true
          const startTime =
            categoriesAndTimes[d.room][i].startTime > d.startDate
              ? d.startDate
              : categoriesAndTimes[d.room][i].startTime
          const endTime =
            categoriesAndTimes[d.room][i].endTime < d.endDate
              ? d.endDate
              : categoriesAndTimes[d.room][i].endTime
          categoriesAndTimes[d.room][i] = {
            ...categoriesAndTimes[d.room][i],
            startTime: startTime,
            endTime: endTime,
            count: categoriesAndTimes[d.room][i].count + 1
          }
        }
      }
    }
    if (!changed) {
      categoriesAndTimes[d.room].push({
        startTime: d.startDate,
        endTime: d.endDate,
        count: 1,
        timesCalled: 0
      })
    }
  }
}

/* Get the y position of the EventRect */
/* TODO
 * Rewrite function and RoomsAndTimesType interface to check whether the event can fit next to the last event.
 * This could be achieved by adding an optional startDate and endDate to the type.
 */
const getRoomTimeTimesCalled = (
  room: string,
  startDate: Date,
  endDate: Date
) => {
  for (const timeCount of categoriesAndTimes[room]) {
    if (
      startDate <= timeCount.endTime &&
      startDate >= timeCount.startTime &&
      endDate <= timeCount.endTime &&
      endDate >= timeCount.startTime
    ) {
      categoriesAndTimes[room][categoriesAndTimes[room].indexOf(timeCount)]
        .timesCalled++

      return timeCount.timesCalled
    }
  }
}

//#endregion

const GanttChart = ({data}: GanttProps) => {
  //#region Setup

  const ref = React.useRef(null)
  const [width, setWidth] = React.useState(document.documentElement.clientWidth)
  const [height, setHeight] = React.useState(
    document.documentElement.clientHeight / 1.5
  )
  const paddingX = 20
  const currentTime = new Date()

  const axisScale = d3
    .scaleTime()
    .domain([new Date().setHours(14), new Date().setHours(23)])
    .range([paddingX, width - paddingX])
    .nice()

  setUniqueCategoriesAndTimes(data)
  console.log(categoriesAndTimes)
  const categories = Object.keys(categoriesAndTimes)
  const colorScale = d3.scaleOrdinal().domain(categories).range(d3.schemePaired)

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
      .style('font-size', '12px')

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

    /* draw event rects */
    const categoryheigth = (height - 20) / categories.length

    const eventHeigth = (height - 20) / categories.length / 5
    const eventGap = (categoryheigth - eventHeigth * 4) / 5

    const tooltip = d3
      .select('body')
      .append('div')
      .attr('className', 'tooltip')
      .style('opacity', 0)

    for (let i = 0; i < data.length; i++) {
      const count = getRoomTimeTimesCalled(
        data[i].room,
        data[i].startDate,
        data[i].endDate
      )
      let html =
        data[i].title +
        '<br/>' +
        data[i].startDate.toLocaleTimeString().substring(0, 4) +
        ' - ' +
        data[i].endDate.toLocaleTimeString().substring(0, 4) +
        '<br/>Beschreibung:<br/>' +
        data[i].description +
        '<br/>Sprecher:<br/>'
      for (const speaker of data[i].speakers) {
        html += `${speaker.name}<br/>${speaker.bio}<br/>`
      }
      const y =
        categoryheigth * categories.indexOf(data[i].room) +
        eventHeigth * (count - 1) +
        eventGap * count
      svgElement
        .append('rect')
        .attr('x', axisScale(data[i].startDate))
        .attr('y', () => {
          return y
        })
        .attr('width', (d = data[i]) => {
          return axisScale(d.endDate) - axisScale(d.startDate)
        })
        .attr('height', eventHeigth)
        .attr('fill', () => {
          return colorScale(data[i].room)
        })
        .attr('stroke', 'black')
        .attr('stroke-width', '0.5px')
        .attr('rx', 4)
        .attr('ry', 4)
        .on('mouseover', () => {
          tooltip
            .html(html)
            .style('position', 'absolute')
            .style('top', (y + eventHeigth + 5).toString() + 'px')
            .style('left', axisScale(data[i].startDate).toString() + 'px')
            .style('background-color', '#ff6961')
            .style('border-radius', '5px')
            .style('border-width', '1px')
            .style('border-color', 'black')
            .style('padding', '10px')
          tooltip.transition().duration(50).style('opacity', 1)
        })
        .on('mouseleave', () => {
          tooltip.transition().duration(50).style('opacity', 0)
        })

      /* draw event title */
      svgElement
        .append('text')
        .text(data[i].title)
        .attr(
          'x',
          axisScale(data[i].startDate) +
            (axisScale(data[i].endDate) - axisScale(data[i].startDate)) / 2
        )
        .attr('y', y + eventHeigth / 2 + 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .on('mouseover', () => {
          tooltip
            .html(html)
            .style('position', 'absolute')
            .style('top', (y + eventHeigth + 5).toString() + 'px')
            .style('left', axisScale(data[i].startDate).toString() + 'px')
            .style('background-color', '#ff6961')
            .style('border-radius', '5px')
            .style('border-width', '1px')
            .style('border-color', 'black')
            .style('padding', '10px')
          tooltip.transition().duration(50).style('opacity', 1)
        })
        .on('mouseleave', () => {
          tooltip.transition().duration(50).style('opacity', 0)
        })
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
      .attr('className', 'ellapsed-time')

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
      .attr('className', 'ellapsed-time')
      .style('pointer-events', 'none')
  }, [width, height])

  //#endregion

  return (
    <GanttStyle>
      <svg ref={ref} width={width} height={height} />
      <div id="tag" className="tag" />
    </GanttStyle>
  )
}

export default GanttChart
