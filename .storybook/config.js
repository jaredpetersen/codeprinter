import { configure } from '@storybook/react';

function loadStories() {
  require('../src/common/dropdown-toggle-select/index.story.js');
  require('../src/navbar/index.story.js');
  require('../src/editor/toolbar/index.story.js');
  require('../src/editor/toolbar/font-dropdown/index.story.js');
  require('../src/editor/toolbar/size-dropdown/index.story.js');
  require('../src/editor/toolbar/theme-dropdown/index.story.js');
  require('../src/editor/document/index.story.js');
  require('../src/heart/index.story.js');
  require('../src/not-found/index.story.js');
}

configure(loadStories, module);
