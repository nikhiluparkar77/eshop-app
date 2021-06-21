import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

 const AdminNavBar = ({adminAuth}) => { 

   
  
   
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
              <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>
                    </li> 
                <li className="nav-item">
                  <Link className="nav-link" to="/">Payment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Create Admin</Link>
                </li> 
                
              </>
              
             
           ) : null} 
           
          </ul> 
        </div>
      </nav>
   )
 }

 const mapStateToProps = (state) =>({ 
    adminAuth: state.adminAuth
 })

 const mapDispatchToProps = {

 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(AdminNavBar);
 
 

 
 