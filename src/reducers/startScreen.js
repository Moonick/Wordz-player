import { INPUT_LETTERS } from '../constants/startScreen'
import { strToMatrix } from '../utils'

const initialState = { matrixOfLetters: [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']] }

export default (state = initialState,  { type, payload }) => {

    switch (type) {
        case INPUT_LETTERS:
            return { ...state, matrixOfLetters: strToMatrix(payload.toLowerCase().replace(/[^a-zа-я]/g, ''))}
        default:
            return state
    }
}