import React from 'react';
import { shallow } from 'enzyme';
import FontDropdown from './index.js';
import { DropdownItem } from 'reactstrap';

describe('Editor Toolbar FontDropdown', () => {
  it('renders without crashing', () => {
    const fonts = ['serif', 'sans-serif'];
    shallow(<FontDropdown fonts={fonts} active={fonts[0]} onSelect={() => {}} />);
  });

  it('renders all of the fonts as dropdown options', () => {
    const fonts = ['serif', 'sans-serif'];
    const fontDropdown = shallow(<FontDropdown fonts={fonts} active={fonts[1]} onSelect={() => {}} />);
    const dropdownItems = fontDropdown.find(DropdownItem);

    expect(dropdownItems).toHaveLength(fonts.length);

    expect(
      dropdownItems
        .at(0)
        .childAt(0)
        .text()
    ).toEqual(fonts[0]);
    expect(dropdownItems.at(0).prop('active')).toEqual(false);

    expect(
      dropdownItems
        .at(1)
        .childAt(0)
        .text()
    ).toEqual(fonts[1]);
    expect(dropdownItems.at(1).prop('active')).toEqual(true);
  });

  it('calls the onSelect function on selecting a dropdown option', () => {
    const fonts = ['serif', 'sans-serif'];
    const onSelect = jest.fn();
    const fontDropdown = shallow(<FontDropdown fonts={fonts} active={fonts[0]} onSelect={onSelect} />);

    fontDropdown
      .find(DropdownItem)
      .last()
      .simulate('click');

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
