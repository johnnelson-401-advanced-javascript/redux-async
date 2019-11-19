import React from 'react';
import { shallow } from 'enzyme';
import App from './app';


describe('App component', () => {
  it('Renders and App component', () => {
    const characters = [{
      _id: '123',
      name: 'name',
      photoUrl: 'nope'
    }];
    const wrapper = shallow(<App characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
