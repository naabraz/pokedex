import { headers } from 'config'

export const fetchRegionDetails = async (url) => {
  const regionDetails = await fetch(url, { headers })

  return regionDetails
}
