import React, { Component } from 'react'

// import { fetchRegionDetails } from '../api'
import Pokedex from '../component'

class PokedexContainer extends Component {
  state = {
    pokedex: [],
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    const pokedex = [{ name: 'Test' }]
    return (
      <Pokedex pokedex={pokedex} />
    )
  }
}

export default PokedexContainer
