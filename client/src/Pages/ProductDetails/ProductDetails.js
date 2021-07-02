import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductDetailFunc } from '../../store/actions/productAction';
import bike from "../../uploads/bike.jpg";


const ProductDetails = ({ProductDetailFunc, product}) => {

  const [detailProduct,setDetailProduct] = useState([]);

  const params = useParams(); 
  
  useEffect(()=>{
    if(params){
      ProductDetailFunc(params.id)
    } 
  },[params.id])

  useEffect(() => {
    setDetailProduct(product)
  },[product])

  
  const DetailProduct = () => {
    if(detailProduct){
      return(
        <div className="row">
          <div className="col-md-7">
            <img src={bike} className="productImg" />
          </div>
          <div className="col-md-4">
            <h4>Name:- {detailProduct.name}</h4>
            <h5>Category:- {detailProduct.category}</h5>
            <h6>Avilable:- {detailProduct.inStock}</h6>
            <h4>Price:- Rs.{detailProduct.price}/-</h4>
            <h6>In Stock:- {detailProduct.sold}</h6>
            <h6>Brand:- {detailProduct.brand}</h6>
            <p>Detail:- {detailProduct.detail}</p>
            <Link to="/cart" className="btn btn-secondary" >Buy Now</Link>
          </div>
        </div>
      )
    }else{
      return(
        <div className="row">
          <div className="col-md-12">
            <h2>No Product Avilable</h2>
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className="productDetails">
      <div className="container-fluid">
        {DetailProduct()}
      </div>
    </div>
  )
}
 
ProductDetails.propTypes = {
  ProductDetailFunc: PropTypes.func.isRequired, 
}

const mapStateToProps = (state) => ({
  product: state.product.singleProduct.product
})

const mapDispatchToProps = {
  ProductDetailFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
