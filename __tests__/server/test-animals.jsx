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
  test('GET / should bring back animals', async (done) => {
    const resp = await request(app).get('/api/animals');
    expect(resp.statusCode).toBe(200);
    done();
  });

  test('GET /api/animals/{$id} should bring back one animal', async (done) => {
    const dog = { name: 'Fender' };
    const animal = new Animal(dog);
    const saveResp = await animal.save();
    const animalResp = await request(app).get('/api/animals/'.concat(saveResp._id));

    expect(animalResp.statusCode).toBe(200);
    expect(animalResp.body.name).toBe('Fender');

    await request(app).delete('/api/animals/'.concat(saveResp._id));
    done();
  });

  test('DELETE /api/animals/ should delete a animal', async (done) => {
    const testdata = { name: 'Obrian', gender: 'Male' };
    const animal = new Animal(testdata);
    const saveResp = await animal.save();

    await request(app).delete('/api/animals/'.concat(saveResp._id));
    const animalResp = await request(app).get('/api/animals/'.concat(saveResp._id));

    expect(animalResp.statusCode).toBe(404);
    done();
  });

  test('PUT /api/animals/:id should replace a animal and update fields to null that are missing', async (done) => {
    const testdata = { name: 'Beverly', gender: 'Female', breed: 'Poodle' };
    const animal = new Animal(testdata);
    const beveryly = await animal.save();

    beveryly.breed = 'Pointer';
    beveryly.gender = null;

    const beverylyResult = await request(app)
      .put('/api/animals/'.concat(beveryly._id))
      .send(beveryly);

    const newLore = beverylyResult.body;
    expect(newLore.breed).toBe('Pointer');
    expect(newLore.gender).toBe(null);
    done();
  });

  test('POST /api/animals/ should create a animal', async (done) => {
    const testdata = { name: 'Spot', gender: 'Female', breed: 'Tabby', notes: 'Loves pets' };
    const saveResp = await request(app)
      .post('/api/animals')
      .set('Content-Type', 'application/json')
      .send(testdata);

    expect(saveResp.statusCode).toBe(200);
    expect(saveResp.body.name).toBe('Spot');

    await request(app).delete('/api/animals/'.concat(saveResp.body._id));
    done();
  });
});
