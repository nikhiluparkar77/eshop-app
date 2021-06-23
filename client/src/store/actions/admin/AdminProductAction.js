import axios from "axios";
import { productPath } from "../../../path";
import { CREATE_PRODUCT, LIST_PRODUCT, SINGLE_PRODUCT } from "../type";

export const CreateProductFunc = (productData) => (dispatch) => {
  axios.post(`http://localhost:5000/product/products`, productData)
    .then((res) => 
          dispatch({
            type: CREATE_PRODUCT,
            payload:res.data
          })
    )
    .catch((err) => console.log(err)
    )
}

export const ListProductFunc = () => (dispatch) => {
  axios.get(`http://localhost:5000/product/products`)
    .then((res) => 
          dispatch({
            type: LIST_PRODUCT,
            payload:res.data
          })
    )
    .catch((err) => console.log(err)
    )
}

export const UpdateProductFunc = (id, productData) => (dispatch) => {
  axios.put(`http://localhost:5000/product/products/${id}`, productData)
    .then((res) => 
          dispatch({
            type: SINGLE_PRODUCT,
            payload:res.data
          })
    )
    .catch((err) => console.log(err)
    )
}