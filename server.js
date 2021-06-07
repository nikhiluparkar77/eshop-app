const express = require("express");
const mongoose =  require("mongoose"); 
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
 

// Router inport
const userRouter = require("./api/routes/userRoutes");
const adminRouter = require("./api/routes/adminRoutes");
 

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(morgan("dev"));
 

const DB = require("./api/config/keys").mongoURL;

mongoose
  .connect(DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() => console.log("Momgoose Connect"))
  .catch((err) =>  console.log(err));

app.use("/user", userRouter);
app.use("/admin", adminRouter);
 

app.get("/", (req,res,next) => {
  res.json({msg: "Api Test Successfull"})
})
 
app.use((req, res, next) =>{
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    err:{
      message : err.message
    }
  })
})



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running port ${port}`));
