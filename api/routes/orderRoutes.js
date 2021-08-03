 const router = require("express").Router();
 const passport = require("passport");
 const orderCtrl = require("../controllers/orderController");

 router.post("/createorder", passport.authenticate("Users", {session: false}), orderCtrl.createOrder);

 router.get("/getorder", passport.authenticate("Users", {session: false}), orderCtrl.getOrder);

 router.patch("/updateorder", passport.authenticate("Users", {session: false}), orderCtrl.orderUpdate);

 router.delete("/deleteorder/:id", passport.authenticate("Users", {session: false}), orderCtrl.deleteOrder);

 module.exports = router;
