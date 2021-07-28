import axios from "axios";
import { ADD_CART, DELETE_CART, GET_CART } from "./type";

export const AddCartFunc = (cartData) => (dispatch) => {
  axios.post("http://localhost:5000/cart/addcart", cartData)
  .then((res) => dispatch({
    type:ADD_CART,
    payload: res.data
  }))
  .catch((err) => console.log(err)) 
}

export const GetCartFunc = () => (dispatch) => {
  axios.get("http://localhost:5000/cart/getcart")
  .then((res) => dispatch({
    type:GET_CART,
    payload: res.data
  }))
  .catch((err) => console.log(err)) 
}

export const DeleteCartFunc = (id) => (dispatch) => {
  axios.delete(`http://localhost:5000/cart/deletecart/${id}`)
  .then((res) => dispatch({
    type:DELETE_CART,
    payload: res.data
  }))
  .catch((err) => console.log(err)) 
}