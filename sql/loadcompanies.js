var mysql = require('mysql');

var datafile = require('./companydata.json')

var databaseName = 'jobs';
var tableName = 'companies';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XXXXX",
    database: databaseName
  });

  con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
    var sql = `INSERT INTO ${tableName} (title, company, companyurl) VALUES ?`;
    var values = datafile;
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });