import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components/native'

import { WelcomeView, WelcomeText } from './index'

describe('Testing Welcome component style', () => {
  it('Should render WelcomeView correctly', () => {
    const welcomeView = renderer.create(<WelcomeView />).toJSON()
    expect(welcomeView).toHaveStyleRule('display', 'flex')
    expect(welcomeView).toHaveStyleRule('align-items', 'center')
    expect(welcomeView).toHaveStyleRule('justify-content', 'center')
    expect(welcomeView).toHaveStyleRule('background-color', '#f6bd20')
    expect(welcomeView).toHaveStyleRule('height', '100%')
  })

  it('Should render WelcomeText correctly', () => {
    const welcomeText = renderer.create(<WelcomeText />).toJSON()
    expect(welcomeText).toHaveStyleRule('font-size', 36)
  })
})
