var databaseName = 'jobs';
var collectionName = 'startups';

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(databaseName);

  //titles beginning with letter S
  //var query = { title: /^S/ };

  var query = {};

  dbo.collection(collectionName).find(query).limit(20).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});