const { Pool } = require("pg");

var obj = { user: "mtho", password: "mthobisi", host: "localhost", port: 5432, database: "postgres" }
////postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName"

//postgres://disqozuiackaiy:04869c9482b9ac085d31d382837d6130328f3d02e725aa9f16acbe6a9d8ec775@ec2-54-236-137-173.compute-1.amazonaws.com:5432/da3rds8i8jf24v
var db = process.env.DATABASE_URL ||  "postgresql://mtho:mthobisi@localhost:5432/postgres";
var actual = process.env.DATABASE_URL;
var deploy = {
    user:'disqozuiackaiy',
    password:"04869c9482b9ac085d31d382837d6130328f3d02e725aa9f16acbe6a9d8ec775",
    host: "ec2-54-236-137-173.compute-1.amazonaws.com",
    database: "da3rds8i8jf24v",
    port: "5432"
} 
var connectStr = db;
/*
if(process.env.DATABASE_URL){
    connectStr = {db}
} else{
    connectStr = db
}
*/

module.exports = obj;

