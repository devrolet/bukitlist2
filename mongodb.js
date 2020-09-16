// DB CRUD operations

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// Destructuring above
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'bukitlist2';

const id = new ObjectID();
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName);

  // db.collection('users').deleteMany({
  //   age: 23
  // }).then(result => console.log(result))
  //   .catch(error => console.log(error)
  // );

  db.collection('tasks').deleteOne({
    _id: new ObjectID('5f5fc40a55ae6267d4bb41c2')
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
});