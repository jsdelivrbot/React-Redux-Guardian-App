import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { compose, createStore, applyMiddleware } from 'redux';

import ReduxPromise from 'redux-promise';
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from "redux-thunk"



import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxPromise, thunk),
    autoRehydrate()
  )
)



persistStore(createStoreWithMiddleware)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
  , document.querySelector('.container'));

