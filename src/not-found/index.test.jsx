import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NotFound from './index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NotFound', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NotFound />
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
