const router = require("express").Router();
const passport = require("passport");
const cartCtrl = require("../controllers/cartControler");

router.post("/addcart",passport.authenticate("Users", {session: false}), cartCtrl.addCart);

router.get("/getcart", passport.authenticate("Users", {session: false}), cartCtrl.getCart);

router.delete("/deletecart/:id", passport.authenticate("Users", {session: false}), cartCtrl.deleteCart);

module.exports =  router;