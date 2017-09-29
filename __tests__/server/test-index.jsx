import request from 'supertest';
import app from '../../app';

describe('Test root', () => {
  test('It should responde to GET', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
