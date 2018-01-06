import { combineReducers } from 'redux'
import startScreen from './startScreen'
import resultScreen from './resultScreen'

const rootReducer = combineReducers({
    startScreen,
    resultScreen
  })
  
export default rootReducer