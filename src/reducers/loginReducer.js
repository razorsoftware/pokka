
import { LOGIN } from '../actions/types';

const initialState = {
  username: 'teste'
};

const loginReducer = (state = initialState, action) => {
  console.log("wtf");
  switch(action.type) {
    case LOGIN:
      //return username:action.us;
      return {
        ...state,
        username: action.username
      
      };
    default:
      return state;
  }
}

export default loginReducer;