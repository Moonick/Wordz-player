import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Dimensions, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { compose, pluck, sortBy, prop, reduce } from 'ramda'
import { Box, Letter, Arrow, WordPath } from '.'
import arrowSrc from '../../images/ic_keyboard_arrow_up_3x.png'
import { getArrowType } from '../utils'

export default class Matrix extends Component {
    constructor() {
        super()

    }
    
    componentWillMount() {
      const { height } = Dimensions.get('window')

      this.setState({ width: height / 3 })
    }

  renderColumn(element) {
    const { coords } = this.props

      return (
        <View style={{ flex: 1 }}>
            <Box>
              {typeof element === 'string' ?
                <Letter letter={element} /> :
                null
              }
            </Box>
        </View>
      )
  }

  renderRow(row) {
    return (
      <View style={styles.row}>
        {row.map(x => this.renderColumn(x))}
      </View>
    )
  }

  render() {
    const { matrix, coords } = this.props
    const { width } = this.state

    return (
      <View style={[ styles.matrix, { width, height: width }]}>
        {matrix.map(row => this.renderRow(row))}
        {coords ?
          <View style={{ position: 'absolute' }}>
            <WordPath width={width} coords={coords} />
          </View>:
          null
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  matrix: {
    display: 'flex'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
})
