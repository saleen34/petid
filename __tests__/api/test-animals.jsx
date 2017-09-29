import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app';
import Animal from '../../src/server/models/Animal';

/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

afterAll(() => {
  mongoose.connection.close();
});

describe('Test Animals', () => {
  test('/ should bring back animals', async () => {
    const resp = await request(app).get('/api/animals');
    expect(resp.statusCode).toBe(200);
  });

  test('/api/animals/{$id} should bring back one animal', async () => {
    const dog = { name: 'Fender' };
    const animal = new Animal(dog);
    const saveResp = await animal.save();
    const animalResp = await request(app).get('/api/animals/'.concat(saveResp._id));

    expect(animalResp.statusCode).toBe(200);
    expect(animalResp.body.name).toBe('Fender');

    await request(app).delete('/api/animals/'.concat(saveResp._id));
    mongoose.connection.close();
  });
});
