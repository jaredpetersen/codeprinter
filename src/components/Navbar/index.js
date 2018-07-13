import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      sizes: Array.from({ length: 9 }, (x, i) => i + 8)
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar color='dark' dark expand='sm' className='flex-shrink-0'>
        <NavbarBrand href='/'><Badge color="primary">codeprinter</Badge></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/heart'>Heart</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}
