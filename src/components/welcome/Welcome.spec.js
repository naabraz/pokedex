import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Welcome from './Welcome';
import { WelcomeText } from './style/index';

describe('Welcome component test', () => {
  it('Should render component correctly', () => {
    const welcome = renderer.create(<Welcome />).toJSON();
    expect(welcome).toMatchSnapshot();
  });

  it('Should render welcome title', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find(WelcomeText).children().text()).toEqual('Pokédex');
  });
});
