import React from 'react';
import { shallow } from 'enzyme';
import ThemeDropdown from './index';
import { DropdownItem } from 'reactstrap';

describe('Editor Toolbar ThemeDropdown', () => {
  it('renders without crashing', () => {
    const themes = ['GitHub', 'VS', 'Xcode'];
    shallow(<ThemeDropdown themes={themes} active={themes[0]} onSelect={() => {}} />);
  });

  it('renders all of the themes as dropdown options', () => {
    const themes = ['GitHub', 'VS', 'Xcode'];
    const themeDropdown = shallow(<ThemeDropdown themes={themes} active={themes[1]} onSelect={() => {}} />);
    const dropdownItems = themeDropdown.find(DropdownItem);

    expect(dropdownItems).toHaveLength(themes.length);

    expect(
      dropdownItems
        .at(0)
        .childAt(0)
        .text()
    ).toEqual(themes[0]);
    expect(dropdownItems.at(0).prop('active')).toEqual(false);

    expect(
      dropdownItems
        .at(1)
        .childAt(0)
        .text()
    ).toEqual(themes[1]);
    expect(dropdownItems.at(1).prop('active')).toEqual(true);
  });

  it('calls the onSelect function on selecting a dropdown option ', () => {
    const themes = ['GitHub', 'VS', 'Xcode'];
    const onSelect = jest.fn();
    const themeDropdown = shallow(<ThemeDropdown themes={themes} active={themes[0]} onSelect={onSelect} />);

    themeDropdown
      .find(DropdownItem)
      .last()
      .simulate('click');

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
