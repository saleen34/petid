import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app';
import Animal from '../../src/server/models/Animal';

/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

describe('Test Animals', () => {
  test('/ should bring back animals', (done) => {
    request(app).get('/api/animals').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('/api/animals/{$id} should bring back one animal', (done) => {
    let id = null;

    const dog = { name: 'Fender' };
    const animal = new Animal(dog);
    animal.save()
      .then((doc, err) => {
        if (err) {
          console.log('error: ', err);
        } else {
          id = doc._id;
        }
      })
      .catch((err) => { console.log(err.message); })
      .then(() => {
        request(app).get('/api/animals/'.concat(id)).then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.name).toBe('Fender');

          request(app).delete('/api/animals/'.concat(id)).then((deleteResponse) => {
            expect(response.statusCode).toBe(200);
            expect(response.body.name).toBe('Fender');
            done();
            mongoose.connection.close();
          });
        });
      });
  });
});
