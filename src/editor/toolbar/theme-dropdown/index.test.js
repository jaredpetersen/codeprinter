import React from 'react';
import { shallow } from 'enzyme';
import ThemeDropdown from './index.js';

describe('Editor Toolbar ThemeDropdown', () => {
  it('renders without crashing', () => {
    const themes = [ 'GitHub', 'VS', 'Xcode' ];
    shallow(<ThemeDropdown themes={themes} active={themes[0]} onSelect={() => {}}/>);
  });
});
