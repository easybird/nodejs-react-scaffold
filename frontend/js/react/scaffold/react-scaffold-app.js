import React from 'react';
import { render } from 'react-dom';
import ReactScaffoldApp from './ReactScaffoldApp';

render(
  React.createFactory(ReactScaffoldApp)(window.reactProps),
  document.getElementById('react-scaffold-app')
);
