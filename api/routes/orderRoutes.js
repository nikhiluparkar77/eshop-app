 const router = require("express").Router();
 const passport = require("passport");
 const orderCtrl = require("../controllers/orderController");

 router.post("/createorder", passport.authenticate("Users", {session: false}), orderCtrl.createOrder);

 router.get("/getorder", passport.authenticate("Users", {session: false}), orderCtrl.getOrder);

 router.delete("/deleteorder/:id", passport.authenticate("Users", {session: false}), orderCtrl.deleteOrder);

 module.exports = router;
