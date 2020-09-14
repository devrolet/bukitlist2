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
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName);

  // Insert One User
  db.collection('users').insertOne({
    _id: id,
    name: 'Bryon',
    age: 23
  }, (error, result) => {
    if(error) {
      return console.log('Unable to insert user');
    }

    console.log(result.ops);
  });

  // Insert Many Users
  // db.collection('users').insertMany([
  //   {
  //     name: 'Cassandra',
  //     age: 26
  //   }, {
  //     name: 'Angelia',
  //     age: 16
  //   }, {
  //     name: 'Dion',
  //     age: 7
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert documents');
  //   }

  //   console.log(result.ops);
  // });

  // Insert Many Tasks
  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Register LLC with Secretary of State Office',
  //     completed: true
  //   }, 
  //   {
  //     description: 'Open a business banking account',
  //     completed: true
  //   },
  //   {
  //     description: 'Register DBA statement with county clerk office',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('Unable to add tasks');
  //   }

  //   console.log('New Tasks added successfully...');
  //   console.log(result.ops);
  // });
});