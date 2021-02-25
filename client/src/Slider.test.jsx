import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-enzyme';

import Slider from './Slider.jsx';
import Product from './Product.jsx';

describe('state in Slider', () => {
  test('should have a state called left_most ', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper).toHaveState('left_most');
  })
})

// describe('props passed to Product', () => {
//   test('Should have prop called brand', () => {
//     const wrapper = shallow(<Slider />);
//     expect(wrapper.find(Product)).toHaveProp('brand');
//   })
// })

