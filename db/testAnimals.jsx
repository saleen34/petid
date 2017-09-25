import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('animals').insertMany([
    {
      id: 1,
      name: 'Fender',
      gender: 'Male',
      breed: 'German Shorthair Pointer / Pitt',
      color: 'Black',
      birthdate: '01/30/2008',
      weight: '100lbs',
      notes: 'Has one white paw, all vacciantions are up2date',
      image: 'images/fender.jpg'
    },
    {
      id: 2,
      name: 'Bentley',
      gender: 'Male',
      breed: 'Poodle',
      color: 'White/Gray',
      birthdate: '06/15/1993',
      weight: '10lbs',
      notes: 'Loves stuffies',
      image: 'images/fender.jpg'
    }
  ]).then(response => console.info('Animals', response.insertedCount));
});
