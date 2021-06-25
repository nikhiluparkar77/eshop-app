
import React from 'react'; 
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import AdminNavBar from '../../../Components/Admin/AdminNavBar';
import ProductList from '../ProductList/ProductList';
import AdminLogin from '../AdminAuth/AdminLogin'; 
import AdminRegister from '../AdminAuth/AdminRegister'; 
import CreateProduct from '../CreateProduct/CreateProduct';
import AdminPrivateRoute from "./AdminPrivateRoute";

const AdminRouting = () => { 

  return (
    <Router> 
      <AdminNavBar /> 
      <Switch> 
        {/* <Route exect path="/" component={AdminLandingPage} />  */}
        <AdminPrivateRoute exect path="/admin/product" component={ProductList} />
        <AdminPrivateRoute exect path="/admin/create-product" component={CreateProduct} />
         <AdminPrivateRoute exect path="/admin/create-admin" component={AdminRegister} />
        <Route exect path="/" component={AdminLogin} /> 
        
      </Switch> 
    </Router>
  )
}



export default AdminRouting;
 
