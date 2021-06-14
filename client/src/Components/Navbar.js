 import React from 'react';
 import {} from "redux";

 const NavBar = (props) => { 
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"><b>ESHOP APP</b></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
         
        <li className="nav-item">
          <a className="nav-link" href="/login">Sign In</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link" href="#">Disabled</a>
        </li>
      </ul>
      
    </div>
  </nav>
   )
 }
 
 export default NavBar;
 
 

 
 