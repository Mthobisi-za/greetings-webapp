const express = require("express");
const exhbs = require("express-handlebars");
const bodyparser = require("body-parser")
const greet = require("./factory-function");
const greeted = greet()
const app = express();
//flash
const flash = require('express-flash');
const session = require("express-session")
//config
 // initialise session middleware - flash-express depends on it
 app.use(session({
    secret : "<add a secret string here>",
    resave: false,
    saveUninitialized: true
  }));
  // initialise the flash middleware
  app.use(flash());
//
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())
app.use(express.static('public'));
app.engine("handlebars", exhbs({defaultLayout: "main", layoutsDir: "views/layout"}));
app.set("view engine", "handlebars")
//setup configuration
//route-------****
app.get('/' , (req , res)=>{
  res.render("index", {data: greeted.getData()});
})
app.post('/greet' , (req , res)=>{
  greeted.setUserNameAndLang(req.body);
  res.redirect('/')
})
app.get('/greeted' , (req , res)=>{
  res.render('greeted', {data: greeted.getGreeted()});
  
});
app.get('/count/:name' , (req , res)=>{
var name = req.params.name;
  res.render("specific", {data: greeted.getNames(name)});
})
//route-------****

const PORT = process.env.PORT || 3009;

app.listen(PORT, ()=>{
    console.log("server started on port " + PORT)
});