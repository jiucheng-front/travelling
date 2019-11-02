import {
  GETGITHUB
} from '../constants/github'

const INITIAL_STATE = {
  data: {}
}

// let index = 0

export default function github(state = INITIAL_STATE, action) {
  // console.log(action, index++)
  switch (action.type) {
    case GETGITHUB:
      const { githubInfo ={} } = action.payload
      return {
        ...state,
        data: { ...githubInfo }
      }
      default:
        return state
  }
}
