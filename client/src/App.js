import React, {useEffect} from "react";
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Pages/setAuthTokan/SetAuthToken";
import { setCurrentUser } from "./store/actions/authAction";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

import store from "./store/Store";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import SingIn from "./Pages/Auth/SingIn";
import SignUP from "./Pages/Auth/SignUp"; 
import AdminRouting from "./Pages/Admin/AdminRoute/AdminRoute";
import { setCurrentAdmin } from "./store/actions/admin/adminAuth";



 

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    localStorage.removeItem("jwtToken");
    window.location = "/login"
  }
}else if(localStorage.jwtAdminToken){
  setAuthToken(localStorage.jwtAdminToken);
  const decoded = jwt_decode(localStorage.jwtAdminToken);
  store.dispatch(setCurrentAdmin(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    localStorage.removeItem("jwtAdminToken");
    window.location = "/admin/"
  }
}


function App() {
  return (
    <div className="App">
     <Provider store={store}> 
        
        <Router>
          <NavBar />
          <Switch>
          
            <Route exect path="/admin" component={AdminRouting} />
            <Route exect path="/register" component={SignUP} />
            <Route exect path="/login" component={SingIn} />
            <Route exect path="/" component={LandingPage} />
            <PrivateRoute exect path="/login" component={SingIn} />
          </Switch>
         
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
