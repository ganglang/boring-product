import { combineReducers } from 'redux';
import { homeRedcer } from './home'
export default combineReducers({ home: homeRedcer });