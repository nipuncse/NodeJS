var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usenode"
});

con.connect(function(err) {
 if(err)
 console.log(err)
 else
  console.log("Connected! Congratulations your connection is successfully created");
});

module.exports = con;