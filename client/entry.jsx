'use strict';

import 'styles/main.css';

import React from 'react/addons';
import SlideContainer from 'components/Slides/SlideContainer.jsx';

import { createStore } from 'redux';
import slidesAppReducer from './reducers/index.jsx';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import configureStore from 'store/configureStore.jsx';

let store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
);
