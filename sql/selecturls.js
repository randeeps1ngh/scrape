var mysql = require('mysql');

var databaseName = 'jobs';
var tableName = 'startups';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XXXXX",
    database: databaseName
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query(`SELECT * FROM ${tableName}`, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });