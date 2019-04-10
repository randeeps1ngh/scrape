var databaseName = 'jobs';
var collectionName = 'startups';
var datafile = require('./urlsf.json');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(databaseName);
  

  for(var i=0; i<20; i++){

    var myobj = {$set :{company:datafile[i].company, companyUrl:datafile[i].companyUrl }};

    var query = {title:datafile[i].title}

  dbo.collection(collectionName).updateOne(query, myobj, function(err, res) {
    if (err) throw err;
    console.log("One document updated: ");
    db.close();
  });
}
});