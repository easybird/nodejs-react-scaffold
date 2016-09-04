import supertest from 'supertest';
import app from '../../server/app';
import { expect } from 'chai';
import { containsAllSubstrings } from '../infrastructure/apiTestHelpers';

describe('When the database is down', () => {
  const request = supertest(app);

  beforeEach((done) => {
    done();
  });

  it('should return a correctly rendered error page', (done) => {
    request.get(`/scaffold`)
      .expect(404)
      .expect((res) => {
        expect(res.text).not.to.be.an('undefined');
        containsAllSubstrings(res.text, ['html', '<h2>404</h2>', 'Error: Not Found']);
      })
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
