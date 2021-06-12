import React, {useEffect} from "react";
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/Store";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import SingIn from "./Pages/Auth/SingIn";
import SignUP from "./Pages/Auth/SignUp";

 

function App() {
  return (
    <div className="App">
     <Provider store={store}> 
        <NavBar />
        <Router>
          <Switch>
          <Route exect path="/register" component={SignUP} />
            <Route exect path="/login" component={SingIn} />
            <Route exect path="/" component={LandingPage} />
            
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
