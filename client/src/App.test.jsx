import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.jsx';
import Slider from './Slider.jsx';

describe('App', () => {
  test('should render', () => {
    const wrapper = shallow( <App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
