import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NotFound from './index';

storiesOf('Not Found', module).add('default', () => (
  <Router>
    <NotFound />
  </Router>
));
