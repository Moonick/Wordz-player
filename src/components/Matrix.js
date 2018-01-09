import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Dimensions, Image } from 'react-native'
import { compose, pluck, sortBy, prop, reduce } from 'ramda'
import { Box, Letter, Arrow } from '.'
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
                <Arrow isFirstArrow={element === 1} type={getArrowType(coords, element)} />
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
    const { matrix } = this.props
    const { width } = this.state

    return (
      <View style={[ styles.matrix, { width, height: width }]}>
        {matrix.map(row => this.renderRow(row))}
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
