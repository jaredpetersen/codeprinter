import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import FontDropdown from './index';
import { DropdownItem } from 'reactstrap';

describe('Editor Toolbar FontDropdown', () => {
  it('renders without crashing', () => {
    const fonts = ['serif', 'sans-serif'];
    shallow(<FontDropdown fonts={fonts} active={fonts[0]} onSelect={() => {}} />);
  });

  it('renders all of the fonts as dropdown options', () => {
    const fonts = ['serif', 'sans-serif'];
    const tree = renderer.create(<FontDropdown fonts={fonts} active={fonts[1]} onSelect={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
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
