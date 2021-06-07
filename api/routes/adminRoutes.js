const router = require("express").Router();
const adminCtrl = require("../controllers/adminController");


router.post("/register", adminCtrl.register);

router.post("/login", adminCtrl.login);

router.get("/getadmin", adminCtrl.getAdmin);


module.exports = router;
