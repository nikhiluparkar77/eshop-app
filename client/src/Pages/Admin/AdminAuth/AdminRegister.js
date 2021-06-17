import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { AdminRegisterFunc } from '../../../store/actions/admin/adminAuth';
// import { RegisterFunc } from '../../store/actions/authAction';

const AdminRegister = ({AdminRegisterFunc}) => {
  const [adminData, setAdminData] = useState({
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

        if(adminData.name === ""){
          Name_Text = "* Required Field!";
          Name_err = true;
        }

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
    let validationRequir = formValidation();

    if(validationRequir){
      const adminDetail = {
        name: adminData.name,
        email: adminData.email,
        password: adminData.password
      }
      AdminRegisterFunc(adminDetail)
       
    }
    
    
  }

  const handleReset = (e) => {
    setAdminData({
      name: "",
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
            <h4>Create New Admin</h4>
            <hr />
            <div className="form-group">
               <label>Name:</label>
               <input 
                  type="text" 
                  className="form-control" 
                  value={adminData.name} 
                  onChange={(e) => handleChange(e)} V
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
                  value={adminData.email} 
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
                  value={adminData.password} 
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
              <button type="button" onClick={handleReset} className="btn btn-secondary">RESET</button> 
             </div>
           </form>
          </div>
           
        </div>
      </div>
    </div>
  )

}

AdminRegister.propTypes = {
  AdminRegisterFunc: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  AdminRegisterFunc
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AdminRegister);
