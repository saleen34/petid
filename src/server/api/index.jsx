// import express from 'express';
// import { MongoClient } from 'mongodb';
// import mongoose from 'mongoose';
// import assert from 'assert';
// import config from '../../../config';
// import User from '../models/User';

// let mdb;

// MongoClient.connect(config.mongodbUri, (err, db) => {
//   assert.equal(null, err);
//   mdb = db;
// });

// class MyRouter {
//   constructor () {
//     this.routes = express.Router();

//     this.routes.get('/people/:personId', (req, res) => {
//       mdb.collection('people')
//         .findOne({ id: Number(req.params.personId) })
//         .then(person => res.status(200).send(person))
//         .catch(console.error);
//     });

//     this.routes.get('/animals/:animalId', (req, res) => {
//       mdb.collection('animals')
//         .findOne({ id: Number(req.params.animalId) })
//         .then(animal => res.status(200).send(animal))
//         .catch(console.error);
//     });

//     this.routes.post('/user/create', (req, res) => {
//       const user = new User(req.body);
//       //const user = mongoose.model('User', new UserSchema());
// debugger;
//     });
//   }
// }

// export default MyRouter;
