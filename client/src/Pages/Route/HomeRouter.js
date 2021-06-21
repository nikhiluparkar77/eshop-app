import React, {useEffect} from "react";
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom"; 
import NavBar from "../../Components/Navbar"; 
import LandingPage from "../../Pages/LandingPage";
import SingIn from "../../Pages/Auth/SingIn";
import SignUP from "../../Pages/Auth/SignUp";  



 

 

function HomeRouter() {
  return (
    <div className="App"> 
        <Router>
          <NavBar />
          <Switch> 
            <Route exect path="/register" component={SignUP} />
            <Route exect path="/login" component={SingIn} />
            <Route exect path="/" component={LandingPage} /> 
          </Switch> 
        </Router>  
    </div>
  );
}

export default HomeRouter;
