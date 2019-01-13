import React, { Component } from 'react'

import { fetchRegions } from '../api'
import Regions from '../component'

class RegionsContainer extends Component {
  state = {
    regions: [],
  }

  async componentDidMount () {
    const { results } = await fetchRegions()
    this.setState({ regions: results })
  }

  render () {
    const { regions } = this.state

    return (
      <Regions regions={regions} />
    )
  }
}

export default RegionsContainer
