const express =require ('express')
const app=express()
const dotenv =require("dotenv")
const mongoose = require("mongoose")

const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const categoryRoute=require("./routes//categories")
const multer =require ("multer")
const connectDatabase =require("./db")
const path = require('path')

// const conntectDatabase = require('./db')

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./back/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


// config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"back/.env"
 })}

//db connection--------------
 connectDatabase();
const PORT=process.env.PORT || 5000;

app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/posts" , postRoute);
app.use("/api/categories" , categoryRoute);



app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
})


app.listen(PORT,()=>{
    console.log("connection server.");
} );