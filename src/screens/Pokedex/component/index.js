import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  PokedexList,
  PokemonView,
  PokemonImage,
} from '../style'

import { kantoImages } from 'assets/pokemon/kanto'

const Pokedex = props => {
  const { pokedex, region } = props

  const getImage = (num) => {
    if (region === 'kanto') return kantoImages['pokemonImage' + num]
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
  region: PropTypes.string,
}

export default Pokedex
