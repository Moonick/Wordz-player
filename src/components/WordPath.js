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
    drawDot(coord, index) {
        const [cx, cy] = this.getLineCoords(coord).split(" ")
        const isFirstDot = index === 0
        const color = isFirstDot ? "red" : "black"

        return (
             <Circle
                    cx={cx}
                    cy={cy}
                    r={isFirstDot ? "10" : "5"}
                    stroke={color}
                    strokeWidth="2.5"
                    fill={color}
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
                    stroke="black"
                    strokeWidth={5}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                {coords.map((coord, index) => this.drawDot(coord, index))}
            </Svg>
        )
    }
}