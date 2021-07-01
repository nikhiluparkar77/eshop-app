import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { ProductListFunc } from '../../store/actions/productAction'; 
import bike from "../../uploads/bike.jpg";


const LandingPage = ({ ProductListFunc, product }) => {
  const [productView, setProductView] = useState([]);

  useEffect(() => {
    ProductListFunc();
  },[]);

  useEffect(() => {
    setProductView(product);
  },[product]);

  const ListOfProduct = () => {
     if(productView){
        return(
          productView.map((item, index) =>(
            <div className="col-lg-3" key={index}>
              <div className="ProductItem">
                <div className="card">
                  <img className="card-img-top" src={bike} alt="Card image"  />
                  <div className="card-body">
                    <h4 className="card-title"> {item.name}</h4>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                  </div>
                </div>
               
              </div>
            </div>
          ))
        )
     }
  }

  console.log(productView)
  
  
  return (
    <div className="container-fluid">
      <div className="row">
        {ListOfProduct()}
      </div>
    </div>
  )
}

LandingPage.propTypes = {
  ProductListFunc: PropTypes.func.isRequired, 
}

const mapStateToProps = (state) => ({
  product: state.product.productList.product
})

const mapDispatchToProps = {
  ProductListFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
