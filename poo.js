const { Pool } = require("pg");

var obj = { user: "mtho", password: "mthobisi", host: "localhost", port: 3009, database: "postgres" }
////postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName"
var actual = process.env.DATABASE_URL;
var password = process.env.Pass
//var obj = "postgres://mtho:mthobisi@localhost:3009/postgres"
var op = {database : process.env.DATABASE_URL, password: process.env.Pass}
var check =  {actual, password} || obj
var connectStr = check ;


module.exports = connectStr;

