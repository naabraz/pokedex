import React from 'react'
import renderer from 'react-test-renderer'

import SpringAnimatedView from '.'

describe('SpringAnimatedView component test', () => {
  it('Should render component correctly', () => {
    const animatedView = renderer.create(<SpringAnimatedView />).toJSON()
    expect(animatedView).toMatchSnapshot()
  })
})
