var databaseName = 'jobs';
var collectionName = 'startups';
var datafile = require('./urls.json');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db(databaseName);
  var myobj = datafile;
  dbo.collection(collectionName).insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});