import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ThemeDropdown from './index';
import { DropdownItem } from 'reactstrap';

describe('Editor Toolbar ThemeDropdown', () => {
  it('renders without crashing', () => {
    const themes = ['GitHub', 'VS', 'Xcode'];
    shallow(<ThemeDropdown themes={themes} active={themes[0]} onSelect={() => {}} />);
  });

  it('renders all of the themes as dropdown options', () => {
    const themes = ['GitHub', 'VS', 'Xcode'];
    const tree = renderer.create(<ThemeDropdown themes={themes} active={themes[1]} onSelect={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
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
