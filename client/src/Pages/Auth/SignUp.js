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

  const [Err, setErr] = useState({
    name: false,
    email:false,
    password: false
  })
  const [errText, setErrText] = useState({
    name: "",
    email:"",
    password: ""
  })

  let Name_Text,
      Name_err,
      Email_Text,
      Email_err,
       Pwd_Text,
      Pwd_err;


      const formValidation = () => {

        if(userData.name === ""){
          Name_Text = "* Required Field!";
          Name_err = true;
        }

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
          name: Name_Text,
          email:Email_Text,
          password:Pwd_Text
        })
    
        setErr({
          name:Name_err,
          email:Email_err,
          password: Pwd_err
        })
    
        let ValidationCheck = true;
        if(Name_err === true || Email_err === true || Pwd_err === true) {
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

  const handleBlur = (e) => {
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
        name: userData.name,
        email: userData.email,
        password: userData.password
      }
      RegisterFunc(userDetail);
    }
    
    
  }

  const handleReset = (e) => {
    setUserData({ 
      name:"",
      email:"",
      password:""
    })
    setErrText({
      ...errText, 
      name: false,
      email:false,
      password: false
    })  
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
               <input 
                  type="text" 
                  className="form-control" 
                  value={userData.name} 
                  onChange={(e) => handleChange(e)}  
                  name="name" 
                  onBlur={handleBlur}
                  style={Err.name ? {border : "1px solid red" } : null}
                  required={true}
                  error={Err.name}
                />
                <span style={{color: "red", fontSize: "12px"}}>{errText.name}</span>
             </div>
             <div className="form-group">
               <label>Email Id:</label>
               <input 
                  type="text" 
                  className="form-control" 
                  value={userData.email} 
                  onChange={(e) => handleChange(e)} 
                  onBlur={handleBlur}
                  name="email" 
                  onBlur={handleBlur}
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
                  value={userData.password} 
                  onChange={(e) => handleChange(e)} 
                  name="password" 
                  onBlur={handleBlur}
                  style={Err.password ? {border : "1px solid red" } : null}
                  required={true}
                  error={Err.password}
                />
                <span style={{color: "red", fontSize: "12px"}}>{errText.password}</span>
             </div>
             <div className="form-group">
               <button type="submit" className="btn btn-secondary">SUBMIT</button> 
               <button type="button" onClick={handleReset} className="btn btn-secondary" style={{marginLeft:"15px"}}>RESET</button> 
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
