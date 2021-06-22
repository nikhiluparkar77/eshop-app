import axios from "axios";
import { productPath } from "../../../path";
import { CREATE_PRODUCT } from "../type";

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