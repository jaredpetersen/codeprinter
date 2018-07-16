import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import FontDropdown from './index.js';

storiesOf('Editor/Toolbar/FontDropdown', module)
  .add('default', () => {
    const fonts = [
      'Anonymous Pro',
      'Cousine',
      'Cutive Mono',
    ];

    return (
      <FontDropdown fonts={fonts} active={fonts[0]} onSelect={action('selected')} />
    );
  });
