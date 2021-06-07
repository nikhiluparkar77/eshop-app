const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required:true,
    trim:true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password:{
    type: String,
    required:true,
    trim:true
  },
  avatar: {
    type: String,
    required: true,
  }
},{
  timestamps:true
})

module.exports = mongoose.model("Admin", adminSchema);