var databaseName = 'jobs';

var MongoClient = require('mongodb').MongoClient;
var url = `mongodb://localhost:27017/${databaseName}`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(`Database ${databaseName} created!`);
  db.close();
});