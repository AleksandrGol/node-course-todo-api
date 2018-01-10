// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const myDB = db.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to MongoDB server.');        
    }
    console.log('Connected to MongoDB server');

    myDB.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a55eeda0e783b22fde8a10f')
    }, {
        $set: {
            name: "Al Gol",
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});