import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { LoginFunc } from '../../store/actions/authAction';

const SingIn = ({LoginFunc}) => {

  const [userData, setUserData] = useState({ 
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    })
 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetail = { 
      email: userData.email,
      password: userData.password
    }
    LoginFunc(userDetail);
    
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="signForm">
          <form onSubmit={handleSubmit}>
            <h4>Login</h4>
            <hr />
             <div className="form-group">
               <label>Email Id:</label>
               <input type="text" className="form-control" name="email" value={userData.email} onChange={(e) => handleChange(e)} />
             </div>
             <div className="form-group">
               <label>Password:</label>
               <input type="password" className="form-control" name="password" value={userData.password} onChange={(e) => handleChange(e)} />
             </div>
             <div className="form-group">
               <button type="submit" className="btn btn-secondary">SUBMIT</button>
               <Link to="/register"><button type="button" className="btn btn-secondary float-right">REGISTER</button></Link>
             </div>
           </form>
          </div>
           
        </div>
      </div>
    </div>
  )
}

SingIn.propTypes = {
  LoginFunc: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  LoginFunc
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
