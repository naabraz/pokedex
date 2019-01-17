import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  PokedexList,
  PokemonView,
  PokemonName,
  PokemonImage,
} from '../style'
import * as pokemon from 'assets/pokemon'

const Pokedex = props => {
  const { pokedex } = props

  return (
    <Wrapper>
      <PokedexList
        data={pokedex}
        numColumns={2}
        renderItem={({ item }) =>
          <PokemonView>
            <PokemonImage source={pokemon.pokemonImage001} />
            <PokemonName>
              {item.number}
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
