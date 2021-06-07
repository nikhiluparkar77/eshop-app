const mongoose =  require("mongoose");

const productSchema = new mongoose.Schema({  
  pimg:{
    type: String,
    required: true
  },
  name:{
    type:String,
    required: true,
    trim: true
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
  availability:{
    type: Boolean,
    required: true
  },
  review:{
    type:Array,
    default: []
  }
})

module.exports = mongoose.model("Products", productSchema);