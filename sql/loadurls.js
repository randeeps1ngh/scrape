var mysql = require('mysql');

var datafile = require('./urlsdata.json')

var databaseName = 'jobs';
var tableName = 'startups';

// for future we look options to make password encrypted 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XXXXX",
    database: databaseName
  });

  con.connect(function(err) {
      // we need to log the error and then throw it - ideally log it with small message - db connection issue 
      
    if (err) throw err;
    //console.log("Connected!");
    var sql = `INSERT INTO ${tableName} (title, url) VALUES ?`;
    var values = datafile;
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });
