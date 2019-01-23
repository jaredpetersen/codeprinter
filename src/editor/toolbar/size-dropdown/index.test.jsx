import React from 'react';
import { shallow } from 'enzyme';
import SizeDropdown from './index';
import { DropdownItem } from 'reactstrap';

describe('Editor Toolbar SizeDropdown', () => {
  it('renders without crashing', () => {
    const sizes = [8, 9, 10, 11, 12];
    shallow(<SizeDropdown sizes={sizes} active={sizes[0]} onSelect={() => {}} />);
  });

  it('renders all of the sizes as dropdown options', () => {
    const sizes = [8, 9];
    const sizeDropdown = shallow(<SizeDropdown sizes={sizes} active={sizes[1]} onSelect={() => {}} />);
    const dropdownItems = sizeDropdown.find(DropdownItem);

    expect(dropdownItems).toHaveLength(sizes.length);

    expect(
      dropdownItems
        .at(0)
        .childAt(0)
        .text()
    ).toEqual(`${sizes[0]}`);
    expect(dropdownItems.at(0).prop('active')).toEqual(false);

    expect(
      dropdownItems
        .at(1)
        .childAt(0)
        .text()
    ).toEqual(`${sizes[1]}`);
    expect(dropdownItems.at(1).prop('active')).toEqual(true);
  });

  it('calls the onSelect function on selecting a dropdown option', () => {
    const sizes = [8, 9, 10, 11, 12];
    const onSelect = jest.fn();
    const sizeDropdown = shallow(<SizeDropdown sizes={sizes} active={sizes[0]} onSelect={onSelect} />);

    sizeDropdown
      .find(DropdownItem)
      .last()
      .simulate('click');

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
