import {GET_USER,SET_GEOLOCATION} from '../actions/types';

const initialState = {
  username: 'Funcionou porra !',
  latitude: '',
  longitude : ''
};

export const GEOLOCATION = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      //return username:action.us;
      return {
        state        
      };
      case SET_GEOLOCATION:
      return {
        ...state,
        username: "Trocou"
      };
    default:
      return state;
  }
}

//export const GEOLOCATION = (state = initialState, action) => {
//  switch(action.type) {
//    case SET_GEOLOCATION:
//      return {
//        ...state,
//        username: "Trocou"
//      };
//    default:
//      return state;
//  }/
//}


//import { LOGIN } from '../actions/types';

//const initialState = {
//  username: 'teste'
//};

//const loginReducer = (state = initialState, action) => {
//  console.log("wtf");
//  switch(action.type) {
 //   case LOGIN:
      //return username:action.us;
//      return {
 //       ...state,
  //      username: action.username
      
    //  };
  ///  default:
    //  return state;
 // }/
//}

//export default loginReducer;