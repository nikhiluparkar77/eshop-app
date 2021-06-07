const gravatar = require("gravatar");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken"); 
const keys = require("../config/keys");

// Admin Model
const Admin = require("../models/adminModel");

const adminCtrl = {
    register: async(req,res,next) => {
        try {
          const {email, name, password} =  req.body;
          const admin = await Admin.findOne({email});

          if(admin){
            return res.status(400).json({msg:"Admin Email Already Avilable"});
          }else{

            const avatar = gravatar.url(req.body.email, {
              s: "200", //size
              r: "pg", //reting
              d: "mm" //default
            })

            const pwdHash = await bcrypt.hash(password,10);
            const newAdmin = new Admin({
              name,
              email,
              avatar,
              password: pwdHash
            })

            await newAdmin.save();

            const accessToken = createAccessToken({id:newAdmin._id});
            res.json({accessToken});

          } 
           
        } catch (err) {
          return res.status(500).json({msg: err.msg})
        }
    },  
  login:async (req,res,next) => {
    try {
      const {avatar, email, password} = req.body;

      const admin = await Admin.findOne({email});
      if(!admin){
        return res.status(400).json({msg: "Admin not find!"});
      }

      const isMatch = await bcrypt.compare(password, admin.password);
      if(!isMatch) {
        res.status(400).json({msg : "Passwort not match!"});
      }

      const accessToken = createAccessToken({id:admin.id});
      res.json({token : "Bearer " + accessToken});
      
    } catch (err) {
      return res.status(500).json({msg: err.msg})
    }
      
     
  },
  getAdmin:async(req,res,next) => {
    try {
      const admin = await Admin.findOne({email:req.body.email}).select("-password");
      res.json({admin})
       
    } catch (error) {
      return res.status(500).json({msg: err.msg})
    }
    
  }
}

const createAccessToken = (admin) => {  
  return jwt.sign(admin, keys.secretOrKey,{expiresIn : "1h"})
}

module.exports = adminCtrl;