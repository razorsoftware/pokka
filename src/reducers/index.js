import { GEOLOCATION } from './loginReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  geolocal: GEOLOCATION
//  setGeolocation:GEOLOCATION
  //otherState: otherReducer
});