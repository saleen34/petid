import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
import testAnimals from './testAnimals.json';
import testPeople from './testPeople.json';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('animals')
    .insertMany(testAnimals)
    .then(response => console.log('Animals:', response.insertedCount));

  db.collection('people')
    .insertMany(testPeople)
    .then(response => console.log('People:', response.insertedCount));

  db.close();
});
