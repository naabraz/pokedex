import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  PokedexList,
  PokemonView,
  PokemonImage,
} from '../style'

import { kantoImages } from 'assets/pokemon/kanto'
import { johtoImages } from 'assets/pokemon/johto'

const Pokedex = props => {
  const { pokedex, region } = props

  const getImage = (num) => {
    if (region === 'kanto') return kantoImages['pokemonImage' + num]
    if (region === 'johto') return johtoImages['pokemonImage' + num]
  }

  const clearPokedex = () => {
    const cleared = []
    pokedex.map((pok) => {
      if (pok.url.split('/')[6] > 150) cleared.push(pok)
    })

    return cleared
  }

  const clearedPokedex = region === 'johto' ? clearPokedex() : pokedex

  const getPokemonNumber = (url) => {
    return url.split('/')[6]
  }

  return (
    <Wrapper>
      <PokedexList
        data={clearedPokedex}
        numColumns={2}
        renderItem={({ item }) =>
          <PokemonView>
            <PokemonImage source={getImage(getPokemonNumber(item.url))} />
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
