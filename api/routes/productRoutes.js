const router =  require("express").Router();
const productCtrl = require("../controllers/productController");
 

router.route("/products")
      .post(productCtrl.createProduct)
      .get(productCtrl.getProduct)

router.route("/products/:id")
    .delete(productCtrl.deleteProduct)
    .put(productCtrl.updateProduct)



module.exports = router;