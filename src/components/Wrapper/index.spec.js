import React from 'react';
import renderer from 'react-test-renderer';

import Wrapper from '.';

describe('Wrapper component test', () => {
  it('Should render component correctly', () => {
    const wrapper = renderer.create(<Wrapper>This is a String</Wrapper>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
