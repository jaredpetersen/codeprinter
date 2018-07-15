import React from 'react';
import { Col, Navbar, Button } from 'reactstrap';
import FontDropdown from './font-dropdown';
import SizeDropdown from './size-dropdown';
import ThemeDropdown from './theme-dropdown';

const ToolBar = (props) => {
  return (
    <Navbar color='#FFFFFF' light expand='sm' style={{ marginBottom: 5 }}>
      <div className='form-row' style={{ width: '100%' }}>
        <Col xs='9' md='4' className='my-2 my-md-0'>
          <FontDropdown fonts={props.fonts} active={props.activeFont} onSelect={props.onChange.bind(null, 'font')} />
        </Col>
        <Col xs='3' md='2' className='my-2 my-md-0'>
          <SizeDropdown sizes={props.sizes} active={props.activeSize} onSelect={props.onChange.bind(null, 'size')}/>
        </Col>
        <Col xs='9' md='3' className='my-2 my-md-0'>
          <ThemeDropdown themes={props.themes} active={props.activeTheme} onSelect={props.onChange.bind(null, 'theme')}/>
        </Col>
        <Col xs='3' md='auto' className='my-2 my-md-0'>
          <Button active={props.activeNumbers} outline color='secondary' style={{ width: '100%' }} onClick={props.onChange.bind(null, 'numbers', !props.activeNumbers)}>#</Button>
        </Col>
        <Col xs='12' md='auto' className='my-2 my-md-0'>
          <Button outline color='success' onClick={props.onPrint} style={{ width: '100%' }}>Print</Button>
        </Col>
      </div>
    </Navbar>
  );
};

export default ToolBar;
