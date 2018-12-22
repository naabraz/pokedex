import React from 'react'
import PropTypes from 'prop-types'

import { WrapperView } from './style'

const Wrapper = props => (
  <WrapperView>
    {props.children}
  </WrapperView>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

export default Wrapper
