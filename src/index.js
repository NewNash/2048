import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux'
import {createStore,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import reducer from './reducer'
import App from './App';
let loggerMiddleware = createLogger()
let store = createStore(reducer,
    applyMiddleware(
        loggerMiddleware
    )
    )
;


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
