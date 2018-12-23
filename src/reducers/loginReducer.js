import {GET_USER} from '../actions/types';

const initialState = {
  username: 'Funciou porra !'
};

export const GET_USER_REDUCER = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      //return username:action.us;
      return {
        state        
      };
    default:
      return state;
  }
}


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