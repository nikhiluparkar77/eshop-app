import axios from "axios";
import { CURRENT_USER } from "./type";

export const RegisterFunc = (userDetail ) => (dispatch) => { 
  axios.post("http://localhost:5000/user/register", userDetail)
        .then((res) =>
        dispatch({
          type: CURRENT_USER,
          playod: res.data
        }))
        .catch((err) => console.log(err));
} 

export const LoginFunc = (userDetail) => (dispatch) => {
  axios.post("http://localhost:5000/user/login", userDetail)
        .then((res) => 
        dispatch({
          type:CURRENT_USER,
          payload: res.data
        }))
        .catch((err) => console.log(err))
}