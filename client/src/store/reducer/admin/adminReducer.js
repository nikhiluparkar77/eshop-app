import { CURRENT_ADMIN } from "../../actions/type"; 

const initialState = {
  isAuthenticated: false,
  admin:{}
}

export default function(state = initialState, action){
  switch(action.type){
    case CURRENT_ADMIN :
    return{
      ...state,
      isAuthenticated: action.payload,
      admin: action.payload
    }
    default: 
    return state;
  }
}