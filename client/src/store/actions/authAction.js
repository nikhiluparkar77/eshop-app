import axios from "axios";
import jwt_decode from "jwt-decode";
import { CURRENT_USER, GET_USER, USER_CART } from "./type";
import setAuthToken from "../../Pages/setAuthTokan/SetAuthToken";


export const RegisterFunc = (userDetail ) => (dispatch) => { 
  axios.post("http://localhost:5000/user/register", userDetail)
        .then((res) =>
          dispatch({
            type: CURRENT_USER,
            payload: res.data,
          }))
        .catch((err) => console.log(err))
} 


export const LoginFunc = (userDetail) => (dispatch) => {
  axios.post("http://localhost:5000/user/login", userDetail)
        .then((res) => {
          const {token} = res.data;
          localStorage.setItem("jwtToken", token);
          setAuthToken(token);
          const decoded =  jwt_decode(token);
          dispatch(setCurrentUser(decoded));
           
        })
        .catch((err) => console.log(err))
}

export const setCurrentUser = (decoded) =>{
  return {
    type: CURRENT_USER,
    payload:decoded
  }
}

export const LogutUser = () => (dispatch) =>{
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser(false));
   
}

export const GetUserFunc = () => (dispatch) => { 
  axios.get("http://localhost:5000/user/getuser")
        .then((res) =>
          dispatch({
            type: GET_USER,
            payload: res.data,
          }))
        .catch((err) => console.log(err))
} 

export const DeleteUserFunc = (id) => (dispatch) => { 
  axios.delete(`http://localhost:5000/user/deleteuser/${id}`)
        .then((res) =>
          dispatch({
            type: CURRENT_USER,
            payload: res.data,
          }),
          localStorage.removeItem("jwtToken"),
          window.location.href = "/register")
        .catch((err) => console.log(err))
} 

 
