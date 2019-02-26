// @flow

import React, { Component } from 'react'
import { Animated } from 'react-native'

const ISprinAnimated = {
  childen: Object,
}

class SpringAnimatedView extends Component<ISprinAnimated> {
  state = {
    springValue: new Animated.Value(0.3),
  }

  componentDidMount () {
    const { springValue } = this.state
    const springConfig = {
      toValue: 1,
      friction: 2,
    }

    springValue.setValue(0.3)
    Animated.spring(springValue, springConfig).start()
  }

  render () {
    const { springValue } = this.state
    const { children } = this.props

    return (
      <Animated.View style={{ transform: [{ scale: springValue }] }}>
        {children}
      </Animated.View>
    )
  }
}

export default SpringAnimatedView
