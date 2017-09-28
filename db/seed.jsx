import mongoose from 'mongoose';
import config from '../config';
import testAnimals from './testAnimals.json';
import testPeople from './testPeople.json';
import Animal from '../src/server/models/Animal';

mongoose.connect(config.mongodbUri, { useMongoClient: true });
mongoose.Promise = global.Promise;

testAnimals.forEach((data) => {
  const animal = new Animal(data);
  const promise = animal.save();
  promise.then((doc) => {
    console.log('Inserted: ', doc.name);
  });
});

// testPeople.forEach((data) => {
//   const animal = new Animal(data);
//   const promise = animal.save();
//   promise.then((doc) => {
//    console.log(doc);
//   });
// });

mongoose.connection.close();
