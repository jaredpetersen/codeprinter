import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import Document from './index';

storiesOf('Editor/Document', module).add('default', () => (
  <Document font={'Anonymous Pro'} size={12} theme={'GitHub'} numbers={true} />
));
