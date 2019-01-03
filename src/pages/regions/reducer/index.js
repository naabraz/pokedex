import { RECEIVE_REGIONS } from '../actions'

export default function regions (state = [], action) {
  switch (action.type) {
    case RECEIVE_REGIONS:
      return action.regions
    default:
      return state
  }
}
