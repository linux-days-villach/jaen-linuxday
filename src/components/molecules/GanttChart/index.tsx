//#region > Imports

import * as React from 'react'
import * as d3 from 'd3'
import GanttStyle from './style'
import {dataType, categoryCountType} from './types'

//#endregion

const data: dataType[] = [
  {
    category: 'security',
    startDate: new Date(2021, 9, 14, 1),
    endDate: new Date(2021, 9, 14, 2),
    title: 'About some shit and'
  },
  {
    category: 'security',
    startDate: new Date(2021, 9, 14, 1),
    endDate: new Date(2021, 9, 14, 2),
    title: 'About some shit'
  },
  {
    category: 'security',
    startDate: new Date(2021, 9, 14, 1),
    endDate: new Date(2021, 9, 14, 2),
    title: 'About some shit'
  },
  {
    category: 'franz',
    startDate: new Date(2021, 9, 14, 3),
    endDate: new Date(2021, 9, 14, 4),
    title: 'About some shit'
  },
  {
    category: 'herbert',
    startDate: new Date(2021, 9, 14, 5),
    endDate: new Date(2021, 9, 14, 6),
    title: 'About some shit'
  },
  {
    category: 'friedrich',
    startDate: new Date(2021, 9, 13, 6),
    endDate: new Date(2021, 9, 13, 7),
    title: 'About some shit'
  }
]

//#region Utils

// only push unique categories in categories array
const uniqueCategories = (data: dataType[]) => {
  const categories: string[] = []
  for (const d of data) {
    if (!categories.includes(d.category)) {
      categories.push(d.category)
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
    .domain([new Date().setHours(0), new Date().setHours(10)])
    .range([paddingX, width - paddingX])
    .nice()

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
    let categoryCount: categoryCountType = {}

    for (const category of categories) {
      categoryCount[category] = 0
    }
    const categoryheigth = (height - 20) / categories.length

    const eventHeigth = (height - 20) / categories.length / 4
    const eventGap = (categoryheigth - eventHeigth * 3) / 4

    const tooltip = d3
      .select('body')
      .append('div')
      .attr('className', 'tooltip')
      .style('opacity', 0)

    for (let i = 0; i < data.length; i++) {
      const html =
        data[i].title +
        '<br/>' +
        data[i].startDate.toLocaleTimeString().substring(0, 4) +
        ' - ' +
        data[i].endDate.toLocaleTimeString().substring(0, 4)
      const y =
        categoryheigth * categories.indexOf(data[i].category) +
        eventHeigth * categoryCount[data[i].category] +
        eventGap * (categoryCount[data[i].category] + 1)
      svgElement
        .append('rect')
        .attr('x', axisScale(data[i].startDate))
        .attr('y', (d = data[i]) => {
          categoryCount[d.category] = categoryCount[d.category] + 1
          return y
        })
        .attr('width', (d = data[i]) => {
          return axisScale(d.endDate) - axisScale(d.startDate)
        })
        .attr('height', eventHeigth)
        .attr('fill', (d = data[i]) => {
          return colorScale(d.category)
        })
        .attr('stroke', 'black')
        .attr('stroke-width', '0.5px')
        .attr('rx', 4)
        .attr('ry', 4)
        .on('mouseenter', () => {
          tooltip
            .html(html)
            .style('position', 'absolute')
            .style('top', (y + eventHeigth).toString() + 'px')
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
        .on('mouseenter', () => {
          tooltip
            .html(html)
            .style('position', 'absolute')
            .style('top', (y + eventHeigth).toString() + 'px')
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
