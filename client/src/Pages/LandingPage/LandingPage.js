import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductListFunc } from '../../store/actions/productAction'; 
import bike from "../../uploads/bike.jpg";
import { AddCartFunc } from '../../store/actions/cartAction';


const LandingPage = ({ ProductListFunc, product, AddCartFunc, userAuth }) => {
  
  const [productView, setProductView] = useState([]); 

  useEffect(() => {
    ProductListFunc();
  },[]);

  useEffect(() => {
    setProductView(product);
  },[product]);

  const addCart = (product) => {
    const cartProduct = { 
      name: product.name,
      brand:product.brand, 
      price: product.price,  
    }
    AddCartFunc(cartProduct);
  }

  const cartAlert = () => {
    alert("Please Login.");
  } 
  
  const ListOfProduct = () => {
     if(productView){
        return(
          productView.map((item, index) =>(
            <div className="col-lg-3" key={index}>
              <div className="ProductItem">
                <div className="card">
                  <img className="card-img-top" src={bike} alt="Card image"  />
                  <p className="BikeUnits">{index + 1}</p> 
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h4 className="card-title"> {item.name}</h4>
                        <p>Rs.{item.price}/-</p>
                      </div>
                      <div className="col-md-4">
                        <p className="card-text">{item.brand}</p>
                      </div>
                    </div> 
                     {userAuth.isAuthenticated ? (<button className="btn btn-secondary" onClick={(e)=>addCart(item)}>Buy Now</button>) : (<button className="btn btn-secondary" onClick={(e)=>cartAlert()}>Buy Now</button>) }
                    <Link to={`/details/${item._id}`} className="btn btn-secondary" style={{marginLeft:"15px"}}>View</Link>
                    
                  </div>
                </div>
               
              </div>
            </div>
          ))
        )
     }
  }

 
  
  
  return (
    <div className="container-fluid productListPage">
       
      <div className="row">
        {ListOfProduct()}
      </div>
      
    </div>
  )
}

LandingPage.propTypes = {
  ProductListFunc: PropTypes.func.isRequired, 
  AddCartFunc: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  product: state.product.productList.product,
  userAuth: state.userAuth,
})

const mapDispatchToProps = {
  ProductListFunc,
  AddCartFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
