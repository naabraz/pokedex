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

  async componentDidMount () {
    const { navigation } = this.props
    const detailURL = navigation.getParam('detailURL')
    const pokedex = await getPokedex(detailURL)

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
