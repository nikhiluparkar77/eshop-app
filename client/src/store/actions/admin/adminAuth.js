import axios from "axios";
import { CURRENT_ADMIN } from "../type"; 
import jwt_decode from "jwt-decode"; 
import setAuthToken from "../../../Pages/setAuthTokan/SetAuthToken";

export const AdminRegisterFunc = (adminDetail ) => async (dispatch) => {
  try {
   const response =  axios.post(`${process.env.REACT_APP_ADMIN_REGISTER}`, adminDetail);

   dispatch({
     type:CURRENT_ADMIN,
     playload:response.data
   })
    return response
  } catch (error) {
    dispatch({
      type:CURRENT_ADMIN,
      payload:error.response.data
    })
    return error.response.data
  } 
  
} 

export const AdminLoginFunc = (adminDetail) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_ADMIN_LOGIN}` , adminDetail);
    const {token} = response.data;
    localStorage.setItem("jwtAdminToken", token);
    setAuthToken(token);
    const decoded =  jwt_decode(token);
    dispatch(setCurrentAdmin(decoded));  
  } catch (error) {
    dispatch({
      type:CURRENT_ADMIN,
      payload: error.response.data
    })
    return error.response.data;
  }
  console.log(process.env)
  
}

export const setCurrentAdmin = (decoded) =>{
  return {
    type: CURRENT_ADMIN,
    payload:decoded
  }
}

export const AdminLogut = () => (dispatch) =>{
  localStorage.removeItem("jwtAdminToken");
  setAuthToken(false);
  dispatch(setCurrentAdmin(false));
}