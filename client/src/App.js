import React, {useEffect} from "react";
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Pages/setAuthTokan/SetAuthToken";
import { setCurrentUser } from "./store/actions/authAction"; 
import HomeRouter from "./Pages/Route/HomeRouter";
import store from "./store/Store"; 
import Footer from "./Components/Footer"; 
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
  }
} 


function App() {
  return (
    <div className="App">
     <Provider store={store}>  
        <Router> 
          <Switch> 
            <Route exect path="/admin" component={AdminRouting} /> 
            <Route exect path="/" component={HomeRouter} /> 
          </Switch> 
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
