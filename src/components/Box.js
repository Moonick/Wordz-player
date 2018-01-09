import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';

export default class Box extends Component {

    render() {
        const { children } = this.props

        return (
            <View style={styles.box}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'transparent',
        backgroundColor: '#c2a3cc',
        shadowColor: '#000',
        shadowOffset: { width: 0.3, height: 0.3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        margin: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})