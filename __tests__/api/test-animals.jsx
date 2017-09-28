import request from 'supertest';
import app from '../../app';

describe('Test Animals', () => {
  test('/ should bring back animals', (done) => {
    request(app).get('/api/animals').then((response) => {
console.log(response);
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
