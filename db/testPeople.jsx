import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('animals').insertMany([
    {
      id: 1,
      name: 'Harry Holmes',
      email: 'test@gmail.com',
      cell: '503-666-7777',
      home: '206-333-4444',
      address1: '1 High Street SE',
      address2: '--',
      city: 'Seattle',
      state: 'WA',
      zip: '98052',
      country: 'US'
    },
    {
      id: 2,
      name: 'Nick Pate',
      email: 'saleen34@gmail.com',
      cell: '503-310-1586',
      home: '503-555-5555',
      address1: '14722 sw Peak Ct',
      address2: '--',
      city: 'Tigard',
      state: 'OR',
      zip: '97224',
      country: 'US'
    }
  ]).then(response => console.info('Animals', response.insertedCount));
});