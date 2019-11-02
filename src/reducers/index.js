import {
  combineReducers
} from 'redux'
import counter from './counter'
import githubInfo from './github'

export default combineReducers({
  counter,
  githubInfo
})
