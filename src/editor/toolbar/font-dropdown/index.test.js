import React from 'react';
import { shallow } from 'enzyme';
import FontDropdown from './index.js';

describe('Editor Toolbar FontDropdown', () => {
  it('renders without crashing', () => {
    const fonts = [ 'serif', 'sans-serif' ];
    shallow(<FontDropdown fonts={fonts} active={fonts[0]} onSelect={() => {}} />);
  });
});
