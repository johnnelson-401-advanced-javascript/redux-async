import React from 'react';
import { shallow } from 'enzyme';
import App from './app';


describe('App component', () => {
  it('Renders and App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapShot();
  });
  
});
