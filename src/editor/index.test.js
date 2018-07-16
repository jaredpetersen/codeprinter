import React from 'react';
import { shallow, mount } from 'enzyme';
import Editor from './index.js';
import Toolbar from './toolbar';
import Document from './document';
import FontDropdown from './toolbar/font-dropdown';
import SizeDropdown from './toolbar/size-dropdown';
import ThemeDropdown from './toolbar/theme-dropdown';
import { Button, DropdownItem } from 'reactstrap';

describe('Editor', () => {
  it('renders without crashing', () => {
    shallow(<Editor />);
  });

  it('renders a toolbar', () => {
    const editor = shallow(<Editor />);
    const toolbar = editor.find(Toolbar);

    const expectedFonts = [
      'Anonymous Pro',
      'Cousine',
      'Cutive Mono',
      'Fira Mono',
      'IBM Plex Mono',
      'Inconsolata',
      'Nanum Gothic Coding',
      'Nova Mono',
      'Overpass Mono',
      'Oxygen Mono',
      'PT Mono',
      'Roboto Mono',
      'Share Tech Mono',
      'Source Code Pro',
      'Space Mono',
      'Ubuntu Mono'
    ];

    expect(toolbar.prop('fonts')).toEqual(expectedFonts);
    expect(toolbar.prop('activeFont')).toEqual(expectedFonts[11]);

    const expectedSizes = [ 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ];

    expect(toolbar.prop('sizes')).toEqual(expectedSizes);
    expect(toolbar.prop('activeSize')).toEqual(expectedSizes[2]);

    const expectedThemes = [
      'None',
      'Arduino',
      'Ascetic',
      'Docco',
      'GitHub',
      'Grayscale',
      'hljs',
      'Idea',
      'Tomorrow',
      'VS',
      'Xcode'
    ];

    expect(toolbar.prop('themes')).toEqual(expectedThemes);
    expect(toolbar.prop('activeTheme')).toEqual(expectedThemes[0]);

    expect(toolbar.prop('activeNumbers')).toEqual(false);
  });

  it('renders a document', () => {
    const editor = shallow(<Editor />);
    const document = editor.find(Document);

    expect(document.prop('font')).toEqual('Roboto Mono');
    expect(document.prop('size')).toEqual(10);
    expect(document.prop('theme')).toEqual('None');
    expect(document.prop('numbers')).toEqual(false);
  });

  it('prints the page when the print button is pressed', () => {
    global.print = jest.fn();
    const editor = shallow(<Editor />);
    const toolbar = editor.find(Toolbar);
    const printButton = toolbar.dive().find(Button).find('#print');

    printButton.simulate('click');

    expect(global.print).toHaveBeenCalledTimes(1);
  });

  it('renders a font change on toolbar font select', () => {
    const editor = shallow(<Editor />);
    const toolbar = editor.find(Toolbar);
    const fontDropdown = toolbar.dive().find(FontDropdown);
    const dropdownItems = fontDropdown.dive().find(DropdownItem);

    dropdownItems.at(2).simulate('click');
    editor.update();

    const document = editor.find(Document);

    expect(document.prop('font')).not.toEqual('Roboto Mono');
  });

  it('renders a size change on toolbar size select', () => {
    const editor = shallow(<Editor />);
    const toolbar = editor.find(Toolbar);
    const sizeDropdown = toolbar.dive().find(SizeDropdown);
    const dropdownItems = sizeDropdown.dive().find(DropdownItem);

    dropdownItems.at(6).simulate('click');
    editor.update();

    const document = editor.find(Document);

    expect(document.prop('size')).not.toEqual(10);
  });

  it('renders a theme change on toolbar theme select', () => {
    const editor = shallow(<Editor />);
    const toolbar = editor.find(Toolbar);
    const themeDropdown = toolbar.dive().find(ThemeDropdown);
    const dropdownItems = themeDropdown.dive().find(DropdownItem);

    dropdownItems.at(2).simulate('click');
    editor.update();

    const document = editor.find(Document);

    expect(document.prop('size')).not.toEqual('None');
  });
});
