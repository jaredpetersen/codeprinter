import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggleSelect from './index.js';

storiesOf('Common/DropdownToggleSelect', module)
  .add('default', () => (
    <UncontrolledDropdown inNavbar>
      <DropdownToggleSelect>Dropdown</DropdownToggleSelect>
      <DropdownMenu>
        <DropdownItem onClick={action('onClick - Item 1')}>Item 1</DropdownItem>
        <DropdownItem onClick={action('onClick - Item 2')}>Item 2</DropdownItem>
        <DropdownItem onClick={action('onClick - Item 3')}>Item 3</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  ));
