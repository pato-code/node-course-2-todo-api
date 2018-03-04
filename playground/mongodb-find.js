//const MongoClient= require('mongodb').MongoClient;
const {MongoClient , ObjectID}= require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
  if (err){
    return console.log('unable to connect to MongoDB server');
  }

  console.log('connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a9bee4c1b65871d28ba939a")
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined , 2));
  // } , (err)=>{
  //     console.log('unable to fetch Todos');
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos Count:${count}`);
  } , (err)=>{
      console.log('unable to fetch Todos');
  });

  // db.close();
});
