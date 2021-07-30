import React, {useState, useEffect} from 'react';

const UserOrder = () => {
  const [orderData, setOrderData] = useState({
    address:"",
    city:"",
    pincode:"",
    state:"",
    country:"",
    payment:""
  })

  const HandleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    })
  }
  console.log(orderData);
  return (
    <div className="container-fluid"> 
      <div className="CommanBlock">  
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Address:- </label>
                    <textarea type="text" name="address" onChange={(e) => HandleChange(e)} value={orderData.address} className="form-control" row="4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>City:- </label>
                    <input type="text" name="city" onChange={(e) => HandleChange(e)}  value={orderData.city} className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Pincode:- </label>
                    <input type="text" name="pincode" onChange={(e) => HandleChange(e)}  value={orderData.pincode} className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>State:- </label>
                    <input type="text" name="state" onChange={(e) => HandleChange(e)}  value={orderData.state} className="form-control"  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Country:- </label>
                    <input type="text" name="country" onChange={(e) => HandleChange(e)}  value={orderData.country} className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Amount:- </label>
                    <input type="text" name="payment" onChange={(e) => HandleChange(e)}  value={orderData.payment} className="form-control"  />
                </div>
              </div> 
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                <button type="submit" className="btn btn-secondary">Place Order</button> 
                <button type="button"  className="btn btn-secondary" style={{marginLeft:"15px"}}>RESET</button> 
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserOrder;
