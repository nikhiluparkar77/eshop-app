import axios from "axios";
import jwt_decode from "jwt-decode";
import { CURRENT_USER, GET_USER, USER_CART } from "./type";
import setAuthToken from "../../Pages/setAuthTokan/SetAuthToken";


export const RegisterFunc = (userDetail ) => async (dispatch) => { 
  try {
    const response = await axios.post(`${process.env.REACT_APP_USER_REGISTER}`, userDetail);

    dispatch({
      type:CURRENT_USER,
      payload:response.data
    })

    return response;

  } catch (error) {
    console.log(error)
    dispatch({
      type:CURRENT_USER,
      payload: error.response
    })
    return error.response.data;
  }
  
 
} 



export const LoginFunc = (userDetail) => async (dispatch) => {
  try {
    
    const response = await axios.post(`${process.env.REACT_APP_USER_LOGIN}`, userDetail);

    const {token} = response.data;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
    const decoded =  jwt_decode(token);
    dispatch(setCurrentUser(decoded));

  } catch (error) {
    console.log(error)
    dispatch({
      type:CURRENT_USER,
      payload: error.response
    })
    return error.response.data;
  }

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

export const GetUserFunc = () => async (dispatch) => { 
  
  try {
    const response = await axios.get(`${process.env.REACT_APP_GET_USER}`);
    dispatch({
      type:GET_USER,
      payload:response.data
    })
    return response
  } catch (error) {
    dispatch({
      type:GET_USER,
      payload:error.response
    })
    return error.response.data
  }
   
} 

export const DeleteUserFunc = (id) => async (dispatch) => { 
  try {
    const response = await axios.delete(`${process.env.REACT_APP_USER_DELETE}/${id}`);
    dispatch({
      type:CURRENT_USER,
      payload:response.data
    })
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser(false));
    return response
  } catch (error) {
    dispatch({
      type:CURRENT_USER,
      payload:error.response.data
    })
    return error.response.data
  }
 
} 

 
