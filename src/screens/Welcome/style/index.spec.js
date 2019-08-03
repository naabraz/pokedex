import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components/native'

import {
  WelcomeText,
} from './index'

describe('Testing Welcome component style', () => {
  it('Should render WelcomeText correctly', () => {
    const welcomeText = renderer.create(<WelcomeText />).toJSON()
    expect(welcomeText).toHaveStyleRule('font-size', 36)
  })
})
