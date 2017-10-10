import mongoose from 'mongoose';
import config from '../config';

import User from '../src/models/UserModel';
import testPeople from './testPeople.json';

/* eslint-disable no-console */

mongoose.connect(config.mongodbUrl, { useMongoClient: true });
mongoose.Promise = global.Promise;

testPeople.map(async(testData) => {
  const user = new User(testData);
  await user.save();
  console.log('Inserted: ', user.name);
  mongoose.connection.close();
});
