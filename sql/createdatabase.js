var mysql = require('mysql');

var databaseName = 'jobs';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XXXXX"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(`CREATE DATABASE ${databaseName}`, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});