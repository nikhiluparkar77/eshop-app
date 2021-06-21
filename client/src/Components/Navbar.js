import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

 const NavBar = ({userAuth}) => { 

   
  
   
   return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <Link className="navbar-brand" to="/"><b>ESHOP APP</b></Link> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
           {userAuth.isAuthenticated   ? (
              <> 
              <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>
                    </li> 
                <li className="nav-item">
                  <Link className="nav-link" to="/">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">History</Link>
                </li>
                
              </>
              
             
           ) : (
             <>
             <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/login">Sign In</Link>
            </li> 
             </>
           )} 
           
          </ul> 
        </div>
      </nav>
   )
 }

 const mapStateToProps = (state) =>({
    userAuth: state.userAuth,
 })

 const mapDispatchToProps = {

 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
 
 

 
 