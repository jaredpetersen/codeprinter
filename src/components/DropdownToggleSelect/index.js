import React from 'react';
import { DropdownToggle } from 'reactstrap';
import './index.css';

const DropdownToggleSelect = (props) => {
  const massagedProps = Object.assign({}, props);
  if (massagedProps.caret) delete massagedProps.caret;
  if (massagedProps.color) delete massagedProps.color;
  if (massagedProps.outline) delete massagedProps.outline;

  const style = Object.assign({}, { textAlign: 'left' }, massagedProps.style);

  return (
    <DropdownToggle outline color='dropdown-toggle-select' block {...massagedProps} className='dropdown-toggle-select' style={style}/>
  );
};

export default DropdownToggleSelect;
