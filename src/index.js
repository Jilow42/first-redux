// import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
