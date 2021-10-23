//#region > Imports

import * as React from 'react'
import * as d3 from 'd3'
import GanttStyle from './style'
import {DataType, RoomAndTimesType, GanttProps} from './types'
import {scroller} from 'react-scroll'

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
      if (!('individualDates' in timeCount)) {
        categoriesAndTimes[room][
          categoriesAndTimes[room].indexOf(timeCount)
        ].individualDates = [{startTime: startDate, endTime: endDate}]
      } else {
        let index = -1
        for (const dateObj of timeCount.individualDates) {
          if (startDate >= dateObj.endTime && index === -1) {
            index = timeCount.individualDates.indexOf(dateObj) + 1
          } else if (
            startDate <= dateObj.endTime &&
            startDate >= dateObj.startTime &&
            endDate <= dateObj.endTime &&
            endDate >= dateObj.startTime
          ) {
            index = -1
          }
        }
        categoriesAndTimes[room][
          categoriesAndTimes[room].indexOf(timeCount)
        ].individualDates.push({startTime: startDate, endTime: endDate})
        if (index > -1) {
          return index
        }
      }

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
        '<b>' +
        data[i].title +
        '</b>' +
        '<br/>' +
        data[i].startDate.toLocaleTimeString().substring(0, 4) +
        ' - ' +
        data[i].endDate.toLocaleTimeString().substring(0, 4) +
        '<br /><b>Beschreibung:</b><br/>' +
        data[i].description +
        '<br/><b>Sprecher:</b><br/>'
      for (const speaker of data[i].speakers) {
        html += `${speaker.name}<br/>${speaker.bio}<br/>`
      }
      html += '<b>Tags:</b><br/>'
      for (let j = 0; j < data[i].tags.length; j++) {
        html += data[i].tags[j] + (j === data[i].tags.length - 1 ? '' : ', ')
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
        .style('cursor', 'pointer')
        .on('mouseenter', () => {
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
            .style('width', '380px')
          tooltip.transition().duration(50).style('opacity', 1)
        })
        .on('mouseleave', () => {
          tooltip.transition().duration(50).style('opacity', 0)
        })
        .on('click', () => {
          scroller.scrollTo(`${i}`, {smooth: true, offset: -50})
        })

      /* draw event title */
      svgElement
        .append('text')
        .text(() => {
          let text = data[i].title
          const hours =
            (data[i].endDate.getTime() - data[i].startDate.getTime()) / 3600000

          if (text.length >= 20 * hours) {
            text = text.substring(0, 20 * hours).concat('...')
          }

          return text
        })
        .attr(
          'x',
          axisScale(data[i].startDate) +
            (axisScale(data[i].endDate) - axisScale(data[i].startDate)) / 2
        )
        .attr('y', y + eventHeigth / 2 + 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .style('cursor', 'pointer')
        .on('mouseenter', () => {
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
        .on('click', () => {
          scroller.scrollTo(`${i}`, {smooth: true, offset: -50})
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
