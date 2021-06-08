const Products = require("../models/productModel");

const productCtrl = {
  createProduct : async(req, res, next) => {
    try {
      const {img, name, category, brand, price, inStock, detail ,sold} = req.body;
      const product = await Products.find();
      
        const newProduct = new Products({
            img, name, category, brand, price, inStock, detail, sold
        })

        await newProduct.save();
        res.json({msg: "Producte Created"});
       
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  getProduct: async(req, res, next) => {
    try {
      const product = await Products.find()
                                    .select("img name category brand price inStock detail sold _id");
      res.json({
        Status: "Success",
        result: product.length,
        product: product
      })

    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  
  updateProduct: async (req, res, next) =>{
    const {img, name, category, brand, price, inStock, detail ,sold} = req.body;
    await Products.findByIdAndUpdate({_id: req.params.id}, {
      img, name, category, brand, price, inStock, detail ,sold
    });
    res.json({msg:"Product Updated!"})
  },
  deleteProduct: async (req, res, next) => {
    try {
       await Products.findByIdAndDelete(req.params.id);
       res.json({msg:"Producte Deleted"});
    } catch (error) {
     return res.status(500).json({msg: err.msg})
    }
  }
 
 
}

module.exports = productCtrl;