import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components/native'

import { WrapperView, ContentView } from './index'

import * as color from '../../../themes'

describe('Testing Wrapper component style', () => {
  it('Should render WrapperView correctly', () => {
    const wrapperView = renderer.create(<WrapperView />).toJSON()
    expect(wrapperView).toHaveStyleRule(`background-color', ${color.red}`)
    expect(wrapperView).toHaveStyleRule('display', 'flex')
    expect(wrapperView).toHaveStyleRule('align-items', 'center')
    expect(wrapperView).toHaveStyleRule('justify-content', 'center')
    expect(wrapperView).toHaveStyleRule('height', '100%')
  })

  it('Should render ContentView correctly', () => {
    const contentView = renderer.create(<ContentView />).toJSON()
    expect(contentView).toHaveStyleRule(`background-color', ${color.lightBlue}`)
    expect(contentView).toHaveStyleRule('align-items', 'center')
    expect(contentView).toHaveStyleRule('justify-content', 'center')
    expect(contentView).toHaveStyleRule('height', '85%')
    expect(contentView).toHaveStyleRule('width', '85%')
  })
})
