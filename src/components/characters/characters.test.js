import React from 'react';
import { shallow } from 'enzyme';
import Characters from './characters';

describe('Characters list component', () => {
  it('renders a list of characters', () => {
    const characters = [{
      _id: '123',
      name: 'name',
      photoUrl: 'nope'
    }];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
