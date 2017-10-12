import mongoose from 'mongoose';
import config from '../config';

import Animal from '../src/server/models/Animal';
import User from '../src/server/models/User';

import testAnimals from './testAnimals.json';
import testPeople from './testPeople.json';

/* eslint-disable no-console */

mongoose.connect(config.mongodbUri, { useMongoClient: true });
mongoose.Promise = global.Promise;

testAnimals.map(async (testData) => {
  const animal = new Animal(testData);
  await animal.save();
  console.log('Inserted: ', animal.name);
  mongoose.connection.close();
});

testPeople.map(async (testData) => {
  const user = new User(testData);
  await user.save();
  console.log('Inserted: ', user.name);
  mongoose.connection.close();
});
