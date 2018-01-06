import { INPUT_LETTERS } from '../constants/startScreen'

export const inputLetters = (letters) => {
   return {
    type: INPUT_LETTERS,
    payload: letters
   } 
}