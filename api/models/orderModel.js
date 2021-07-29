const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
 product:[
   {productId:{type: mongoose.Schema.Types.ObjectId, ref: "Products"}}
 ],
 user:{
  city: { type: String, required: true },
  street: { type: String, required: true }, 
  order: { type: Date, default: Date.now, required: true }, 
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" }
 },
total: { type: Number, default: 0 }
},{
  timestamps: true
})

module.exports = mongoose.model("Order", orderModel);