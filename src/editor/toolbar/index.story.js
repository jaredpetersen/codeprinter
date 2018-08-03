import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import Toolbar from './index';

storiesOf('Editor/Toolbar', module).add('default', () => {
  const fonts = ['Anonymous Pro', 'Cousine', 'Cutive Mono'];

  const sizes = [8, 9, 10, 11, 12];

  const themes = ['GitHub', 'VS', 'Xcode'];

  return (
    <Toolbar
      fonts={fonts}
      activeFont={fonts[0]}
      sizes={sizes}
      activeSize={sizes[0]}
      themes={themes}
      activeTheme={themes[0]}
      activeNumbers={false}
      onChange={action('changed')}
      onPrint={action('print')}
    />
  );
});
