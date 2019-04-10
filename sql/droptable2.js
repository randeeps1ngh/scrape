var mysql = require('mysql');

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
    var sql = `DROP TABLE ${tableName}`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });