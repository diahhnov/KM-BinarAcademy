import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {AllReducers} from './AllReducers';

const allMiddleWares = applyMiddleware(logger);

export const store = createStore(AllReducers, {}, allMiddleWares);
