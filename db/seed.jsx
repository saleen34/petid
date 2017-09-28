import mongoose from 'mongoose';
import config from '../config';

import Animal from '../src/server/models/Animal';

import testAnimals from './testAnimals.json';
import testPeople from './testPeople.json';

/* eslint-disable no-console */

mongoose.connect(config.mongodbUri);
mongoose.Promise = global.Promise;

testAnimals.forEach((data) => {
  const animal = new Animal(data);
  animal.save()
    .then((err, doc) => {
      if (err) {
        console.log('error: ', err);
      } else {
        console.log('Inserted: ', doc.name);
      }
    })
    .catch((err) => { console.log(err.message); })
    .then(() => { mongoose.connection.close(); });
});
