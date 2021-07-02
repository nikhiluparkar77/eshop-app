import axios from "axios";
import { PRODUCT_DETAILS, PRODUCT_LIST } from "./type";

export const ProductListFunc = () => (dispatch) =>{
  axios.get("http://localhost:5000/product/products")
      .then((res) => dispatch({
        type:PRODUCT_LIST,
        payload: res.data
      }))
      .catch((err) => {
        console.log(err)
      })
}

export const ProductDetailFunc = (id) => (dispatch) =>{
  axios.get(`http://localhost:5000/product/products/${id}`)
      .then((res) => dispatch({
        type: PRODUCT_DETAILS,
        payload: res.data
      }))
      .catch((err) => {
        console.log(err)
      })
}