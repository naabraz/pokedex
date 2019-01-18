import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  getPokedex,
} from '../api'
import Pokedex from '../component'

class PokedexContainer extends Component {
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

PokedexContainer.propTypes = {
  navigation: PropTypes.object,
}

export default PokedexContainer
