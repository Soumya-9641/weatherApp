const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = 5000;
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views")
const partial_path= path.join(__dirname,"../templates/partials")
// console.log(static_path)
// const exphbs  = require('express-handlebars');
// app.engine('.hbs', exphbs({extname: '.hbs'}));
// app.set('view engine', '.hbs');
app.set('view engine','hbs');
app.set('views',template_path)
hbs.registerPartials(partial_path)
app.use(express.static(static_path))

app.get("",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    console.log("Welcome to  about page")
    res.render('about')
})
app.get("/weather",(req,res)=>{
    console.log("Welcome to weather page")
    res.render("weather")
})
app.get("/home",(req,res)=>{
    console.log("Welcome to home page")
    res.render('index')
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errmsg:"oops!page not found"
    })
    
})


app.listen(port ,()=>{
    console.log(`The app is running on port ${port}`);
})