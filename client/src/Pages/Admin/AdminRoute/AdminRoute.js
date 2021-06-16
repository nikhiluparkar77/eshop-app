
import React, {useEffect, useState} from 'react'; 
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import AdminLogin from '../AdminAuth/AdminLogin'; 
import AdminLandingPage from '../AdminLandingPage';

const AdminRouting = () => { 

  return (
    <Router> 
      <Switch> 
        {/* <Route exect path="/" component={AdminLandingPage} />  */}
        <Route exect path="/" component={AdminLogin} /> 
      </Switch> 
    </Router>
  )
}



export default AdminRouting;
 
