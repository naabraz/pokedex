import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const { navigation } = this.props

    return (
      <Regions regions={regions} navigation={navigation} />
    )
  }
}

RegionsContainer.propTypes = {
  navigation: PropTypes.object,
}

export default RegionsContainer
