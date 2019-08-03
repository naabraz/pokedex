import {
  headers,
  url,
} from 'config'

export const fetchRegions = () =>
  fetch(`${url}/region`, {
    headers,
  })
    .then(res => res.json())
    .then(data => data)
    .catch((e) => new Error(e))
