import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app';
import User from '../../src/server/models/User';

/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

afterAll(() => {
  mongoose.connection.close();
});

describe('Test Users', () => {
  test('GET / should bring back users', async (done) => {
    const resp = await request(app).get('/api/users');
    expect(resp.statusCode).toBe(200);
    done();
  });

  test('GET /api/users/{$id} should bring back one user', async (done) => {
    const testdata = { username: 'wcrusher', email: 'wcrusher@nextgen.space', name: 'Wesley Crusher' };
    const user = new User(testdata);
    const saveResp = await user.save();
    const userResp = await request(app).get('/api/users/'.concat(saveResp._id));

    expect(userResp.statusCode).toBe(200);
    expect(userResp.body.name).toBe('Wesley Crusher');

    await request(app).delete('/api/users/'.concat(saveResp._id));
    done();
  });

  test('DELETE /api/users/ should delete a user', async (done) => {
    const testdata = { username: 'wcrusher', email: 'wcrusher@nextgen.space', name: 'Wesley Crusher' };
    const user = new User(testdata);
    const saveResp = await user.save();

    await request(app).delete('/api/users/'.concat(saveResp._id));
    const userResp = await request(app).get('/api/users/'.concat(saveResp._id));

    expect(userResp.statusCode).toBe(404);
    done();
  });

  test('PUT /api/users/:id should replace a user and update fields to null that are missing', async (done) => {
    const testdata = { username: 'lore', email: 'lore@nextgen.space', name: 'Lore (Data)', address1: 'Q land', cell: '(123) 456-7899' };
    const user = new User(testdata);
    const lore = await user.save();

    lore.address1 = 'USS Enterprise (NCC-1701-D)';
    lore.cell = null;

    const loreResult = await request(app)
      .put('/api/users/'.concat(lore._id))
      .send(lore);

    const newLore = loreResult.body;
    expect(newLore.address1).toBe('USS Enterprise (NCC-1701-D)');
    expect(newLore.cell).toBe(null);
    done();
  });

  test('POST /api/users/ should create a user', async (done) => {
    const testdata = { username: 'numberOne', email: 'badhairday@nextgen.space', name: 'William Riker' };
    const saveResp = await request(app)
      .post('/api/users')
      .set('Content-Type', 'application/json')
      .send(testdata);

    expect(saveResp.statusCode).toBe(200);
    expect(saveResp.body.name).toBe('William Riker');

    await request(app).delete('/api/users/'.concat(saveResp.body._id));
    done();
  });
});
