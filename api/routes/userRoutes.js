const router = require("express").Router();
const userCtrl = require("../controllers/userController");
const passport = require("passport");

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login); 

router.get("/getuser", passport.authenticate("Users", {session: false}), userCtrl.getUser);

router.delete("/deleteuser/:id", passport.authenticate("Users", {session: false}), userCtrl.deleteUser);

router.patch("/history", passport.authenticate("Users", {session: false}), userCtrl.history);

module.exports = router;
