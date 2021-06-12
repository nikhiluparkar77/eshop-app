import React from 'react';
import {Link} from "react-router-dom";

const SingIn = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="signForm">
          <form>
            <h4>Login</h4>
            <hr />
             <div className="form-group">
               <label>Email Id:</label>
               <input type="text" className="form-control" name="email" />
             </div>
             <div className="form-group">
               <label>Password:</label>
               <input type="password" className="form-control" name="password" />
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

export default SingIn;
