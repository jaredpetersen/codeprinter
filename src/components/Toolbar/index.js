import React from 'react';
import {
  Row,
  Col,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Form,
  Input,
  Button } from 'reactstrap';

//const ToolBar = (props) => {
  // <Form className='no-print'>
  //   <div className='form-row'>
  //     <Col xs='auto' sm='3'>
  //       <Input type='select' name='fontFaceSelect' id='fontFaceSelect'>
  //         <option>Courier</option>
  //         <option>Roboto</option>
  //       </Input>
  //     </Col>
  //     <Col xs='auto'>
  //       <Input type='select' name='fontSizeSelect' id='fontSizeSelect'>
  //         <option>8px</option>
  //         <option>9px</option>
  //         <option>10px</option>
  //         <option>11px</option>
  //         <option>12px</option>
  //       </Input>
  //     </Col>
  //     <Col xs='auto' sm='2'>
  //       <Input type='select' name='syntaxHighlightSelect' id='syntaxHighlightSelect'>
  //         <option>None</option>
  //         <option>GitHub</option>
  //         <option>VS</option>
  //         <option>XCode</option>
  //       </Input>
  //     </Col>
  //     <Col xs='auto'>
  //       <Button outline color='secondary'>#</Button>
  //     </Col>
  //     <Col xs='auto'>
  //       <Button outline color='primary'>Print</Button>
  //     </Col>
  //   </div>
  // </Form>

export default class ToolBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar color='light' light expand='sm' style={{ marginBottom: 10 }}>
        <Form inline className='no-print' style={{ width: '100%' }}>
          <div className='form-row' style={{ width: '100%' }}>
            <Col xs='9' sm='4' className='my-2 my-sm-0'>
              <Input type='select' name='fontFaceSelect' id='fontFaceSelect' style={{ width: '100%' }}>
                <option>Courier</option>
                <option>Roboto</option>
              </Input>
            </Col>
            <Col xs='3' sm='auto' className='my-2 my-sm-0'>
              <Input type='select' name='fontSizeSelect' id='fontSizeSelect' style={{ width: '100%' }}>
                <option>8px</option>
                <option>9px</option>
                <option>10px</option>
                <option>11px</option>
                <option>12px</option>
              </Input>
            </Col>
            <Col xs='9' sm='3' className='my-2 my-sm-0'>
              <Input type='select' name='syntaxHighlightSelect' id='syntaxHighlightSelect' style={{ width: '100%' }}>
                <option>None</option>
                <option>GitHub</option>
                <option>VS</option>
                <option>XCode</option>
              </Input>
            </Col>
            <Col xs='3' sm='auto' className='my-2 my-sm-0'>
              <Button outline color='secondary' style={{ width: '100%' }}>#</Button>
            </Col>
            <Col xs='12' sm='auto' className='my-2 my-sm-0'>
              <Button outline color='primary' style={{ width: '100%' }}>Print</Button>
            </Col>
          </div>
        </Form>
      </Navbar>
    );
  }
};
