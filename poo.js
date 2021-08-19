const { Pool } = require("pg");
var connectStr 
var obj = { user: "mtho", password: "mthobisi", host: "localhost", port: 3009, database: "postgres" }
////postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName"
var db = process.env.DATABASR_URL ||  obj;
if(process.env.DATABASR_URL){
    connectStr = {db}
} else{
    connectStr = db
}


module.exports = connectStr;

