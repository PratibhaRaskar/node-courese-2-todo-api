//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TOdoApp',(err,db) => {
  if(err){
    return console.log("unable tp connect to mongodb server")
  }
  console.log("connected to mongodb server");
/*
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5c99c90d6c90b8ce68f8f1ce')
},{
  $set :{
    completed: true
  }
},
{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
*/
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c9a5f532a2a433096675e58')
},{
  $set :{
    name: 'Nikhil raskar'
  },
  $inc :
   {
     age :2
   }
},
  {
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
});
