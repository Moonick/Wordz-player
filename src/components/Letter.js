import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class Letter extends Component {

    render() {
        const { letter } = this.props

        return (
            <View>
                <Text style={styles.box} >{letter ? letter.toString().toUpperCase() : ' '}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 5,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#b7d2ff',
        width: 83,
        height: 83,
        textAlign: 'center',
        fontSize: 30,
    }
})