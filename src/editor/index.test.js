import React from 'react';
import { shallow } from 'enzyme';
import Editor from './index.js';

describe('Editor', () => {
  it('renders without crashing', () => {
    shallow(<Editor />);
  });
});
