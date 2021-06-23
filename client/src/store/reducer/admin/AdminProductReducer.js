import { CREATE_PRODUCT, LIST_PRODUCT, SINGLE_PRODUCT } from "../../actions/type"; 

const initialState = {
  createProduct:[],
  listProduct:[],
  singleProduct:[]
}

export default function(state = initialState, action){
  switch(action.type){
    case CREATE_PRODUCT:
      return{
        ...state,
        createProduct:action.payload
      }
      case LIST_PRODUCT:
      return{
        ...state,
        listProduct:action.payload
      }
      case SINGLE_PRODUCT:
      return{
        ...state,
        singleProduct:action.payload
      }
    default:
      return state;
  }
}