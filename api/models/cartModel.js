const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true},
  name:{type: String, required: true},
  brand:{type: String, required: true},
  quentity:{type: Number, default: 1},
  price:{type: Number, required: true}
},{
  timestamps:true
})

module.exports = mongoose.model("Cart", cartSchema);