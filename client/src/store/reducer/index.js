import {combineReducers} from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import adminReducer from "./admin/adminReducer";
import adminCreateProductReducer from "./admin/AdminProductReducer";

export default combineReducers({
  product:productReducer,
  userAuth:userReducer ,
  adminAuth: adminReducer,
  createProduct:adminCreateProductReducer
})