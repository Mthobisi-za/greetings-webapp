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
const bodyparser = require("body-parser");
const greet = require("./factory-function");
const greeted = greet();
const app = express();
const { Pool } = require("pg");

const dblogic = require("./db-factory");
////dev mode
var obj = {
  user: "mtho",
  password: "mthobisi",
  host: "localhost",
  port: 5432,
  database: "postgres",
};
/*---------*/
var db = process.env.DATABASE_URL;
var pool = new Pool({ db, ssl: { rejectUnauthorized: false } });
const useDb = dblogic(pool);
const flash = require("express-flash");
const session = require("express-session");
//config
// initialise session middleware - flash-express depends on it
app.use(
  session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true,
  })
);
// initialise the flash middleware
app.use(flash());
//
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.engine(
  "handlebars",
  exhbs({ defaultLayout: "main", layoutsDir: "views/layout" })
);
app.set("view engine", "handlebars");
//setup configuration
//route-------****

app.get("/", (req, res) => {
  req.flash("info", greeted.getErrors().message);
  //res.render("index", {data: greeted.getData()});
  async function getData() {
    var promise = new Promise((resolve, reject) => {
      resolve(pool.query("selct * from connecttb"));
    })
      .then((value) => {
        var array = [];
        var obj = {
          count: 0,
        };
        var name = value.rows[value.rows.length - 1];
        try {
          value.rows((element) => {
            if (array.indexOf(element.name) === -1) {
              array.push(element.name);
              obj.count++;
            }
          });
        } catch (error) {}
        obj["name"] = name.name;
        obj["language"] = name.language;
        console.log(value.rows);
        res.render("index", { data: obj });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getData();
});
/*
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
*/
//--home route----//
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
