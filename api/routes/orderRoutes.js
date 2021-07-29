 const router = require("express").Router();
 const passport = require("passport");
 const orderCtrl = require("../controllers/orderController");

 router.post("/createorder", passport.authenticate("Users", {session: false}), orderCtrl.createHistory);

 module.exports = router;
