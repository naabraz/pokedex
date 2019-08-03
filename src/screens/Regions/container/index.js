// @flow

import React, { Component } from 'react'

import { fetchRegions } from '../api'
import Regions from '../component'

type IRegionsContainer = {
  navigation: Object,
}

type State = {
  regions: Array<Object>
}

class RegionsContainer extends Component<IRegionsContainer, State> {
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
