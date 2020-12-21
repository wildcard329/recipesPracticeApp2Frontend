import { createStore, compose } from 'redux';
import { userReducer } from './model/state/UserReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    userReducer,
    composeEnhancers()
);
