//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TOdoApp',(err,db) => {
  if(err){
    return console.log("unable tp connect to mongodb server");
  }
  console.log("connected to mongodb server");

  /* db.collection('Todos').find().toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));

  },(err)=> {
    console.log('unable to fetch todos',err);
  });
*/
db.collection('Todos').find({
  _id: new ObjectID('5c9a10af2a2a433096675a10')
}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));

},(err)=> {
  console.log('unable to fetch todos',err);
});
  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);


  },(err)=> {
    console.log('unable to fetch todos',err);
  });
  //////////////////////
  db.collection('Users').find({
    name:'reva'
    }).toArray().then((users)=>{
    console.log('users');
    console.log(JSON.stringify(users,undefined,2));


  },(err)=> {
    console.log('unable to fetch todos',err);
  });
//db.close();
});
