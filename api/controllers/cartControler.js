const Cart = require("../models/cartModel");
const Users = require("../models/userModel"); 

const cartCtrl = {
  addCart:async (req, res, next) => {
    try {
      const {name, brand, quentity, price} = req.body;
      const user = await Users.findById(req.user.id)
      if(user){
        const addCartProduct = new Cart({
          userId:req.user.id, name, brand, quentity, price
        })

        await addCartProduct.save();
        res.json({msg: "Product Added in Cart!"});
      }else{
        res.status(400).json({msg: "Please Login"});
      }
    } catch (err) {
      return res.status(500).json({msg: err.message})
    } 
  },
  getCart:async (req, res, next) => {
    try {
      const user = await Users.findById(req.user.id)
      if(user){
        const getCart = await Cart.find({userId:req.user.id}) 
        res.json({getCart});
      }else{
        res.status(400).json({msg: "Please Login"});
      }       
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  deleteCart: async(req, res, next) => {
    try {
      const user = await Users.findById(req.user.id)
      if(user){
         await Cart.findByIdAndDelete(req.params.id) 
        res.json({msg: "Cart Item Removed!"});
      }else{
        res.json({msg: "Please Login"});
      }       
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  }
}

module.exports = cartCtrl;