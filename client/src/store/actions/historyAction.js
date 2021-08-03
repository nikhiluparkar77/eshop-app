import axios from "axios";
import { CREATE_HISTORY } from "./type";

export const CreateHistoryFunc = (history) => (dispatch) => { 
  axios.patch("http://localhost:5000/user/history", {history})
  .then((res) => dispatch({
    type:CREATE_HISTORY,
    payload: res.data
  }))
  .catch((err) => console.log(err)) 
}