import React, {useEffect} from "react";
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom";
import {ChakraProvider, theme as defualtTheme, CSSReset} from "@chakra-ui/react"
import {Provider} from "react-redux";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";

const theme = {
  ...defualtTheme,
  colors:{
    ...defualtTheme.colors
  }
}

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Navbar />
        <Router>
          <Switch>
            <Route exect path="/" component={LandingPage} />
          </Switch>
        </Router>
       </ChakraProvider>
    </div>
  );
}

export default App;
