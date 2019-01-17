import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  PokedexList,
  PokemonView,
  PokemonImage,
} from '../style'

import { IMAGES } from 'assets/pokemon'

const Pokedex = props => {
  const { pokedex } = props

  const getImage = (num) => {
    return IMAGES['pokemonImage' + num]
  }

  return (
    <Wrapper>
      <PokedexList
        data={pokedex}
        numColumns={2}
        renderItem={({ item }) =>
          <PokemonView>
            <PokemonImage source={getImage(item.number)} />
          </PokemonView>}
        keyExtractor={({ name }) => name} />
    </Wrapper>
  )
}

Pokedex.propTypes = {
  pokedex: PropTypes.array,
}

export default Pokedex
