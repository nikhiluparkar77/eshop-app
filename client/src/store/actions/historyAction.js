import axios from "axios";
import { CREATE_HISTORY } from "./type";

export const CreateHistoryFunc = (history) => (dispatch) => {
  console.log(history)
  axios.patch("http://localhost:5000/user/history", {history})
  .then((res) => dispatch({
    type:CREATE_HISTORY,
    payload: res.data
  }))
  .catch((err) => console.log(err)) 
}