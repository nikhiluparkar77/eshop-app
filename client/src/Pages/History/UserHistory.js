import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { GetUserFunc } from '../../store/actions/authAction';

const UserHistory = ({GetUserFunc, user}) => {

  const [historyView, setHistory] = useState([]); 

  
  useEffect(() => {
    GetUserFunc()
  },[]);

  useEffect(() => {
    setHistory([...user.history]);
  },[user]);

   
  // console.log(user.history)

  const DisplayData = () => {
    if(historyView){
      return (historyView.map((item, index) => ( 
        
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td> 
          <td>{item.brand}</td>
          <td>{item.quentity}</td>
          <td align="right">Rs. {item.price}/-</td>  
           
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
      <h5>History</h5>
        <hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th> 
              <th scope="col">Brand</th>
              <th scope="col">Quantity</th>
              <th scope="col" style={{textAlign:'right'}}>Price</th>  
               
            </tr>
          </thead>
          <tbody> 
              {DisplayData()}
            
            
          </tbody>
           
        </table>
      </div>
    </div>
  )
}

UserHistory.propTypes = {
  GetUserFunc:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user:state.userAuth.getUser.user
})

const mapDispatchToProps = {
  GetUserFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);
