import styled from 'styled-components/native'

import { whiteSmoke } from 'themes'

export const PokedexList = styled.FlatList`
`

export const PokemonView = styled.View`
  background-color: ${whiteSmoke}
  width: 45%
  margin: 5px
  align-items: center
  border-radius: 5px
  padding-top: 10px
  padding-bottom: 10px
`

export const PokemonImage = styled.Image`
  width: 64
  height: 64
`

export const PokemonName = styled.Text`
`
