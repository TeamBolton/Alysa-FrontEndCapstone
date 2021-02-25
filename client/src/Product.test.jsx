import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'jest-enzyme';

import Product, {ProductPrice} from './Product.jsx';
import StarRating from './StarRating.jsx';

describe('img in Product', () => {
  test('Should have an image', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});

describe('styled-components in ProductPrice', () => {
  test('Should have font-size equal to 14px', () => {
    const tree = renderer.create(<ProductPrice />).toJSON();
    expect(tree).toHaveStyleRule('font-size', '14px');
  })
})


describe('props passed to StarRating', () => {
  test('Should have prop called ratings', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper.find(StarRating)).toHaveProp('ratings');
  })
})

