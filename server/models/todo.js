var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

// var todo = new Todo({
//     text: req.body.text
// });

// todo.save().then((doc) => {
//     res.send(doc);
// }, (error) => {
//     res.send(error);
// });