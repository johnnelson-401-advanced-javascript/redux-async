import React from 'react';
import { shallow } from 'enzyme';
import Character from './character';


describe('Character Display component', () => {
  it('renders a character display card', () => {
    const wrapper = shallow(<Character name={'name'} photoUrl={'nope'} />);
    expect(wrapper).toMatchSnapshot();
    
  });
  
});
