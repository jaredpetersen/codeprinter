import React from 'react';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from '../../DropdownToggleSelect';

const FontDropdown = (props) => {
  const dropdownItems = props.fonts.map(font => {
    return (<DropdownItem key={font} active={font === props.active} style={{ fontFamily: `"${font}", monospace`}}>{font}</DropdownItem>);
  });

  return (
    <UncontrolledDropdown inNavbar>
      <DropdownToggleSelect style={{ fontFamily: `"${props.active}", monospace` }}>{props.active}</DropdownToggleSelect>
      <DropdownMenu>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default FontDropdown;
