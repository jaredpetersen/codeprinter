import React from 'react';
import { shallow } from 'enzyme';
import Document from './index.js';

describe('Editor Document', () => {
  it('renders without crashing', () => {
    shallow(<Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={true} />);
  });
});
