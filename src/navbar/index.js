import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
 } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        <NavbarBrand tag={Link} to='/'><Badge color="success">codeprinter</Badge></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='https://github.com/jaredpetersen/codeprinter' target='_blank'><i className="fab fa-github-alt text-white" title='GitHub'></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/heart'><i className="fas fa-heart text-danger" title='Heart'></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}
