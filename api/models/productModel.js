const mongoose =  require("mongoose");

const productSchema = new mongoose.Schema({  
  productImage:{
    type: String,
    required: true
  },
  name:{
    type:String,
    required: true,
    trim: true
  },
  category:{
    type:String,  
    required:true
  },
  brand:{
    type:String,
    required: true,
  },
  price:{
    type: String,
    required: true
  },
  inStock:{
    type: String,
    required: true
  },
  detail:{
    type: String,
    required: true
  },   
  sold:{
    type:Number,  
    default:0
  },
  review:{
    type:Array,
    default: []
  },
},{
  timestamps:true
})

module.exports = mongoose.model("Products", productSchema);