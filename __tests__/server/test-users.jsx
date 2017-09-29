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
  test('/ should bring back users', async () => {
    const resp = await request(app).get('/api/users');
    expect(resp.statusCode).toBe(200);
  });

  test('/api/users/{$id} should bring back one user', async () => {
    const testdata = { username: 'wcrusher', email: 'wcrusher@nextgen.space', name: 'Wesley Crusher' };
    const user = new User(testdata);
    const saveResp = await user.save();
    const userResp = await request(app).get('/api/users/'.concat(saveResp._id));

    expect(userResp.statusCode).toBe(200);
    expect(userResp.body.name).toBe('Wesley Crusher');

    await request(app).delete('/api/users/'.concat(saveResp._id));
    mongoose.connection.close();
  });
});
