import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App/index';
import reportWebVitals from './reportWebVitals';

import './styles/reset.scss'
import './styles/styles.scss'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
