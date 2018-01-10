// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const myDB = db.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to MongoDB server.');        
    }
    console.log('Connected to MongoDB server');

    // myDB.collection('Todos').deleteMany({name: "Eat meat"}).then((result) => {
    //     console.log(result);
    // });

    // myDB.collection('Todos').deleteOne({name: "Eat meat"}).then((result) => {
    //     console.log(result);
    // });

    myDB.collection('Users').findOneAndDelete({_id: new ObjectID('5a55f0322b2b07231ea8e2d1')}).then((result) => {
        console.log(result);
    });

    // myDB.collection('Users').deleteMany({name: 'AlGol'}).then((result) => {
    //     console.log(result);
    // });

    // db.close();
});