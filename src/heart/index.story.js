import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import Heart from './index.js';

storiesOf('Heart', module)
  .add('default', () => (
    <Heart />
  ));
