import React from 'react'
import renderer from 'react-test-renderer'

import { shallow } from 'enzyme'

import Welcome from './Welcome'

describe('Welcome component test', () => {
  it('Should render component correctly', () => {
    const welcome = renderer.create(<Welcome />).toJSON()
    expect(welcome).toMatchSnapshot()
  })

  it('Should shallow', () => {
    const wrapper = shallow(<Welcome />)
  })
})