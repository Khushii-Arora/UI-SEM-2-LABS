var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "khushi",
  password: "$MANkhu9"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE UIdb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});