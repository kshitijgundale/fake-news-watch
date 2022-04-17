import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

import newsInputReducer from './reducers/newsInputReducer';
import currentPageReducer from './reducers/currentPageReducer';
import similarNewsReducer from './reducers/similarNewsReducer';
import settingsReducer from './reducers/settingsReducer';
import graphReducer from './reducers/graphReducer';

const rootReducer = combineReducers({
  newsInputs: newsInputReducer,
  page: currentPageReducer,
  similarNews: similarNewsReducer,
  settings: settingsReducer,
  graph: graphReducer,
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
