import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { compose, pluck, sortBy, prop, reduce } from 'ramda'
import { Letter } from '.'

export default class Matrix extends Component {
    constructor() {
        super()

        this.state = { markerTop: new Animated.Value(0), markerLeft: new Animated.Value(0) }
    }
    
    componentWillMount() {
        const { shouldAnimate } = this.props

        if (shouldAnimate) {
            const { matrix } = this.props

            const animations = compose(
                pluck('animation'),
                sortBy(prop('number')),
                matrix => matrix.reduce((animations, row, rowIndex) => {
                    row.forEach((x, columnIndex) => {
                        if (typeof x === 'number') {
                            animations.push({
                                number: x,
                                animation: Animated.parallel([
                                    Animated.timing(this.state.markerTop, {
                                        toValue: rowIndex * 60,
                                        duration: 300
                                    }),
                                    Animated.timing(this.state.markerLeft, {
                                        toValue: columnIndex * 60,
                                        duration: 300
                                    })
                                ])
                            })
                        }
                    })

                    return animations
                }, [])
            )(matrix)

            if (animations.length) {
                Animated.loop(Animated.sequence(animations)).start()
            }
        }
    }

  renderColumn(x) {
    if (typeof x === 'number') {
      return (
        <Animated.View
        >
          <Letter letter={x} />
        </Animated.View>
      )
    } else {
      return (
        <View>
          <Letter letter={x} />
        </View>
      )
    }
  }

  renderRow(row) {
    return (
      <View style={styles.row}>
        {row.map(x => this.renderColumn(x))}
      </View>
    )
  }

  render() {
    const { matrix, shouldAnimate } = this.props
    console.log(this.state)

    return (
      <View>
        {matrix.map(row => this.renderRow(row))}
        { shouldAnimate ?
            <Animated.View style={{
                backgroundColor: "#000",
                borderRadius: 60,
                width: 60,
                height: 60,
                position: 'absolute',
                top: this.state.markerTop,
                left: this.state.markerLeft
            }}/>
            : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
})
