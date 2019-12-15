import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from '../../../common/dropdown-toggle-select';

const FontDropdown = ({ fonts, active, onSelect }) => {
  const dropdownItems = fonts.map(font => {
    return (
      <DropdownItem
        key={font}
        active={font === active}
        onClick={() => onSelect(font)}
        style={{ fontFamily: `"${font}", monospace` }}
      >
        {font}
      </DropdownItem>
    );
  });

  return (
    <UncontrolledDropdown inNavbar>
      <DropdownToggleSelect style={{ fontFamily: `"${active}", monospace` }}>{active}</DropdownToggleSelect>
      <DropdownMenu>{dropdownItems}</DropdownMenu>
    </UncontrolledDropdown>
  );
};

FontDropdown.propTypes = {
  fonts: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

export default FontDropdown;
