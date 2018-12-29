import { SET_GEOLOCATION } from './types';

//export const ACTION_GET_USER = value => ({
//    type: GET_USER,
//    newValue: value
//  });

//export const ACTION_GET_GEOLOCATION = value =>({
//  type: GET_GEOLOCATION,
//  latitude:value.latitude,
///  longitude: value.longitude
//})

export const ACTION_SET_GEOLOCATION = value =>({
  type: SET_GEOLOCATION,
  newValue: value
})