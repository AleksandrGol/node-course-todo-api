const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// findOneAndRemove
// findByIdAndRemove

Todo.findByIdAndRemove('5a561d6a3b87a22be8f200d3').then((todo) => {
    console.log(todo);
});
