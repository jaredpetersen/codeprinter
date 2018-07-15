import React from 'react';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from '../../../common/dropdown-toggle-select';

const FontDropdown = (props) => {
  const dropdownItems = props.fonts.map(font => {
    return (
      <DropdownItem key={font} active={font === props.active} onClick={props.onSelect.bind(null, font)} style={{ fontFamily: `"${font}", monospace`}}>{font}</DropdownItem>);
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
