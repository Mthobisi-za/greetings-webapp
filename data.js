const str = require("./poo");
const {Pool} = require("pg");
var pool = new Pool(str);

 function getD(){
     const arry = []
     function makeChanges(){
        pool.connect((err, client, release)=>{
                if(err){
                    console.log(err, "you have err")
                }
                client.query("SELECT * FROM connecttb", (err, result)=>{
                    release()
                    if(err){
                        console.log(err, "is in query")
                    }
                    return result.rows
                })
        })
    }
   return{
       arry,
       makeChanges
   }
}
console.log(getD().makeChanges())
//var db = getD().arry;
//console.log(db)
//module.exports = {arry,argData};
console.log("yep")
