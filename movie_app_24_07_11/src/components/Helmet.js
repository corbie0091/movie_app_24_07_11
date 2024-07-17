import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

ReactDOM.render(
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>,
  document.getElementById('root')
);