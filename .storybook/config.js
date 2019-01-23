import { configure } from '@storybook/react';

function loadStories() {
  require('../src/common/dropdown-toggle-select/index.story.jsx');
  require('../src/navbar/index.story.jsx');
  require('../src/editor/index.story.jsx');
  require('../src/editor/toolbar/index.story.jsx');
  require('../src/editor/toolbar/font-dropdown/index.story.jsx');
  require('../src/editor/toolbar/size-dropdown/index.story.jsx');
  require('../src/editor/toolbar/theme-dropdown/index.story.jsx');
  require('../src/editor/document/index.story.jsx');
  require('../src/heart/index.story.jsx');
  require('../src/not-found/index.story.jsx');
}

configure(loadStories, module);
