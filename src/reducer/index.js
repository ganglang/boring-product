import { combineReducers } from 'redux';
import { homeReducer } from './home';
import { loginReducer } from './login';
export default combineReducers({ Home: homeReducer, Login: loginReducer });