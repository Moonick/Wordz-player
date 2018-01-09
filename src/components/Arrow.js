import React, { Component } from 'react'
import { Image } from 'react-native';
import arrowSrc from '../../images/ic_keyboard_backspace_3x.png'
import firstArrowSrc from '../../images/ic_keyboard_arrow_up_3x.png'
import {
    LEFT_ARROW,
    RIGTH_ARROW,
    TOP_ARROW,
    TOP_LEFT_ARROW,
    TOP_RIGTH_ARROW,
    BOTTOM_ARROW,
    BOTTOM_LEFT_ARROW,
    BOTTOM_RIGTH_ARROW,
    LAST_ARROW
} from '../constants/resultScreen'

export default class Arrow extends Component {
    getArrowDegree() {
        const { type } = this.props

        switch(type) {
            case LEFT_ARROW:
                return '-90deg'
            case RIGTH_ARROW:
                return '90deg'
            case TOP_ARROW:
                return '0deg'
            case TOP_LEFT_ARROW:
                return '-45deg'
            case TOP_RIGTH_ARROW:
                return '45deg'
            case BOTTOM_ARROW:
                return '180deg'
            case BOTTOM_LEFT_ARROW:
                return '-135deg'
            case BOTTOM_RIGTH_ARROW:
                return '135deg'
            default:
                return '0deg'
        }
    }

    getArrowSrc() {
        const { isFirstArrow, type } = this.props

        if (isFirstArrow) {
            return firstArrowSrc
        } else if (type === LAST_ARROW) {
            return arrowSrc
        } else {
            return arrowSrc
        }
    }

    render() {
        return (
            <Image style={{transform: [{rotate: this.getArrowDegree()}]}} source={this.getArrowSrc()} /> 
        )
    }
}
