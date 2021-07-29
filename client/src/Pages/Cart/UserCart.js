import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { DeleteCartFunc, GetCartFunc } from '../../store/actions/cartAction';
import { CreateHistoryFunc } from '../../store/actions/historyAction';

const UserCart = ({GetCartFunc, DeleteCartFunc, CreateHistoryFunc, cart}) => {

  const [cartView, setCartView] = useState([]);
  const [totalPrice, setTotalPrice] = useState(""); 
  
  useEffect(() => {
    GetCartFunc();
  },[]);

  useEffect(() => {
    setCartView(cart);
  },[cart]);

 

  useEffect(() => {

    if(cartView){
      let priceTotal = cartView.reduce((acc, item) => {
        return acc += item.price 
      },0)
      setTotalPrice(priceTotal)
    }
    
  })

  const HandleDelete = (id) => {
    DeleteCartFunc(id)
    setTimeout(()=>{
      GetCartFunc();
    },1000); 
  }

  const OrderDetail = () => { 
    const history = [...cartView];
    CreateHistoryFunc(history);
  }

  const DisplayData = () => {
    if(cartView){
      return (cartView.map((item, index) => ( 
        
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td> 
          <td>{item.brand}</td>
          <td>{item.quentity}</td>
          <td align="right">Rs. {item.price}/-</td>  
          <td>  
            <button className="btn btn-secondary" style={{marginLeft:"15px"}} onClick={(e) => HandleDelete(item._id)}>Remove</button>  
          </td>
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th> 
              <th scope="col">Brand</th>
              <th scope="col">Quantity</th>
              <th scope="col" style={{textAlign:'right'}}>Price</th>  
              <th scope="col" >Action</th>
            </tr>
          </thead>
          <tbody> 
              {DisplayData()}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td colSpan="4" align="right">Rs. {totalPrice}/-</td>
              <td> <button className="btn btn-secondary" style={{marginLeft:"15px"}} onClick={(e) => OrderDetail()} >Pay Amount</button> </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

UserCart.propTypes = {
  GetCartFunc: PropTypes.func.isRequired, 
  DeleteCartFunc: PropTypes.func.isRequired, 
  CreateHistoryFunc: PropTypes.func.isRequired, 
}

const mapStateToProps = (state) => ({
  cart:state.cart.cart.getCart
})

const mapDispatchToProps = {
  GetCartFunc,
  DeleteCartFunc,
  CreateHistoryFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
