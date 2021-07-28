import { ADD_CART, DELETE_CART, GET_CART } from "../actions/type";

const initialState = {
  cart:[]
}

export default function(state = initialState, action){
  switch(action.type){
    case ADD_CART :
      return{
        ...state,
        cart: action.payload  
      }
      case GET_CART :
      return{
        ...state,
        cart: action.payload  
      }
      case DELETE_CART :
      return{
        ...state,
        cart: action.payload  
      }
      default: 
      return state;
  }
}