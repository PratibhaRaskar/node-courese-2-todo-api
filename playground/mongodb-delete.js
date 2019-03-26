const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TOdoApp',(err,db) => {
  if(err){
    return console.log("unable tp connect to mongodb server")
  }
  console.log("connected to mongodb server");

//deleteOne

// db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
//   console.log(result);
// });


//deleteMany
//db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
  //console.log(result);
//});


//findOneAndDelete
db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
  console.log(result);
});

});
