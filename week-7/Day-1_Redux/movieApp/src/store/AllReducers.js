import {combineReducers} from 'redux';
import HomeReducer from '../screens/Home/redux/reducer';

export const AllReducers = combineReducers({
  Home: HomeReducer,
});
