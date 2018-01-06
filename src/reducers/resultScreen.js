import {
    SET_RESULT_IS_OPEN,
    SET_SOLUTIONS
} from '../constants/resultScreen'
import { sortBy } from 'ramda'

const initialState = {
    isOpenResultScreen: false,
    solutions: []
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_SOLUTIONS:
            return { ...state, solutions: sortBy(({word}) => - word.length, payload) }
        case SET_RESULT_IS_OPEN:
            return { ...state, isOpenResultScreen: payload }
        default:
            return state
    }
}