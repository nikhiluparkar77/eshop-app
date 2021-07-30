const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
 userId:{ 
   type: mongoose.Schema.Types.ObjectId, 
   ref: "Users", 
   required: true 
  }, 
  address:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  }, 
  pincode:{
    type: Number,
    required: true
  }, 
  state:{
    type: String,
    required: true
  }, 
  country:{
    type: String,
    required: true
  },
  payment:{
    type: Number,
    required: true
  },
  orderDetail:{
    type:Array,
    default:[]
  }
},{
  timestamps: true
})

module.exports = mongoose.model("Order", orderModel);