import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FontDropdown = (props) => {
  const dropdownItems = props.fonts.map(font => {
    return (<DropdownItem key={font} active={font === props.active} style={{ fontFamily: `"${font}", monospace`}}>{font}</DropdownItem>);
  });

  return (
    <UncontrolledDropdown inNavbar style={{ width: '100%' }}>
      <DropdownToggle caret outline color='secondary' className='w-100' style={{ fontFamily: `"${props.active}", monospace`}}>{props.active}</DropdownToggle>
      <DropdownMenu style={{ width: '100%' }}>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default FontDropdown;
