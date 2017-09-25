import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});

const router = express.Router();

router.get('/people/:personId', (req, res) => {
  mdb.collection('people')
    .findOne({ id: Number(req.params.personId) })
    .then(person => res.send(person))
    .catch(console.error);
});

router.get('/animals/:animalId', (req, res) => {
  mdb.collection('animals')
    .findOne({ id: Number(req.params.animalId) })
    .then(animal => res.send(animal))
    .catch(console.error);
});

export default router;
