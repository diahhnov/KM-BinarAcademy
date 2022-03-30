import {createStore} from 'redux';
import {AllReducers} from './AllReducers';

export const store = createStore(AllReducers);
