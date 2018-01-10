// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const myDB = db.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to MongoDB server.');        
    }
    console.log('Connected to MongoDB server');

    // myDB.collection('Todos').find({
    //     _id = new ObjectID('5a55ed6d9f993422d675201d')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    // console.log('Unable to fetchh', err);
    // });

    myDB.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
    console.log('Unable to fetchh', err);
    });


    // db.close();
});