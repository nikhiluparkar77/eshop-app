
import React, {useEffect, useState} from 'react'; 
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import AdminNavBar from '../../../Components/Admin/AdminNavBar';
import AdminLogin from '../AdminAuth/AdminLogin'; 
import AdminRegister from '../AdminAuth/AdminRegister';
import AdminLandingPage from '../AdminLandingPage';
import AdminPrivateRoute from "./AdminPrivateRoute";

const AdminRouting = () => { 

  return (
    <Router> 
      <AdminNavBar />
      
      <Switch> 
        {/* <Route exect path="/" component={AdminLandingPage} />  */}
         <AdminPrivateRoute exect path="/admin/new-admin" component={AdminRegister} />
        <Route exect path="/" component={AdminLogin} /> 
        
      </Switch> 
    </Router>
  )
}



export default AdminRouting;
 
