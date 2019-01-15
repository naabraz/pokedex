import { headers } from 'config'

const getRegionPokedexURL = async (urlRegion) => {
  const response = await fetch(urlRegion, { headers })
  const { pokedexes } = await response.json()
  const { url } = pokedexes[0]

  return url
}

const getRegionPokedex = async (urlPokedex) => {
  const response = await fetch(urlPokedex, { headers })
  const { pokemon_entries } = await response.json()

  return pokemon_entries
}

export const getPokedex = async (url) => {
  const urlRegion = await getRegionPokedexURL(url)
  const pokedex = await getRegionPokedex(urlRegion)

  return pokedex
}
