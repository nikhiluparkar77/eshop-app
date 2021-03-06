import {combineReducers} from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import adminReducer from "./admin/adminReducer";
import adminCreateProductReducer from "./admin/AdminProductReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  product: productReducer,
  userAuth: userReducer ,
  adminAuth: adminReducer,
  adminProduct: adminCreateProductReducer, 
  cart:cartReducer,
  order: orderReducer
})