var mysql = require('mysql');

var databaseName = 'jobs';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XXXXX",
    database: databaseName
  });

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT startups.url, startups.title, companies.company, companies.companyurl FROM startups JOIN companies ON startups.title = companies.title";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }); 