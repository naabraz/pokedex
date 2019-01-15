import React from 'react'
import renderer from 'react-test-renderer'

import Regions from '.'

describe('Regions component test', () => {
  it('Should render component correctly', () => {
    const regionsList = [{ name: 'kantoo' }, { name: 'johto' }]
    const regions = renderer.create(<Regions regions={regionsList} />).toJSON()
    expect(regions).toMatchSnapshot()
  })
})
