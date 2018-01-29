import React, { Component } from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

export default class WordPath extends Component {
    getLineCoords([row, col]) {
        const { width } = this.props

        const cellWidth = width / 4

        return `${cellWidth / 2 + cellWidth * col} ${cellWidth / 2 + cellWidth * row}`
    }

    drawPath() {
        const { coords } = this.props

        return coords.reduce((acc, cell) =>{
            if (acc === '') {
                return `M${this.getLineCoords(cell)}`
            }

           return acc + ` L${this.getLineCoords(cell)}`
        }, '')

    }

    drawStartingPoint() {
      const { coords } = this.props
      const [cx, cy] = this.getLineCoords(coords[0]).split(" ")

      return (
        <Circle
          cx={cx}
          cy={cy}
          r={13}
          stroke="red"
          strokeWidth={2.5}
          fill="red"
        />
      )
    }

    render() {
        const { width, coords } = this.props

        return (
            <Svg
                width={width}
                height={width}
            >
                <Path
                    d={this.drawPath()}
                    fill="none"
                    stroke="rgb(119, 174, 55)"
                    strokeWidth={15}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                {this.drawStartingPoint()}
            </Svg>
        )
    }
}
