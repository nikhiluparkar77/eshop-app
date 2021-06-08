const router = require("express").Router();
const passport = require("passport");
const userCtrl = require("../controllers/userController");


router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/getuser", passport.authenticate("Users", {session : false}), userCtrl.getUser);

router.delete("/deleteuser/:id", passport.authenticate("Users", {session : false}), userCtrl.deleteUser);


module.exports = router;
