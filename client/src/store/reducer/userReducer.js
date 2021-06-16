import { CURRENT_USER } from "../actions/type";

const initialState = {
  isAuthenticated: false,
  user:{}
}

export default function(state = initialState, action){
  switch(action.type){
    case CURRENT_USER :
    return{
      ...state,
      isAuthenticated: action.payload,
      user: action.payload
    }
    default: 
    return state;
  }
}

