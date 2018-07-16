import React from 'react';
import { shallow } from 'enzyme';
import Heart from './index.js';

describe('Heart', () => {
  it('renders without crashing', () => {
    shallow(<Heart />);
  });
});
