const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const static_path = path.join(__dirname,"../public");
console.log(static_path)
app.use(express.static(static_path))
app.get("",(req,res)=>{
    res.send("Hello World")
})
app.get("/weather",(req,res)=>{
    console.log("Welcome to weather page")
    res.send("Welcome to weather page")
})
app.get("/about",(req,res)=>{
    console.log("Welcome to about page")
    res.send("Welcome to about page")
})
app.get("/home",(req,res)=>{
    console.log("Welcome to home page")
    res.send("Welcome to home page")
})


app.listen(port ,()=>{
    console.log(`The app is running on port ${port}`);
})