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
  const [Err, setErr] = useState({
    email:false,
    password: false
  })
  const [errText, setErrText] = useState({
    email:"",
    password: ""
  })

  let Email_Text,
      Email_err,
      Pwd_Text,
      Pwd_err;
  
       
      
  const formValidation = () => {
    if (userData.email === ""){
      Email_Text = "* Required Field!";
      Email_err = true;
    } else if(userData.email !== ""){
      let validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!validEmail.test(userData.email)){
        Email_Text = "* Please enter valid email address";
        Email_err = true; 
      }      
    }
    if(userData.password === ""){
      Pwd_Text = "* Required Field!";
      Pwd_err = true;
    } 

    setErrText({
      email:Email_Text,
      password:Pwd_Text
    })

    setErr({
      email:Email_err,
      password: Pwd_err
    })

    let ValidationCheck = true;
    if(Email_err === true || Pwd_err === true) {
      ValidationCheck =  false; 
    }
    return ValidationCheck;
  }

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    })
 
  }

  const handleBhur = (e) => {
    if(e.target.value === ""){
      setErrText({
        ...errText,
        [e.target.name] : "* Required Field!"
      }) 
      setErr({
        ...Err,
        [e.target.name]: true
      })
    }else if(
      e.target.name === "email" &&
      e.target.value !== ""
    ){
      if(userData.email !== ""){
        let validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!validEmail.test(userData.email)){ 
          setErrText({
            ...errText,
            [e.target.name] : "* Please enter valid email address"
          }) 
          setErr({
            ...Err,
            [e.target.name]: true
          })
        }else{
          setErrText({
            ...errText,
            [e.target.name] : ""
          }) 
          setErr({
            ...Err,
            [e.target.name]: false
          })
        }      
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationRequir = formValidation();
    if(validationRequir){
      const userDetail = { 
        email: userData.email,
        password: userData.password
      }
      LoginFunc(userDetail);
    } 
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
               <input 
                  type="text" 
                  className="form-control" 
                  name="email" 
                  value={userData.email} 
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBhur}
                  style={Err.email ? {border : "1px solid red" } : null}
                  required={true}
                  error={Err.email}
                  
               />
               <span style={{color: "red", fontSize: "12px"}}>{errText.email}</span>
             </div>
             <div className="form-group">
               <label>Password:</label>
               <input 
                  type="password" 
                  className="form-control" 
                  name="password" 
                  required={true}
                  value={userData.password} 
                  onChange={(e) => handleChange(e)} 
                  onBlur={handleBhur}
                  style={Err.password ? {border : "1px solid red"} : null}
                  error={Err.password}
                  
                />
                <span style={{color: "red", fontSize: "12px"}}>{errText.password}</span>
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
