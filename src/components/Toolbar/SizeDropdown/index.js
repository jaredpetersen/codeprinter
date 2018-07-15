import React from 'react';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from '../../DropdownToggleSelect';

const SizeDropdown = (props) => {
  const dropdownItems = props.sizes.map(size => (<DropdownItem key={size} active={size === props.active} onClick={props.onSelect.bind(null, size)}>{size}</DropdownItem>));

  return (
    <UncontrolledDropdown inNavbar>
      <DropdownToggleSelect>{props.active}</DropdownToggleSelect>
      <DropdownMenu>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default SizeDropdown;
