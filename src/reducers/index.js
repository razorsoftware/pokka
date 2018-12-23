import { GET_USER_REDUCER } from './loginReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  getUser: GET_USER_REDUCER
  //otherState: otherReducer
});