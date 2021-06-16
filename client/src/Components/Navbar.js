 import React from 'react';
 import { Link } from "react-router-dom";

 const NavBar = (props) => { 
    const userNav = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Sign In</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/">Disabled</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Disabled</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Disabled</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Disabled</Link>
        </li>
      </>
    )
   return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><b>ESHOP APP</b></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
           {userNav}
          </ul> 
        </div>
      </nav>
   )
 }
 
 export default NavBar;
 
 

 
 