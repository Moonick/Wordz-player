import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class Letter extends Component {

    render() {
        const { letter } = this.props

        return (
            <Text style={styles.text}>{letter ? letter.toString().toUpperCase() : ' '}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize:35,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})