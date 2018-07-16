import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from '../../../common/dropdown-toggle-select';

const ThemeDropdown = ({ themes, active, onSelect }) => {
  const dropdownItems = themes.map(theme => (<DropdownItem key={theme} active={theme === active} onClick={onSelect.bind(null, theme)}>{theme}</DropdownItem>));

  return (
    <UncontrolledDropdown inNavbar>
      <DropdownToggleSelect>{active}</DropdownToggleSelect>
      <DropdownMenu>
        {dropdownItems}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

ThemeDropdown.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

export default ThemeDropdown;
