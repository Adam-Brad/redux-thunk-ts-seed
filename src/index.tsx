import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { CounterContainer } from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counterReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

render(
  <Provider store={store}>
    <CounterContainer/>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
