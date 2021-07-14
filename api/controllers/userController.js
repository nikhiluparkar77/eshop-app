const gravatar = require("gravatar");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken"); 
const keys = require("../config/keys");

// User Model
const Users = require("../models/userModel");

const userCtrl = {
  register:async (req, res, next) => {
    try{ 
      const {name, email, password} = req.body;
      const user = await Users.findOne({email});

      if(user) {
        return res.status(400).json({msg: "User Email Already Avilable."})
      }else{
        
        const avatar = gravatar.url(req.body.email, {
          s: "200", //size
          r: "pg", //reting
          d: "mm" //default
        })

        const pwdHash = await bcrypt.hash(password,10);
        const newUser = new Users({
          name,
          email,
          avatar,
          password: pwdHash
        })

        await newUser.save();

         const accessToken = createAccessToken({id:newUser._id});
         res.json({accessToken});
      }
    }catch(err){
      return res.status(500).json({msg: err.msg})
    }
  },
  login:async (req,res,next) => {
    try {
      const {name, email, password} = req.body;

      const user = await Users.findOne({email});
      if(!user){
        return res.status(400).json({msg: "User not find!"});
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) {
        res.status(400).json({msg : "Passwort not match!"});
      }

      const accessToken = createAccessToken({id:user.id});
      res.json({token : "Bearer " + accessToken});
      
    } catch (err) {
      return res.status(500).json({msg: err.msg})
    }
      
     
  },
  addCart:async (req, res, next) => {
    try {
      const user = await Users.findById(req.user.id);

      if(!user) return res.status(400).json({msg: "User does not exist."});
      
      Users.findOneAndUpdate({_id: req.user.id}, {
        cart: req.body.cart
      })

      return res.json({msg: "Added To Cart!"})
      
    } catch (err) {
      return res.status(500).json({msg: err.msg})
    }
  },
  getUser:async(req,res,next) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      res.json({user})
       
    } catch (error) {
      return res.status(500).json({msg: err.msg})
    }
    
  },
   deleteUser: async (req, res, next) => {
     try {
        await Users.findByIdAndDelete(req.params.id);
        res.json({msg:"User Deleted"});
     } catch (error) {
      return res.status(500).json({msg: err.msg})
     }
   }
}

const createAccessToken = (user) => {  
  return jwt.sign(user, keys.secretOrKey,{expiresIn : "1h"})
}

module.exports = userCtrl;