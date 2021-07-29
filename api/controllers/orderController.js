const Users = require("../models/userModel"); 
const Order = require("../models/orderModel");


const historyCtrl = {
   createHistory: async (req, res, next) => {
      try {
        const user = await Users.findById(req.user.id); 

        if(user){
          const order = new Order({
            user:req.body.user,
            products:req.body.products,
            total:req.bosy.total,
          }) 

          await order.save();
          res.json({msg: "Order Created!"});

        }else{
          res.status(400).json({msg: "Please Login"});
        } 

      } catch (err) {
        return res.status(500).json({msg: err.message})
      }
   }
}

module.exports = historyCtrl;