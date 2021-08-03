import { CREATE_ORDER, DELETE_ORDER, GET_ORDER, UPDATE_ORDER } from "../actions/type"

const initialState = {
  getOrder: [],
  createOrder: {},
  cancleOrder: {},
  orderUpdate:{}
}

export default function(state = initialState, action){
  switch(action.type){
    case CREATE_ORDER:
      return{
        ...state,
        createOrder: action.payload
      }
    case GET_ORDER:
      return{
        ...state,
        getOrder: action.payload
      }
    case DELETE_ORDER:
      return{
        ...state,
        cancleOrder: action.payload
      }
      case UPDATE_ORDER:
      return{
        ...state,
        orderUpdate: action.payload
      }
    default:
      return state 
  }
}