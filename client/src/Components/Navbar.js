import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {  faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {  LogutUser } from '../store/actions/authAction';

 const NavBar = ({ userAuth, LogutUser }) => {   
  
  
   
   
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
                  <Link className="nav-link" to="/your-order">Order</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/history">History</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faUser} />
                     
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/profile">Profile</Link> 
                    <Link className="dropdown-item" to="#!" onClick={LogutUser}>Logout</Link> 
                  </div>
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

 NavBar.propTypes = {
  LogutUser: PropTypes.func.isRequired, 
  userAuth: PropTypes.object.isRequired
}

 const mapStateToProps = (state) =>({
    userAuth: state.userAuth,
     
 })

 const mapDispatchToProps = {
  LogutUser,
 
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
 
 

 
 