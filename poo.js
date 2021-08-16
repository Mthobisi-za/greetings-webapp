var obj = { user: "mtho", password: "mthobisi", host: "localhost", port: 3009, database: "postgres" }
var check =  process.env.DATABASE_URL
var connectStr = check || obj;
module.exports = connectStr;
