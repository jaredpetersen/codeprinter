import React from 'react';
import { shallow } from 'enzyme';
import SizeDropdown from './index.js';

describe('Editor Toolbar SizeDropdown', () => {
  it('renders without crashing', () => {
    const sizes = [ 8, 9, 10, 11, 12 ];
    shallow(<SizeDropdown sizes={sizes} active={sizes[0]} onSelect={() => {}}/>);
  });
});
