import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import ThemeDropdown from './index';

storiesOf('Editor/Toolbar/ThemeDropdown', module).add('default', () => {
  const themes = ['GitHub', 'VS', 'Xcode'];

  return <ThemeDropdown themes={themes} active={themes[0]} onSelect={action('selected')} />;
});
