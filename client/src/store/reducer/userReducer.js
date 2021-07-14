import { CURRENT_USER, USER_CART, GET_USER } from "../actions/type";

const initialState = {
  isAuthenticated: false,
  user:{},
  cart:[],
  getUser:{}
}

export default function(state = initialState, action){
  switch(action.type){
    case CURRENT_USER :
    return{
      ...state,
      isAuthenticated: action.payload,
      user: action.payload
    }
    case USER_CART :
    return{
      ...state, 
      cart: action.payload
    }
    case GET_USER :
    return{
      ...state, 
      getUser: action.payload
    }
    default: 
    return state;
  }
}

