import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SizeDropdown from './index';
import { DropdownItem } from 'reactstrap';

describe('Editor Toolbar SizeDropdown', () => {
  it('renders without crashing', () => {
    const sizes = [8, 9, 10, 11, 12];
    shallow(<SizeDropdown sizes={sizes} active={sizes[0]} onSelect={() => {}} />);
  });

  it('renders all of the sizes as dropdown options', () => {
    const sizes = [8, 9, 10, 11, 12];
    const tree = renderer.create(<SizeDropdown sizes={sizes} active={sizes[1]} onSelect={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
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
