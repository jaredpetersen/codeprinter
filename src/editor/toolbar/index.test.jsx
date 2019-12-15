import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './index';
import FontDropdown from './font-dropdown';
import SizeDropdown from './size-dropdown';
import ThemeDropdown from './theme-dropdown';

describe('Editor Toolbar', () => {
  it('renders without crashing', () => {
    const fonts = ['Anonymous Pro', 'Cousine', 'Cutive Mono'];

    const sizes = [8, 9, 10, 11, 12];

    const themes = ['GitHub', 'VS', 'Xcode'];

    shallow(
      <Toolbar
        fonts={fonts}
        activeFont={fonts[0]}
        sizes={sizes}
        activeSize={sizes[0]}
        themes={themes}
        activeTheme={themes[0]}
        lineNumbers={'none'}
        onChange={() => {}}
        onPrint={() => {}}
      />
    );
  });

  it('renders the fonts in a dropdown', () => {
    const fonts = ['Anonymous Pro', 'Cousine', 'Cutive Mono'];

    const sizes = [8, 9, 10, 11, 12];

    const themes = ['GitHub', 'VS', 'Xcode'];

    const toolbar = shallow(
      <Toolbar
        fonts={fonts}
        activeFont={fonts[0]}
        sizes={sizes}
        activeSize={sizes[0]}
        themes={themes}
        activeTheme={themes[0]}
        lineNumbers={'none'}
        onChange={() => {}}
        onPrint={() => {}}
      />
    );

    const fontDropdown = toolbar.find(FontDropdown);

    expect(fontDropdown.prop('fonts')).toEqual(fonts);
    expect(fontDropdown.prop('active')).toEqual(fonts[0]);
  });

  it('renders the sizes in a dropdown', () => {
    const fonts = ['Anonymous Pro', 'Cousine', 'Cutive Mono'];

    const sizes = [8, 9, 10, 11, 12];

    const themes = ['GitHub', 'VS', 'Xcode'];

    const toolbar = shallow(
      <Toolbar
        fonts={fonts}
        activeFont={fonts[0]}
        sizes={sizes}
        activeSize={sizes[0]}
        themes={themes}
        activeTheme={themes[0]}
        lineNumbers={'none'}
        onChange={() => {}}
        onPrint={() => {}}
      />
    );

    const sizeDropdown = toolbar.find(SizeDropdown);

    expect(sizeDropdown.prop('sizes')).toEqual(sizes);
    expect(sizeDropdown.prop('active')).toEqual(sizes[0]);
  });

  it('renders the themes in a dropdown', () => {
    const fonts = ['Anonymous Pro', 'Cousine', 'Cutive Mono'];

    const sizes = [8, 9, 10, 11, 12];

    const themes = ['GitHub', 'VS', 'Xcode'];

    const toolbar = shallow(
      <Toolbar
        fonts={fonts}
        activeFont={fonts[0]}
        sizes={sizes}
        activeSize={sizes[0]}
        themes={themes}
        activeTheme={themes[0]}
        lineNumbers={'none'}
        onChange={() => {}}
        onPrint={() => {}}
      />
    );

    const themeDropdown = toolbar.find(ThemeDropdown);

    expect(themeDropdown.prop('themes')).toEqual(themes);
    expect(themeDropdown.prop('active')).toEqual(themes[0]);
  });
});
