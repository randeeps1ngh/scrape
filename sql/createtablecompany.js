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
    //console.log("Connected!");
    var sql = `CREATE TABLE ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), company VARCHAR(255), companyurl VARCHAR(255))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });