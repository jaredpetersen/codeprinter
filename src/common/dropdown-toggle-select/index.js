import React from 'react';
import PropTypes from 'prop-types';
import { DropdownToggle } from 'reactstrap';
import './index.css';

const DropdownToggleSelect = props => {
  const style = Object.assign({}, { textAlign: 'left' }, props.style);

  return (
    <DropdownToggle
      outline
      color="dropdown-toggle-select"
      block
      {...props}
      className="dropdown-toggle-select"
      style={style}
    />
  );
};

// Rely on the propTypes provided by reacstrap
DropdownToggleSelect.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  // For DropdownToggle usage inside a Nav
  nav: PropTypes.bool,
  // Defaults to Button component
  tag: PropTypes.any
};

export default DropdownToggleSelect;
