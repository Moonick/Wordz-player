import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import { Matrix } from '../components'
import { setResultIsOpen, setSolutions } from '../actions/resultScreen'
import getSolutions from '../matrix'
import { matrixOfCoords } from '../utils'

class ResultScreenContainer extends Component {
    componentDidMount() {
        const { setResultIsOpen, matrixOfLetters, setSolutions } = this.props

        setResultIsOpen(true)
        setSolutions(getSolutions(matrixOfLetters))
    }

    componentWillUnmount() {
        const { setResultIsOpen } = this.props

        setResultIsOpen(false)
    }

    renderMatrix({item: { word, coords }}) {
        return ( 
            <View>
                <Matrix matrix={matrixOfCoords(coords)} shouldAnimate />
                <Text>{word}</Text>
            </View>
        )
    }

    render() {
        const { solutions } = this.props

        return (
            <FlatList
                data={solutions}
                renderItem={this.renderMatrix}
            />
        )
    }
}

export default connect(
    ({ startScreen, resultScreen }) => ({
        matrixOfLetters: startScreen.matrixOfLetters,
        solutions: resultScreen.solutions
    }),
    dispatch => bindActionCreators({
        setResultIsOpen,
        setSolutions
    }, dispatch)
)(ResultScreenContainer)