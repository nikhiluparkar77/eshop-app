import { PRODUCT_DETAILS, PRODUCT_LIST } from "../actions/type";

const initialState = {
  productList:[],
  singleProduct:[]
}

export default function(state = initialState, action){
  switch(action.type){
    case PRODUCT_LIST:
      return{
        ...state,
        productList:action.payload
      }
      case PRODUCT_DETAILS:
      return{
        ...state,
        singleProduct:action.payload
      }
    default:
      return state;
  }
}