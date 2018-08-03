import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import { NavbarToggler, Collapse } from 'reactstrap';

describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('toggles the navbar when clicking on the navbar toggler', () => {
    const navbar = shallow(<Navbar />);
    const navbarToggler = navbar.find(NavbarToggler);

    expect(navbar.find(Collapse).prop('isOpen')).toEqual(false);

    navbarToggler.simulate('click');

    expect(navbar.find(Collapse).prop('isOpen')).toEqual(true);
  });
});
