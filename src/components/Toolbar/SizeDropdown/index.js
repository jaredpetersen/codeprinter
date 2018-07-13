import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SizeDropdown = (props) => {
  const dropdownItems = props.sizes.map(size => (<DropdownItem key={size} active={size === props.active}>{size}</DropdownItem>));

  return (
    <UncontrolledDropdown inNavbar className='w-100'>
      <DropdownToggle caret outline color='secondary' className='w-100'>{props.active}</DropdownToggle>
      <DropdownMenu className='w-100'>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default SizeDropdown;
