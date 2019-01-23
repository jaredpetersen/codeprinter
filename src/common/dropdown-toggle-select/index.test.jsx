import React from 'react';
import { shallow } from 'enzyme';
import DropdownToggleSelect from './index.jsx';

describe('Common DropdownToggleSelect', () => {
  it('renders without crashing', () => {
    shallow(<DropdownToggleSelect>Dropdown</DropdownToggleSelect>);
  });
});
