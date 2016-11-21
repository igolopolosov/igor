import React from 'react';
import {render} from 'react-dom';
import { EntryPoint } from './components/EntryPoint';

import '../styles/index.styl';

render(
  <EntryPoint />,
  document.getElementById('entry-point')
);
