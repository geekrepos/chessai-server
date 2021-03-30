const mongoose = require('mongoose');

const uri = "mongodb+srv://chessAi:chessAi@chesscluster.irhd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const db = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    // .then((r)=>console.log(r));
mongoose.connection.on('connected', ()=>{
    console.log("Connected")
});

// console.log("hello", db)
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
