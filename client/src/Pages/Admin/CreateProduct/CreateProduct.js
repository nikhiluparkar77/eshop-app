import React, {useState} from 'react'; 
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import AdminBreadcrumb from "../../../Components/Admin/Breadcrumb";
import { CreateProductFunc } from '../../../store/actions/admin/AdminProductAction';

// google search product upload in react

const CreateProduct = ({CreateProductFunc}) => { 
  const [productImage,setProductImage] = useState("");
  const [name,setName] = useState("");
  const [category,setCategory] = useState("");
  const [brand,setBrand] = useState("");
  const [price,setPrice] = useState("");
  const [inStock,setinStock] = useState("");
  const [detail,setDetail] = useState("");
  const [sold,setSold] = useState("");
  
 
  // const [product, setProduct] = useState({ 
  //   productImage:null,
  //   name:"",
  //   category:"",
  //   brand:"",
  //   price:"",
  //   inStock:"",
  //   detail:"",
  //   sold:"",  
  // })

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
    if(productImage === "") {
      ProductImgText = "* Required Feild";
      ProductImgErr = true;
    }


    if(name === "") {
      NameText = "* Required Feild";
      NameErr = true;
    }

    if(category === "") {
      CategoryText = "* Required Feild";
      CategoryErr = true;
    }

    if(brand === "") {
      BrandText = "* Required Feild";
      BrandErr = true;
    }

    if(price === "") {
      PriceText = "* Required Feild";
      PriceErr = true;
    }

    if(inStock === "") {
      InStockText = "* Required Feild";
      InStockErr = true;
    }

    if(detail === "") {
      DetailText = "* Required Feild";
      DetailErr = true;
    }

    if(sold === "") {
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

 
   
 
  const handleSubmit = (e) => {
    e.preventDefault();

    let validationRequir = formValidation();
    if(validationRequir){
     
      const formData = new FormData();
      formData.append("productImage", productImage);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("inStock", inStock);
      formData.append("sold", sold);
      formData.append("detail", detail); 

      CreateProductFunc(formData);
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
                        className="form-control" 
                        onChange={(e) => setProductImage(e.target.files[0])}
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setCategory(e.target.value)}
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
                        onChange={(e) => setBrand(e.target.value)}
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
                        onChange={(e) => setPrice(e.target.value)}
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
                        onChange={(e) => setinStock(e.target.value)}
                        className="form-control" 
                        type="text" 
                        name="inStock"  
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
                        onChange={(e) => setSold(e.target.value)}
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
                        onChange={(e) => setDetail(e.target.value)}
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
