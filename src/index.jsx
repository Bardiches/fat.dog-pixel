import React from 'react';
import { render } from 'react-snapshot';

import App from './app';
import './app.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
