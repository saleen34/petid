import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../../../config';

let mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});

class MyRouter {
  constructor () {
    this.routes = express.Router();

    this.routes.get('/people/:personId', (req, res) => {
      mdb.collection('people')
        .findOne({ id: Number(req.params.personId) })
        .then(person => res.status(200).send(person))
        .catch(console.error);
    });

    this.routes.get('/animals/:animalId', (req, res) => {
      mdb.collection('animals')
        .findOne({ id: Number(req.params.animalId) })
        .then(animal => res.status(200).send(animal))
        .catch(console.error);
    });

    this.routes.post('/user/create', (req, res) => {
      console.log(req.body);
    });
  }
}

export default MyRouter;
