import request from 'supertest';
import assert from 'assert';
import app from '../src/app';

describe('Test server index', () => {
  it('should responde to GET', (done) => {
    request(app).get('/').then((response) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });
});
