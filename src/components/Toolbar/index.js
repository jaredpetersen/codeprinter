import React from 'react';
import { Col, Navbar, Button } from 'reactstrap';
import FontDropdown from './FontDropdown';
import SizeDropdown from './SizeDropdown';
import ThemeDropdown from './ThemeDropdown';

export default class ToolBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      font: this.props.fonts[0],
      size: this.props.sizes[0],
      theme: this.props.themes[0],
      lineNumbers: false
    };
  }

  render() {
    return (
      <Navbar color='light' light expand='sm' style={{ marginBottom: 10 }}>
        <div className='form-row' style={{ width: '100%' }}>
          <Col xs='9' sm='4' className='my-2 my-sm-0'>
            <FontDropdown fonts={this.props.fonts} active={this.state.font} />
          </Col>
          <Col xs='3' sm='auto' className='my-2 my-sm-0'>
            <SizeDropdown sizes={this.props.sizes} active={this.state.size} />
          </Col>
          <Col xs='9' sm='3' className='my-2 my-sm-0'>
            <ThemeDropdown themes={this.props.themes} active={this.state.theme} />
          </Col>
          <Col xs='3' sm='auto' className='my-2 my-sm-0'>
            <Button active={this.state.lineNumbers} outline color='secondary' style={{ width: '100%' }}>#</Button>
          </Col>
          <Col xs='12' sm='auto' className='my-2 my-sm-0'>
            <Button outline color='primary' style={{ width: '100%' }}>Print</Button>
          </Col>
        </div>
      </Navbar>
    );
  }
};
