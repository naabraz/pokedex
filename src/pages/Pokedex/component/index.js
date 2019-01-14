import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  PokedexList,
  PokemonView,
} from '../style'

const Pokedex = props => {
  const { pokemons } = props
  return (
    <Wrapper>
      <PokedexList
        data={pokemons}
        numColumns={3}
        renderItem={({ item }) =>
          <PokemonView>
            {'test'}
          </PokemonView>}
        keyExtractor={({ name }) => name} />
    </Wrapper>
  )
}

Pokedex.propTypes = {
  pokemons: PropTypes.array,
}

export default Pokedex
