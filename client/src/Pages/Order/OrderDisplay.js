import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { CancleOrderFunc, GetOrderFunc, UpdateOrderFunc } from '../../store/actions/orderAction';


const OrderDisplay = ({GetOrderFunc, order, CancleOrderFunc, UpdateOrderFunc}) => {

  const [orderDisplay, setOrderDisplay] = useState([]);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    GetOrderFunc();
  },[]);

  useEffect(() => {
    setOrderDisplay(order);
    let CartData = JSON.parse(localStorage.getItem("CartData")); 
    setOrderData(CartData)
  },[order]);

  const HandleDelete = (id) => {
    CancleOrderFunc(id);
    setTimeout(() => {
      GetOrderFunc();
    },1000)
  }

  const HandleConfirm = () => {
    const orderDetail = [...orderData];
    UpdateOrderFunc(orderDetail)
  }

  

 

  const DisplayOrderData = () => {
    if(orderDisplay){
      return (orderDisplay.map((item, index) => ( 
        
        <tr key={index}> 
          <td>{item.address}</td> 
          <td>{item.city}</td>
          <td>{item.pincode}</td>
          <td>{item.state}</td>
          <td>{item.country}</td>
          <td align="right">{item.payment}</td> 
          <td><button className="btn btn-secondary" style={{marginLeft:"15px"}} onClick={(e) => HandleConfirm()}>Confirm Order</button> <button className="btn btn-secondary" style={{marginLeft:"15px"}} onClick={(e) => HandleDelete(item._id)}>Cancle Order</button>  </td>  
        </tr>
        )
      )) 
        
    }else{
      return(
        <tr>
          <td colSpan="9" align="center">No Data Avilable</td>
        </tr>
      )
    }
  }
   
  
  return (
    <div className="container-fluid"> 
      <div className="CommanBlock"> 
          
        <h5>Address Details</h5>
        <hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Address</th>
              <th scope="col">City</th> 
              <th scope="col">Pincode</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>   
              <th scope="col">Amount</th>   
              <th scope="col">Action</th>  
            </tr>
          </thead>
          <tbody> 
            {DisplayOrderData()}
          </tbody>
        </table> 
      </div>
    </div>
  )
}

OrderDisplay.propTypes = {
  GetOrderFunc: PropTypes.func.isRequired,   
  CancleOrderFunc: PropTypes.func.isRequired,
  UpdateOrderFunc: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  order:state.order.getOrder.order
})

const mapDispatchToProps = {
  GetOrderFunc,
  CancleOrderFunc,
  UpdateOrderFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDisplay);
