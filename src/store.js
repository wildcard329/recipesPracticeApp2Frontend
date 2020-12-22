import { createStore, compose } from 'redux';
import { rootReducer } from './model/state/reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers()
);
