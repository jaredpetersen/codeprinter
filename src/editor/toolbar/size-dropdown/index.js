import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from '../../../common/dropdown-toggle-select';

const SizeDropdown = ({ sizes, active, onSelect }) => {
  const dropdownItems = sizes.map(size => (<DropdownItem key={size} active={size === active} onClick={onSelect.bind(null, size)}>{size}</DropdownItem>));

  return (
    <UncontrolledDropdown inNavbar>
      <DropdownToggleSelect>{active}</DropdownToggleSelect>
      <DropdownMenu>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

SizeDropdown.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  active: PropTypes.number.isRequired,
  onSelect: PropTypes.func
};

export default SizeDropdown;
