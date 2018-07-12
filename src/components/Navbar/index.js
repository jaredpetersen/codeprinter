import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
    const SizeDropdown = () => {
      const dropdownItems = this.state.sizes.map(size => (<DropdownItem>{`${size}px`}</DropdownItem>));

      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Size
          </DropdownToggle>
          <DropdownMenu right>
            {dropdownItems}
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    }

    return (
      <Navbar color='dark' dark expand='sm' className='flex-shrink-0'>
        <NavbarBrand href='/'>codeprinter</NavbarBrand>
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
