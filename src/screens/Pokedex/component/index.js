import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  PokedexList,
  PokemonView,
  PokemonName,
  PokemonImage,
} from '../style'
import { pokeNumber001 } from 'assets/pokemon'
import { capitalize } from 'helpers'

const Pokedex = props => {
  const { pokedex } = props

  return (
    <Wrapper>
      <PokedexList
        data={pokedex}
        numColumns={2}
        renderItem={({ item }) =>
          <PokemonView>
            <PokemonImage source={pokeNumber001} />
            <PokemonName>
              {capitalize(item.name)}
            </PokemonName>
          </PokemonView>}
        keyExtractor={({ name }) => name} />
    </Wrapper>
  )
}

Pokedex.propTypes = {
  pokedex: PropTypes.array,
}

export default Pokedex
