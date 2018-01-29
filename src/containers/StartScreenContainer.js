import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, StyleSheet, TextInput, Text, Button } from 'react-native'
import { Matrix } from '../components'
import { inputLetters } from '../actions/startScreen'
import { matrixToStr } from '../utils'

class StartScreenContainer extends Component {
    render() {
        const { matrixOfLetters, inputLetters, navigation, isOpenResultScreen } = this.props
        const letters = matrixToStr(matrixOfLetters)

        return (
            <View style={styles.container}>
                <Matrix matrix={matrixOfLetters} />
                {isOpenResultScreen ?
                    null :
                    <TextInput
                        ref={(textInput) => this.textInput = textInput}
                        style={styles.inputStyle}
                        value={letters}
                        maxLength={16}
                        autoFocus={true}
                        onBlur={() => this.textInput.focus()}
                        onChangeText={(text)=> inputLetters(text)}
                    />
                }
                {letters.length === 16 ?
                    <Button
                        onPress={() => navigation.navigate('Result')}
                        title="Go to results"
                    /> :
                    null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(50, 108, 167)'
    },
    inputStyle: {
        opacity: 0
    }
})

export default connect(
    ({startScreen, resultScreen}) => ({
        matrixOfLetters: startScreen.matrixOfLetters,
        isOpenResultScreen: resultScreen.isOpenResultScreen
    }),
    dispatch => bindActionCreators({
        inputLetters
    }, dispatch)
)(StartScreenContainer)