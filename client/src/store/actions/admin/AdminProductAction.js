import axios from "axios";
import { productPath } from "../../../path";
import { CREATE_PRODUCT, LIST_PRODUCT, SINGLE_PRODUCT } from "../type";

export const CreateProductFunc = (fromData) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_PRODUCT}`, fromData);
    dispatch({
      type:CREATE_PRODUCT,
      payload:response.data
    })
    return response
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type:CREATE_PRODUCT,
      payload:error.response.data
    })
    return error.response.data
  }
  // axios.post(`http://localhost:5000/product/products`, fromData)
  //   .then((res) => 
  //         dispatch({
  //           type: CREATE_PRODUCT,
  //           payload:res.data
  //         })
  //   )
  //   .catch((err) => console.log(err)
  //   )
   
}

export const ListProductFunc = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_PRODUCT}`);

    dispatch({
      type: LIST_PRODUCT,
      payload: response.data
    })
    return response
  } catch (error) {
    dispatch({
      type: LIST_PRODUCT,
      payload: error.response.data
    })
    return error.response.data
  }
  
}

export const UpdateProductFunc = (id, productData) => async (dispatch) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_PRODUCT}/${id}`, productData);

    dispatch({
      type: SINGLE_PRODUCT,
      payload: response.data
    })

    return response.data
  } catch (error) {

    dispatch({
      type:SINGLE_PRODUCT,
      payload: error.response.data
    })
    return error.response.data
  }
 
}

export const DeleteProductFunc = (id) => async (dispatch) => {
  try {
   const response = await axios.delete(`${process.env.REACT_APP_PRODUCT}/${id}`);
   
   dispatch({
     type: SINGLE_PRODUCT,
     payload: response.data
   })
   return response.data;
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT,
      payload: error.response.data
    })
    return error.response.data
  }
  // axios.delete(`http://localhost:5000/product/products/${id}`)
  //   .then((res) => 
  //         dispatch({
  //           type: SINGLE_PRODUCT,
  //           payload:res.data
  //         })
  //   )
  //   .catch((err) => console.log(err)
  //   )
}