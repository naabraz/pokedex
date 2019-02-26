// @flow

import React, { Component } from 'react'

import { getPokedex } from '../api'
import Pokedex from '../component'

const IPokedexContainer = {
  pokedex: Array,
  region: String,
}

class PokedexContainer extends Component<IPokedexContainer> {
  state = {
    pokedex: [],
    region: '',
  }

  formatPokedex (pokedex) {
    return pokedex.map((pokemon) => {
      const { entry_number, pokemon_species } = pokemon
      return { number: entry_number, ...pokemon_species }
    })
  }

  async componentDidMount () {
    const detailURL = this.props.navigation.getParam('detailURL')
    const region = this.props.navigation.getParam('region')
    const pokedex = this.formatPokedex(await getPokedex(detailURL))

    this.setState({ pokedex, region })
  }

  render () {
    const { pokedex, region } = this.state

    return (
      <Pokedex pokedex={pokedex} region={region} />
    )
  }
}

export default PokedexContainer
