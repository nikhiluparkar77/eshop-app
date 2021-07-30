const Users = require("../models/userModel"); 
const Order = require("../models/orderModel");


const orderCtrl = {
   createOrder: async (req, res, next) => {
      try {
        const user = await Users.findById(req.user.id); 

        if(user){

          const order = new Order({
            userId: req.user.id,
            address: req.body.address,
            city: req.body.city,
            pincode: req.body.pincode,
            state: req.body.state,
            country: req.body.country,
            payment: req.body.payment
          }) 

          await order.save();
          res.json({msg: "Order Plased Successfully!"});

        }else{
          res.status(400).json({msg: "Please Login"});
        } 

      } catch (err) {
        return res.status(500).json({msg: err.message})
      }
   },
   getOrder: async (req, res, next) => {
     try {

        const order = await Order.find()
                                   
        res.json({
          Status: "Success",
          result: order.length,
          order: order
        })

     } catch (err) {
       return res.status(500).json({msg: err.message})
     }
   },
   deleteOrder: async(req, res, next) => {
     try {

       await Order.findByIdAndDelete(req.params.id)
       
       res.json({msg:"Order Cancle!"});
     
      } catch (err) {
       return res.status(500).json({mag: err.message})
     }
   }
}

module.exports = orderCtrl;