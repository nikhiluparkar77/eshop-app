const router =  require("express").Router();
const passport = require("passport"); 
const multer = require("multer");
const productCtrl = require("../controllers/productController");


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null,  file.originalname);
    }
});

const fileFilter = (req, file, cb) => { 
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb (null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }, fileFilter: fileFilter
})


router.route("/products")
      .post(passport.authenticate("Admin", {session: false}), upload.single('productImage'),  productCtrl.createProduct)
      .get(productCtrl.getProduct)

router.route("/products/:id")
    .delete(passport.authenticate("Admin", {session: false}), productCtrl.deleteProduct)
    .put(passport.authenticate("Admin", {session: false}), productCtrl.updateProduct)



module.exports = router;