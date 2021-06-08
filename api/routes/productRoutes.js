const router =  require("express").Router();
const productCtrl = require("../controllers/productController");
const passport = require("passport"); 

router.route("/products")
      .post(passport.authenticate("Admin", {session: false}), productCtrl.createProduct)
      .get(productCtrl.getProduct)

router.route("/products/:id")
    .delete(passport.authenticate("Admin", {session: false}), productCtrl.deleteProduct)
    .put(passport.authenticate("Admin", {session: false}), productCtrl.updateProduct)



module.exports = router;