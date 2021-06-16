import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'; 
import PropTypes from "prop-types"
import { AdminLoginFunc } from "../../../store/actions/admin/adminAuth";

const AdminLogin = ({AdminLoginFunc}) => {

  const [adminData, setaAdminData] = useState({ 
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setaAdminData({
      ...adminData,
      [e.target.name] : e.target.value
    })
 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminDetail = { 
      email: adminData.email,
      password: adminData.password
    }
    AdminLoginFunc(adminDetail);
  }

  return (
    
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="signForm">
          <form onSubmit={handleSubmit}>
            <h4>Admin Login</h4>
            <hr />
             <div className="form-group">
               <label>Email Id:</label>
               <input type="text" className="form-control" name="email" value={adminData.email} onChange={(e) => handleChange(e)} />
             </div>
             <div className="form-group">
               <label>Password:</label>
               <input type="password" className="form-control" name="password" value={adminData.password} onChange={(e) => handleChange(e)} />
             </div>
             <div className="form-group">
               <button type="submit" className="btn btn-secondary">SUBMIT</button> 
             </div>
           </form>
          </div>
           
        </div>
      </div>
    </div>
     
  )
}

AdminLogin.propTypes = {
  AdminLoginFunc: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  AdminLoginFunc
}

const mapStateToProps = (state) => ({

})

 
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
