import mongoose from 'mongoose';
import config from '../config';

import Animal from '../src/server/models/Animal';
import User from '../src/server/models/User';

import testAnimals from './testAnimals.json';
import testPeople from './testPeople.json';

/* eslint-disable no-console */

class PetSeed {
  constructor () {
    mongoose.connect(config.mongoTestUri, { useMongoClient: true });
    mongoose.Promise = global.Promise;
  }

  static async seedAnimals () {
    testAnimals.map(async(testData) => {
      const animal = new Animal(testData);
      await animal.save();
      console.log('Inserted: ', animal.name);
    });
  }

  static async seedUsers () {
    testPeople.map(async(testData) => {
      const user = new User(testData);
      await user.save();
      console.log('Inserted: ', user.name);
    });
  }
}

export default PetSeed;
