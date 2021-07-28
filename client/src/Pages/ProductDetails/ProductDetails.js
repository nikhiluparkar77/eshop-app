import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductDetailFunc, ProductListFunc } from '../../store/actions/productAction';
import bike from "../../uploads/bike.jpg"; 
import { AddCartFunc } from '../../store/actions/cartAction';


const ProductDetails = ({ProductDetailFunc, ProductListFunc, product, productList, AddCartFunc }) => {

  const [detailProduct,setDetailProduct] = useState([]);
  const [listProduct,setListProduct] = useState([]);

  const params = useParams();  
  
  useEffect(()=>{
    if(params){
      ProductDetailFunc(params.id)
    } 
  },[params.id])

  useEffect(() => {
    setDetailProduct(product)
  },[product])

  useEffect(() => {
    ProductListFunc();
  },[])

  useEffect(() => {
    if(productList){
      let filterProduct = productList === 0 || productList.filter((item) => item.brand === detailProduct.brand);
      setListProduct(filterProduct);
    }else{
      setListProduct([]);
    }
    
    
  },[productList]);


 const addCart = (product) => {
  const cartProduct = { 
    name: product.name,
    brand:product.brand, 
    price: product.price,  
  }
    
  AddCartFunc(cartProduct);
 }
 

   
  const DetailProduct = () => {
    if(detailProduct){
        return(
          <div className="row">
            <div className="col-md-7">
              <img src={bike} className="productImg" />
            </div>
            <div className="col-md-4">
              <h4>Name: {detailProduct.name}</h4>
              <h5>Category: {detailProduct.category}</h5>
              <h6>Avilable: {detailProduct.inStock}</h6>
              <h4>Price: Rs.{detailProduct.price}/-</h4>
              <h6>In Stock: {detailProduct.sold}</h6>
              <h6>Brand: {detailProduct.brand}</h6>
              <p><b>Detail:</b><br /> {detailProduct.detail}</p>
              <button className="btn btn-secondary" onClick={(e)=>addCart(detailProduct)}>Buy Now</button>
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

  const ListOfProduct = () => {
    if(productList){
        return (listProduct.map((item,index) => ( 
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
                  <Link to="/cart" className="btn btn-secondary" >Buy Now</Link>
                  <Link to={`/details/${item._id}`} className="btn btn-secondary" style={{marginLeft:"15px"}}>View</Link> 
                </div>
              </div> 
            </div>
          </div> 
        ))
      ) 
   }else{
    return( 
        <div className="col-md-12">
          <h2>No Product Avilable</h2>
        </div> 
      )
   }
}


  
  return (
    <div className="productDetails">
      <div className="container-fluid">
        {DetailProduct()}
        <div className="row">
          <div className="col-md-12">
            <h5>Related Product</h5>
            <hr />
          </div>
        </div>
          <div className="row">
           {ListOfProduct()}
        </div>
      </div>
      
  </div>
  )
}
 
ProductDetails.propTypes = {
  ProductDetailFunc: PropTypes.func.isRequired, 
  AddCartFunc: PropTypes.func.isRequired, 
}

const mapStateToProps = (state) => ({
  product: state.product.singleProduct.product,
  productList: state.product.productList.product
})

const mapDispatchToProps = {
  ProductDetailFunc,
  ProductListFunc, 
  AddCartFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
