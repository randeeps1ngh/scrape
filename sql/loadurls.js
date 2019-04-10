var mysql = require('mysql');

var datafile = require('./urlsdata.json')

var databaseName = 'jobs';
var tableName = 'startups';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Brian123***",
    database: databaseName
  });

  con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
    var sql = `INSERT INTO ${tableName} (title, url) VALUES ?`;
    var values = datafile;
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });