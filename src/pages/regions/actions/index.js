import { fetchRegions } from '../api'

export const RECEIVE_REGIONS = 'RECEIVE_REGIONS'

function receiveRegions (regions) {
  return {
    type: RECEIVE_REGIONS,
    regions,
  }
}

export function handleReceiveRegions () {
  return (dispatch) => {
    fetchRegions()
      .then(({ results }) => {
        dispatch(receiveRegions(results))
      })
  }
}
