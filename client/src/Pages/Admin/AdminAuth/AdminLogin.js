import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'; 
import PropTypes from "prop-types"
import { AdminLoginFunc } from "../../../store/actions/admin/adminAuth";

const AdminLogin = ({AdminLoginFunc}) => {

  const [adminData, setAdminData] = useState({ 
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
        if (adminData.email === ""){
          Email_Text = "* Required Field!";
          Email_err = true;
        } else if(adminData.email !== ""){
          let validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if(!validEmail.test(adminData.email)){
            Email_Text = "* Please enter valid email address";
            Email_err = true; 
          }      
        }
        if(adminData.password === ""){
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
    setAdminData({
      ...adminData,
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
      if(adminData.email !== ""){
        let validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!validEmail.test(adminData.email)){ 
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
    let validationRequir = formValidation()
    if(validationRequir){
      const adminDetail = { 
        email: adminData.email,
        password: adminData.password
      }
      AdminLoginFunc(adminDetail);
    }
    
  }

  const handleReset = (e) => {
    setAdminData({ 
      email:"",
      password:""
    })
    setErrText({
      ...errText, 
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
            <h4>Admin Login</h4>
            <hr />
             <div className="form-group">
               <label>Email Id:</label>
               <input 
                  type="text" 
                  className="form-control" 
                  name="email" value={adminData.email} 
                  onChange={(e) => handleChange(e)} 
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
                  name="password" 
                  value={adminData.password} 
                  onChange={(e) => handleChange(e)} 
                  onBlur={handleBlur}
                  style={Err.email ? {border : "1px solid red" } : null}
                  required={true}
                  error={Err.email}
                />
                <span style={{color: "red", fontSize: "12px"}}>{errText.password}</span>
             </div>
             <div className="form-group">
               <button type="submit" className="btn btn-secondary">SUBMIT</button> 
               <button type="button" onClick={handleReset} className="btn btn-secondary" style={{marginLeft:"15px"}}>RESET</button> 
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
