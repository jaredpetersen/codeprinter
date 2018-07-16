import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import SizeDropdown from './index.js';

storiesOf('Editor/Toolbar/SizeDropdown', module)
  .add('default', () => {
    const sizes = [ 8, 9, 10, 11, 12 ];

    return (
      <SizeDropdown sizes={sizes} active={sizes[0]} onSelect={action('selected')}/>
    );
  });
