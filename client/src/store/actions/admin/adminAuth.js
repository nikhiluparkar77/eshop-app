import axios from "axios";
import { CURRENT_ADMIN } from "../type"; 

export const AdminRegisterFunc = (adminDetail ) => (dispatch) => { 
  axios.post("http://localhost:5000/admin/register", adminDetail)
        .then((res) =>
        dispatch({
          type: CURRENT_ADMIN,
          playod: res.data
        }))
        .catch((err) => console.log(err));
} 

export const AdminLoginFunc = (adminDetail) => (dispatch) => {
  axios.post("http://localhost:5000/admin/login", adminDetail)
        .then((res) => 
        dispatch({
          type:CURRENT_ADMIN,
          payload: res.data
        }))
        .catch((err) => console.log(err))
}