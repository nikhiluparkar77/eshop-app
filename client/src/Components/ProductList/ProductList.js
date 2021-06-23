import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { ListProductFunc, UpdateProductFunc } from '../../store/actions/admin/AdminProductAction';

const ProductList = ({ListProductFunc, product, UpdateProductFunc}) => {

  const [productView, setProductView] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editView, setEditView] = useState({ 
    name:"",
    category:"",
    brand:"",
    price:"",
    inStock:"",
    detail:"",
    sold:"", 
  })

  useEffect(() => {
    ListProductFunc();
  }, [])

 

  useEffect(() => {
    setProductView(product);
  },[product])
   
 
  const editProduct = (id, productData) => {
    setEditId(id);  
    const UpdatedData = {
      name:productData.name,
      category:productData.category,
      brand:productData.brand,
      price:productData.price,
      inStock:productData.inStock,
      detail:productData.detail,
      sold:productData.sold, 
    }
    setEditView(UpdatedData);
  } 

  const handleChange = (e) => {
    setEditView({
      ...editView,
      [e.target.name] : e.target.value
    })
  }
 
  

  const updateProduct = (id) => { 
    UpdateProductFunc(id,editView);
    setEditId(null); 
    (() =>{
      setProductView(product);
    })();
     
  }
   
  const calcleEdit = () => { 
    setEditId(null)
  }
 

  const DisplayData = () => {
    if(productView){
      return (productView.map((item, index) => ( 
        editId == item._id ? (
          <tr key={index}>
          <th scope="row">
           {index + 1}
          </th>
          <td>
            <input 
              className="form-control" 
              type="text" 
              name="name" 
              value={editView.name}
              onChange={(e) => handleChange(e)} 
            />
            </td> 
          <td>
            <input 
              className="form-control" 
              type="text" 
              name="category" 
              value={editView.category}
              onChange={(e) => handleChange(e)} 
            />
          </td>
          <td>
            <input 
              className="form-control" 
              type="text" 
              name="brand" 
              value={editView.brand}
              onChange={(e) => handleChange(e)} 
            />  
          </td>
          <td>
            <input 
              className="form-control" 
              type="text" 
              name="price" 
              value={editView.price}
              onChange={(e) => handleChange(e)} 
            />
          </td>
          <td>
            <input 
              className="form-control" 
              type="text" 
              name="inStock" 
              value={editView.inStock}
              onChange={(e) => handleChange(e)} 
            /> 
            </td>
          <td>
            <input 
              className="form-control" 
              type="text" 
              name="sold" 
              value={editView.sold}
              onChange={(e) => handleChange(e)} 
            />
          </td>
          <td>
            <input 
              className="form-control" 
              type="text" 
              name="detail" 
              value={editView.detail}
              onChange={(e) => handleChange(e)} 
            />
          </td>
          <td> 
             <button className="btn btn-secondary" onClick={(e) => updateProduct(item._id)}>Update</button> 
             <button className="btn btn-secondary" onClick={(e) => calcleEdit()}>Cancle</button> 
          </td>
        </tr>
        )
        :
        (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td> 
          <td>{item.category}</td>
          <td>{item.brand}</td>
          <td>{item.price}</td>
          <td>{item.inStock}</td>
          <td>{item.sold}</td>
          <td>{item.detail}</td>
          <td> 
            <button className="btn btn-secondary" onClick={(e) => editProduct(item._id, item)}>Edit</button> 
            <button className="btn btn-secondary">Delete</button>  
          </td>
        </tr>
        )
      )) )
        
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
        <div className="row">
          <div className="col-md-12"> 
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sr.No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Brand</th>
                  <th scope="col">price</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Details</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                
                  {DisplayData()}
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductList.propTypes = {
  ListProductFunc: PropTypes.func.isRequired,
  UpdateProductFunc:PropTypes.func.isRequired, 
}


const mapDispatchToProps = {
  ListProductFunc,
  UpdateProductFunc
}

const mapStateToProps = (state) => ({
  product:state.adminProduct.listProduct.product
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
