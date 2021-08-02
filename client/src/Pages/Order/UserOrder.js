import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { CreateOrderFunc } from '../../store/actions/orderAction';

const UserOrder = ({user, CreateOrderFunc}) => {
  const [orderData, setOrderData] = useState({
    userId:"",
    address:"",
    city:"",
    pincode:"",
    state:"",
    country:"",
    payment:""
  })
  const [Err, setErr] = useState({
    address: false,
    city:false,
    pincode: false,
    state:false,
    country:false,
    payment:false
  })
  const [errText, setErrText] = useState({
    address: "",
    city:"",
    pincode: "",
    state:"",
    country:"",
    payment:""
  })

  let addressText,
      addressErr,
      cityText,
      cityErr,
      pincodeText,
      pincodeErr,
      stateText,
      stateErr,
      countryText,
      countryErr,
      paymentText,
      paymentErr;


  const fromValidation = () => {
    if(orderData.address === ""){
      addressText = "* Required Feild.";
      addressErr = true;
    }
    if(orderData.city === ""){
      cityText = "* Required Feild.";
      cityErr = true;
    }
    if(orderData.pincode === ""){
      pincodeText = "* Required Feild.";
      pincodeErr = true;
    }
    if(orderData.state === ""){
      stateText = "* Required Feild.";
      stateErr = true;
    }
    if(orderData.country === ""){
      countryText = "* Required Feild.";
      countryErr = true;
    }
    if(orderData.payment === ""){
      paymentText = "* Required Feild.";
      paymentErr = true;
    }

    setErrText({
      address:addressText,
      city:cityText,
      pincode:pincodeText,
      state:stateText,
      country:countryText,
      payment:paymentText
    })

    setErr({
      address:addressErr,
      city:cityErr,
      pincode:pincodeErr,
      state:stateErr,
      country:countryErr,
      payment:paymentErr 
    })

    let ValidateCheck = true;
    if(
      addressErr === true ||
      cityErr === true ||
      pincodeErr === true ||
      stateErr === true ||
      countryErr === true ||
      paymentErr === true
    ){
      ValidateCheck = false;
    }
    return ValidateCheck;
  }

  const HandleBlur = (e) =>{
    if(e.target.value === ""){
      setErrText({
        ...errText,
        [e.target.name] : "* Required Field!"
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

  useEffect(()=>{
    let totalAmt = localStorage.getItem("totalPrice"); 
    setOrderData({
      ...orderData, 
      payment:totalAmt
    })
  },[])
  const HandleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    })
  }

  

  const HandleSubmit = (e) => {
    e.preventDefault();

    let validationRequir = fromValidation();
    if(validationRequir){
      const orderInfo = { 
        address: orderData.address,
        city:orderData.city,
        pincode:orderData.pincode,
        state:orderData.state,
        country:orderData.country,
        payment:orderData.payment
      }
      CreateOrderFunc(orderInfo);
    }
  }

  const HandleReset = (e) => {
    setOrderData({
      ...orderData,
      address:"",
      city:"",
      pincode:"",
      state:"",
      country:"",
      payment:""
    })
    setErr({
      ...Err,
      address:false,
      city:false,
      pincode:false,
      state:false,
      country:false,
      payment:false
    })
     
  } 
  
  return (
    <div className="container-fluid"> 
      <div className="CommanBlock">  
        <div className="row">
          <div className="col-md-8 m-auto">
            <form onSubmit={HandleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Address:- </label>
                    <textarea 
                      type="text" 
                      name="address" 
                      onChange={(e) => HandleChange(e)}
                      onBlur={(e) => HandleBlur(e)} 
                      value={orderData.address} 
                      className="form-control" 
                      row="4"
                      error={Err.address} 
                      style={Err.address ? {border : "1px solid red" } : null}
                    />
                    <span style={{color: "red", fontSize: "12px"}}>{errText.address}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>City:- </label>
                    <input 
                      type="text" 
                      name="city" 
                      onChange={(e) => HandleChange(e)}  
                      onBlur={(e) => HandleBlur(e)}
                      value={orderData.city} 
                      className="form-control" 
                      error={Err.city} 
                      style={Err.city ? {border : "1px solid red" } : null}
                    />
                     <span style={{color: "red", fontSize: "12px"}}>{errText.city}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Pincode:- </label>
                    <input 
                      type="text" 
                      name="pincode" 
                      onChange={(e) => HandleChange(e)}
                      onBlur={(e) => HandleBlur(e)}  
                      value={orderData.pincode} 
                      className="form-control" 
                      error={Err.pincode} 
                      style={Err.pincode ? {border : "1px solid red" } : null}
                    />
                    <span style={{color: "red", fontSize: "12px"}}>{errText.pincode}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>State:- </label>
                    <input 
                      type="text" 
                      name="state" 
                      onChange={(e) => HandleChange(e)}
                      onBlur={(e) => HandleBlur(e)}  
                      value={orderData.state} 
                      className="form-control"  
                      error={Err.state} 
                      style={Err.state ? {border : "1px solid red" } : null}
                    />
                    <span style={{color: "red", fontSize: "12px"}}>{errText.state}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Country:- </label>
                    <input 
                      type="text" 
                      name="country" 
                      onChange={(e) => HandleChange(e)} 
                      onBlur={(e) => HandleBlur(e)} 
                      value={orderData.country} 
                      className="form-control" 
                      error={Err.country} 
                      style={Err.country ? {border : "1px solid red" } : null}
                    />
                    <span style={{color: "red", fontSize: "12px"}}>{errText.country}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Amount in Rs.:- </label>
                    <input 
                      type="text" 
                      name="payment" 
                      onChange={(e) => HandleChange(e)}
                      onBlur={(e) => HandleBlur(e)} 
                      value={orderData.payment} 
                      className="form-control"  
                      error={Err.payment} 
                      style={Err.payment ? {border : "1px solid red" } : null}
                    />
                    <span style={{color: "red", fontSize: "12px"}}>{errText.payment}</span>
                </div>
              </div> 
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                <button type="submit" className="btn btn-secondary">Place Order</button> 
                <button type="button"  className="btn btn-secondary" onClick={(e) => HandleReset(e)} style={{marginLeft:"15px"}}>RESET</button> 
                </div>
              </div> 
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

UserOrder.propTypes = {
  CreateOrderFunc: PropTypes.func.isRequired,  
}

const mapStateToProps = (state) => ({
  user: state.userAuth.user
})

const mapDispatchToProps = {
  CreateOrderFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(UserOrder);
