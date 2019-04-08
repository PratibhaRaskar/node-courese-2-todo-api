const {ObjectID} = require('mongoose');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

var id ='5c9b1c5f933dc540172b7e79';
/*
if(!ObjectID.isValid(id)){
  console.log('ID not valid')
}

Todo.find({
  _id :id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
  _id :id
}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('id not found')
  }
  console.log('Todo by id',todo);
}).catch((e) =>  console.log(e));
*/
User.findById(id).then((user)=>{
  if(!user){
    return console.log('user not found')
  }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e) =>  console.log(e));
