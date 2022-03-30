import {combineReducers, createStore} from 'redux';
import MovieReducer from '../reducer/MovieReducer';
import HomeReducer from '../screens/Home/redux/reducer';
import LoginReducer from '../screens/Login/redux/reducer';
import RegisterReducer from '../screens/Register/redux/reducer';

export const AllReducers = combineReducers({
  movie: MovieReducer,
  Home: HomeReducer,
  Login: LoginReducer,
  Register: RegisterReducer,
});
