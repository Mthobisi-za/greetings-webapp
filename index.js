////---database
/*
const {arry, argData} = require("./data");
argData()
var data = await arry;
console.log(data)
*/

///----database
const express = require("express");
const exhbs = require("express-handlebars");
const bodyparser = require("body-parser")
const greet = require("./factory-function");
const greeted = greet()
const app = express();
const {Pool} = require("pg");
var connectStr = require("./poo")
const dblogic = require("./db-factory");
const useDb = dblogic();
/*---------*/
var pool = new Pool(connectStr)

///----
/*
pool 
    .query("SELECT * FROM mydata")
    .then(res => console.log(res.rows))
   .catch(err => console.log(err))
*/
    
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
app.get('/refresh', (req,res)=>{
  setTimeout(()=>{
    res.redirect('/')
  }, 1000)
})

app.get('/' , (req , res)=>{ 
  req.flash('info', greeted.getErrors().message);
  //res.render("index", {data: greeted.getData()});
  useDb.getData(res)
})
app.post('/greet' , (req , res)=>{
  var data = req.body
  greeted.setUserNameAndLang(data);
  data = ""
  res.redirect('/refresh')
})
app.get('/greeted' , (req , res)=>{
 // res.render('greeted', {data: greeted.getGreeted()});
  useDb.getGreeted().setData(res);
});
app.get('/count/:name' , (req , res)=>{
var name = req.params.name;
 greeted.getNamesDb(name, res)
})
//route-------****
//----home route---//
  function makeC(){
     pool
    .query('DELETE FROM connecttb')
    .then()
    .catch(err => console.log(err))
  }
app.get('/home' , (req , res)=>{
 res.redirect("/refresh")
})
app.get('/back' , (req , res)=>{
  res.redirect("/greeted")
 })
app.get('/reset' , (req , res)=>{
  makeC()
  res.redirect('/refresh')
})
//--home route----//
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("server started on port " + PORT)
});