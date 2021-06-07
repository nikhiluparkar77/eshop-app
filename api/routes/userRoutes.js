const router = require("express").Router();
const userCtrl = require("../controllers/userController");


router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/getuser", userCtrl.getUser);

router.delete("/deleteuser/:id", userCtrl.deleteUser);


module.exports = router;
