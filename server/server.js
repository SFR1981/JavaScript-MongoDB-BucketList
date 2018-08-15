const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');


 const publicPath = path.join(__dirname, '../client/public');
 app.use(express.static(publicPath));
 app.use(parser.json());

 MongoClient.connect('mongodb://localhost:27017')
   .then((client) => {
     const db = client.db('buckets');
     const wishList = db.collection('wishes');
     const bucketRouter = createRouter(wishList);
    app.use('/api/buckets', bucketRouter);
   })
   .catch(console.err);

 app.listen(3000, function () {
   console.log(`Listening on port ${ this.address().port }`);
 });
