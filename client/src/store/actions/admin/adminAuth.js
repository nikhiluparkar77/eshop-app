import axios from "axios";
import { CURRENT_ADMIN } from "../type"; 
import jwt_decode from "jwt-decode"; 
import setAuthToken from "../../../Pages/setAuthTokan/SetAuthToken";

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
        .then((res) => {
          const {token} = res.data;
          localStorage.setItem("jwtAdminToken", token);
          setAuthToken(token);
          const decoded =  jwt_decode(token);
          dispatch(setCurrentAdmin(decoded));
          console.log(decoded);
        })
        .catch((err) => console.log(err))
}

export const setCurrentAdmin = (decoded) =>{
  return {
    type: CURRENT_ADMIN,
    payload:decoded
  }
}

export const LogutAdmin = () => (dispatch) =>{
  localStorage.removeItem("jwtAdminToken");
  setAuthToken(false);
  dispatch(setCurrentAdmin(false));
}