import React, {useState} from 'react'; 
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import AdminBreadcrumb from "../../../Components/Admin/Breadcrumb";
import { CreateProductFunc } from '../../../store/actions/admin/AdminProductAction';

const CreateProduct = ({CreateProductFunc}) => { 
  const [image,setImage] = useState({})
  const [product, setProduct] = useState({ 
    productImage:null,
    name:"",
    category:"",
    brand:"",
    price:"",
    inStock:"",
    detail:"",
    sold:"",  
  })

  const [newErr, setNewErr] = useState({
    productImage:false,
    name:false,
    category:false,
    brand:false,
    price:false,
    inStock:false,
    detail:false,
    sold:false,
  })

  const [newErrText, setNewErrText] = useState({
    productImage:"",
    name:"",
    category:"",
    brand:"",
    price:"",
    inStock:"",
    detail:"",
    sold:"",  
  })

  let ProductImgText,
      ProductImgErr,
      NameText,
      NameErr,
      CategoryText,
      CategoryErr,
      BrandText,
      BrandErr,
      PriceText,
      PriceErr,
      InStockText,
      InStockErr,
      DetailText,
      DetailErr,
      SoldText,
      SoldErr;

  const formValidation = () => {
    if(product.productImage === "") {
      ProductImgText = "* Required Feild";
      ProductImgErr = true;
    }


    if(product.name === "") {
      NameText = "* Required Feild";
      NameErr = true;
    }

    if(product.category === "") {
      CategoryText = "* Required Feild";
      CategoryErr = true;
    }

    if(product.brand === "") {
      BrandText = "* Required Feild";
      BrandErr = true;
    }

    if(product.price === "") {
      PriceText = "* Required Feild";
      PriceErr = true;
    }

    if(product.inStock === "") {
      InStockText = "* Required Feild";
      InStockErr = true;
    }

    if(product.detail === "") {
      DetailText = "* Required Feild";
      DetailErr = true;
    }

    if(product.sold === "") {
      SoldText = "* Required Feild";
      SoldErr = true;
    }

    setNewErrText({
      ...newErrText,
      productImage:ProductImgText,
      name:NameText,
      category:CategoryText,
      brand:BrandText,
      price:PriceText,
      inStock:InStockText,
      detail:DetailText,
      sold:SoldText,  
    })

    setNewErr({
      newErr,
      productImage:ProductImgErr,
      name:NameErr,
      category:CategoryErr,
      brand:BrandErr,
      price:PriceErr,
      inStock:InStockErr,
      detail:DetailErr,
      sold:SoldErr,  
    })


    let ValidationCheck = true;
    if(
      ProductImgErr === true ||
      NameErr === true ||
      CategoryErr === true ||
      BrandErr === true ||
      PriceErr === true ||
      InStockErr === true ||
      DetailErr === true ||
      SoldErr === true
    ){
      ValidationCheck = false;
    }
    return ValidationCheck;

  }

  const handleBlur = (e) => {
    if(e.target.value === ""){
      setNewErrText({
        ...newErrText,
        [e.target.name] : "* Required Field!"
      }) 
      setNewErr({
        newErr,
        [e.target.name]: true
      })
    }else{
      setNewErrText({
        ...newErrText,
        [e.target.name] : ""
      }) 
      setNewErr({
        newErr,
        [e.target.name]: false
      })
    }
  }


  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  } 

  const handleUpload = (e) => { 
    const file = e.target.files[0]; 
    setImage(file); 
  }
  console.log(image)
 
  const handleSubmit = (e) => {
    e.preventDefault();

    let validationRequir = formValidation();
    if(validationRequir){
    
       const formData = new FormData();
       formData.append("file", image)

      const productData = {
        productImage:formData,
        name:product.name,
        category:product.category,
        brand:product.brand,
        price:product.price,
        inStock:product.inStock,
        sold:product.sold,
        detail:product.detail
      }
      CreateProductFunc(productData) 
    }
  }


 
  return (
    <div>
      <AdminBreadcrumb />
      <div className="container-fluid">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="FormCreation">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h4>Create Product</h4>
              <hr /> 
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Product Image:</label>
                    <input 
                        type="file" 
                        name="productImage" 
                        accept="image/*"
                        value={product.productImage}
                        className="form-control" 
                        onChange={(e) => handleUpload(e)}
                        style={newErr.productImage ? {border : "1px solid red" } : null} 
                        error={newErr.productImage}
                        onBlur={handleBlur} 
                      />
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.productImage}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Product Name:</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        name="name" 
                        value={product.name}
                        onChange={(e) => handleChange(e)}
                        style={newErr.name ? {border : "1px solid red" } : null} 
                        error={newErr.name}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.name}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Category:</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        name="category" 
                        value={product.category}
                        onChange={(e) => handleChange(e)}
                        style={newErr.category ? {border : "1px solid red" } : null} 
                        error={newErr.category}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.category}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Brand:</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        name="brand" 
                        value={product.brand}
                        onChange={(e) => handleChange(e)}
                        style={newErr.brand ? {border : "1px solid red" } : null} 
                        error={newErr.brand}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.brand}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Price:</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        name="price" 
                        value={product.price}
                        onChange={(e) => handleChange(e)}
                        style={newErr.price ? {border : "1px solid red" } : null} 
                        error={newErr.price}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.price}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>In Stock:</label>
                      <select 
                        onChange={(e) => handleChange(e)}
                        className="form-control" 
                        type="text" 
                        name="inStock" 
                        value={product.inStock} 
                        style={newErr.inStock ? {border : "1px solid red" } : null} 
                        error={newErr.inStock}
                        onBlur={handleBlur}
                        required={true}
                      >
                        <option value ="">-Select-</option>
                        <option value="true">Yes</option> 
                        <option value="false">No</option>
                      </select> 
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.inStock}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Sold:</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        name="sold" 
                        value={product.sold} 
                        onChange={(e) => handleChange(e)}
                        style={newErr.sold ? {border : "1px solid red" } : null} 
                        error={newErr.sold}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.sold}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Detail:</label>
                      <textarea
                        rows="3" 
                        className="form-control" 
                        type="text" 
                        name="detail" 
                        value={product.detail}
                        onChange={(e) => handleChange(e)}
                        style={newErr.detail ? {border : "1px solid red" } : null} 
                        error={newErr.detail}
                        onBlur={handleBlur}
                        required={true}
                      />
                      <span style={{color: "red", fontSize: "12px"}}>{newErrText.detail}</span>
                    </div>
                  </div> 
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                    <button type="submit" className="btn btn-secondary">SUBMIT</button> 
                    <button type="button"  className="btn btn-secondary" style={{marginLeft:"15px"}}>RESET</button> 
                    </div>
                  </div> 
                </div>

              </div>
            </div>
          </div>
        </form> 
      </div> 
    </div>
  )
}

CreateProduct.propTypes = {
  CreateProductFunc: PropTypes.func.isRequired
}


const mapDispatchToProps = {
  CreateProductFunc
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
