//const MongoClient= require('mongodb').MongoClient;
const {MongoClient , ObjectID}= require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
  if (err){
    return console.log('unable to connect to MongoDB server');
  }

  console.log('connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, resualt) =>{
  //   if (err){
  //     return console.log('unable to insert todo' ,err);
  //   }
  //
  //   console.log(JSON.stringify(resualt.ops , undefined , 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'albraa hesham',
  //   age: 22,
  //   location: "burri"
  // }, (err, resualt) =>{
  //   if (err){
  //     return console.log('unable to insert todo' ,err);
  //   }
  //
  //   console.log(JSON.stringify(resualt.ops , undefined , 2));
  // });

  db.close();
});
