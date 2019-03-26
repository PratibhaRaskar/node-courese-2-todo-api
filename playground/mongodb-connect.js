const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TOdoApp',(err,db) => {
  if(err){
    return console.log("unable tp connect to mongodb server")
  }
  console.log("connected to mongodb server");
/*
  db.collection('Todos').insertOne({
    text:'something to do',
    completed : false
  },(err,result) => {
    if(err){
      return console.log("unable to insert todo",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
*/
db.collection('Users').insertOne({
  name:'pratibha',
  age : 26,
  location:'pune'
},(err,result) => {
  if(err){
    return console.log("unable to insert users",err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});
});
