import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  PokedexList,
  PokemonView,
  PokemonName,
} from '../style'

import { capitalize } from 'helpers'

const Pokedex = props => {
  const { pokedex } = props

  return (
    <Wrapper>
      <PokedexList
        data={pokedex}
        numColumns={3}
        renderItem={({ item }) =>
          <PokemonView>
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
