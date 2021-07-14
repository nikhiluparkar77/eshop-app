import React, {useState, useEffect} from "react";
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom"; 
import NavBar from "../../Components/Navbar"; 
import LandingPage from "../../Pages/LandingPage/LandingPage";
import SingIn from "../../Pages/Auth/SingIn";
import SignUP from "../../Pages/Auth/SignUp";  
import ProductDetails from "../ProductDetails/ProductDetails";
import UserCart from "../Cart/UserCart";
import { connect } from "react-redux";
import { GetUserFunc } from "../../store/actions/authAction";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Profile/UserProfile";



 

function HomeRouter() {

 
 
  const [cart, setCart] = useState([]);
  return (
    <div className="App"> 
        <Router>
          <NavBar />
          <Switch> 
            <PrivateRoute path="/profile" component={UserProfile} />
            <PrivateRoute exect path="/cart" component={UserCart} /> 
            <Route exect path="/register" component={SignUP} />
            <Route exect path="/login" component={SingIn} /> 
            <Route exect path="/details/:id" component={ProductDetails} /> 
            <Route exect path="/" component={LandingPage} /> 
          </Switch> 
        </Router>  
    </div>
  );
}

 

export default HomeRouter;
