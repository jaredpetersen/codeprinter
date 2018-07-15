import React from 'react';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from '../../../common/dropdown-toggle-select';

const ThemeDropdown = (props) => {
  const dropdownItems = props.themes.map(theme => (<DropdownItem key={theme} active={theme === props.active} onClick={props.onSelect.bind(null, theme)}>{theme}</DropdownItem>));

  return (
    <UncontrolledDropdown inNavbar>
      <DropdownToggleSelect>{props.active}</DropdownToggleSelect>
      <DropdownMenu>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default ThemeDropdown;
