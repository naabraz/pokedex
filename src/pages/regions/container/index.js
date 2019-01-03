import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { handleReceiveRegions } from '../actions'
import Regions from '../component'

class RegionsContainer extends Component {
  componentDidMount () {
    this.props.fetchRegions()
  }

  render () {
    const { regions } = this.props

    return (
      <Regions regions={regions} />
    )
  }
}

function mapStateToProps ({ regions }) {
  return {
    regions,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchRegions: () => dispatch(handleReceiveRegions()),
  }
}

RegionsContainer.propTypes = {
  fetchRegions: PropTypes.func,
  regions: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionsContainer)
