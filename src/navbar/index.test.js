import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index.js';

describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });
});
