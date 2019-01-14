import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  getPokedex,
} from '../api'
import Pokedex from '../component'

class PokedexContainer extends Component {
  state = {
    pokedex: [],
  }

  formatPokedex (pokedex) {
    return pokedex.map((pokemon) => {
      const { entry_number, pokemon_species } = pokemon
      return { number: entry_number, ...pokemon_species }
    })
  }

  async componentDidMount () {
    const detailURL = this.props.navigation.getParam('detailURL')
    const pokedex = this.formatPokedex(await getPokedex(detailURL))

    this.setState({ pokedex })
  }

  render () {
    const { pokedex } = this.state

    return (
      <Pokedex pokedex={pokedex} />
    )
  }
}

PokedexContainer.propTypes = {
  navigation: PropTypes.object,
}

export default PokedexContainer
