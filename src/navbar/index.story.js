import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './index';

storiesOf('Navbar', module).add('default', () => (
  <Router>
    <Navbar />
  </Router>
));
