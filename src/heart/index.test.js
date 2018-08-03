import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Heart from './index.js';

describe('Heart', () => {
  it('renders without crashing', () => {
    shallow(<Heart />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Heart />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
