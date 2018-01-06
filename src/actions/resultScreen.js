import {
    SET_RESULT_IS_OPEN,
    SET_SOLUTIONS
} from '../constants/resultScreen'

export const setResultIsOpen = (isOpen) => {
   return {
        type: SET_RESULT_IS_OPEN,
        payload: isOpen
   } 
}

export const setSolutions = (solutions) => {
    return {
        type: SET_SOLUTIONS,
        payload: solutions
    }
}