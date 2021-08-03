import axios from "axios";
import { CREATE_ORDER, DELETE_ORDER, GET_ORDER, UPDATE_ORDER } from "./type";

export const CreateOrderFunc = (orderData) => (dispatch) => {
  axios.post("http://localhost:5000/order/createorder", orderData)
    .then((res) => dispatch({
      type: CREATE_ORDER,
      payload: res.data
    }))
    .catch((err) => console.log(err))
}

export const GetOrderFunc = () => (dispatch) => {
  axios.get("http://localhost:5000/order/getorder")
    .then((res) => dispatch({
      type: GET_ORDER,
      payload: res.data
    }))
    .catch((err) => console.log(err))
}

export const CancleOrderFunc = (orderid) => (dispatch) => {
  axios.delete(`http://localhost:5000/order/deleteorder/${orderid}`)
    .then((res) => dispatch({
      type: DELETE_ORDER,
      payload: res.data
    }))
    .catch((err) => console.log(err))
}

export const UpdateOrderFunc = (orderDetail) => (dispatch) => {
  axios.patch("http://localhost:5000/order/updateorder", {orderDetail})
    .then((res) => dispatch({
      type: UPDATE_ORDER,
      payload: res.data
    }))
    .catch((err) => console.log(err))
}