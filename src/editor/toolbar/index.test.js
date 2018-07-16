import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './index.js';

describe('Editor Toolbar', () => {
  it('renders without crashing', () => {
    const fonts = [
      'Anonymous Pro',
      'Cousine',
      'Cutive Mono',
    ];

    const sizes = [ 8, 9, 10, 11, 12 ];

    const themes = [ 'GitHub', 'VS', 'Xcode' ];

    const toolBar = (
      <Toolbar
        fonts={fonts} activeFont={fonts[0]}
        sizes={sizes} activeSize={sizes[0]}
        themes={themes} activeTheme={themes[0]}
        activeNumbers={false}
        onChange={() => {}}
        onPrint={() => {}} />
    );

    shallow(toolBar);
  });
});
