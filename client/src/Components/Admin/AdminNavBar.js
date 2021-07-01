import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { AdminLogut } from '../../store/actions/admin/adminAuth';

 const AdminNavBar = ({ adminAuth, AdminLogut }) => {  
 
   return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <Link className="navbar-brand" to="/admin"><b>ESHOP APP</b></Link> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
           {adminAuth.isAuthenticated   ? (
              <> 
                <li className="nav-item dropdown">
                  <Link className="nav-link " to="/admin/product">Products</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to="/">Payment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/create-admin">Add Admin</Link>
                </li>  
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#!" onClick={AdminLogut}>Logout</Link> 
                  </div>
                </li>
              </> 
             
           ) : null} 
           
          </ul> 
        </div>
      </nav>
   )
 }

 AdminNavBar.propTypes = {
  adminAuth: PropTypes.object.isRequired,
  AdminLogut: PropTypes.func.isRequired
}

 const mapStateToProps = (state) =>({ 
    adminAuth: state.adminAuth
 })

 const mapDispatchToProps = {
  AdminLogut
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(AdminNavBar);
 
 

 
 