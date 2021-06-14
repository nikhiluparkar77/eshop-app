import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { RegisterFunc } from '../../store/actions/authAction';

const SignUP = ({RegisterFunc}) => {
  const [userData, setUserData] = useState({
    name: "",
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
      name: userData.name,
      email: userData.email,
      password: userData.password
    }
    RegisterFunc(userDetail);
    
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="signForm">
          <form onSubmit={handleSubmit}>
            <h4>Register</h4>
            <hr />
            <div className="form-group">
               <label>Name:</label>
               <input type="text" className="form-control" value={userData.name} onChange={(e) => handleChange(e)} name="name" />
             </div>
             <div className="form-group">
               <label>Email Id:</label>
               <input type="text" className="form-control" value={userData.email} onChange={(e) => handleChange(e)} name="email" />
             </div>
             <div className="form-group">
               <label>Password:</label>
               <input type="password" className="form-control" value={userData.password} onChange={(e) => handleChange(e)} name="password" />
             </div>
             <div className="form-group">
               <button type="submit" className="btn btn-secondary">SUBMIT</button>
               <Link to="/login"><button type="button" className="btn btn-secondary float-right">LOGIN</button></Link>
             </div>
           </form>
          </div>
           
        </div>
      </div>
    </div>
  )

}

SignUP.propTypes = {
  RegisterFunc: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  RegisterFunc
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUP);
