import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index.js';

describe('NotFound', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />);
  });
});
