// @flow

import React, { Component } from 'react'

import { fetchRegions } from '../api'
import Regions from '../component'

const IRegionsContainer = {
  navigation: Object,
}

class RegionsContainer extends Component<IRegionsContainer> {
  state = {
    regions: [],
  }

  async componentDidMount () {
    const { results } = await fetchRegions()
    this.setState({ regions: results })
  }

  render () {
    const { regions } = this.state
    const { navigation } = this.props

    return (
      <Regions regions={regions} navigation={navigation} />
    )
  }
}

export default RegionsContainer
