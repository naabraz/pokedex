import React from 'react'
import PropTypes from 'prop-types'

import {
  WrapperView,
  ContentView,
} from './style'

const Wrapper = props => (
  <WrapperView>
    <ContentView>
      {props.children}
    </ContentView>
  </WrapperView>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

export default Wrapper
