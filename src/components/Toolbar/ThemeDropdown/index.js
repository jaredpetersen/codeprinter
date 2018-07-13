import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ThemeDropdown = (props) => {
  const dropdownItems = props.themes.map(theme => (<DropdownItem key={theme} active={theme === props.active}>{theme}</DropdownItem>));

  return (
    <UncontrolledDropdown inNavbar className='w-100'>
      <DropdownToggle caret outline color='secondary' className='w-100'>{props.active}</DropdownToggle>
      <DropdownMenu className='w-100'>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default ThemeDropdown;
