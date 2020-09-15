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

  // Find One Document
  // db.collection('users').findOne({ _id: new ObjectID('5f5feff9863b246d34991eff') }, (error, user) => {
  //   if(error) {
  //     return console.log('Unable to fetch');
  //   }

  //   console.log(user);
  // });

  // Find Multiple 
   // db.collection('users').find({ age: 16 }).toArray((error, users) => {
  //   console.log(users);
  // });

  // db.collection('users').find({ age: 16 }).count((error, count) => {
  //   console.log(count);
  // });

  // Task Challenge
  db.collection('tasks').findOne({_id: new ObjectID('5f5fc40a55ae6267d4bb41c2')}, (error, task) => {
    if(error) {
      return console.log('Unable to fetch task');
    }
    console.log(task);
  });

  db.collection('tasks').find({ completed: true } ).toArray((error, tasks) => {
    console.log(tasks);
  });
});