import { CREATE_PRODUCT } from "../../actions/type"; 

const initialState = {
  createProduct:[]
}

export default function(state = initialState, action){
  switch(action.type){
    case CREATE_PRODUCT:
      return{
        ...state,
        createProduct:action.payload
      }
    default:
      return state;
  }
}