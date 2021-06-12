import { PRODUCT_LIST } from "../actions/type";

const initialState = {
  productList:[]
}

export default function(state = initialState, action){
  switch(action.type){
    case PRODUCT_LIST:
      return{
        ...state,
        productList:action.payload
      }
    default:
      return state;
  }
}