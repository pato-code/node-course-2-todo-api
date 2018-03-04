//const MongoClient= require('mongodb').MongoClient;
const {MongoClient , ObjectID}= require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
  if (err){
    return console.log('unable to connect to MongoDB server');
  }

  console.log('connected to MongoDB server');

  //deletemany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((resualt) =>{
    //   console.log(resualt);
    // });
  //deleteone
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((resualt) =>{
    //   console.log(resualt);
    // });
    // db.collection('Todods').deleteOne({text : "something to do"}).then((resualt) =>{
    //   console.log(resualt);
    // });
    db.collection('Todos').deleteMany({text : "something to do"}).then((resualt) =>{
      console.log(resualt);
    });
  // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((resualt) =>{
    //   console.log(resualt);
    // });

  // db.close();
});
