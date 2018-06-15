import server from '../../index';
import request from 'supertest';

describe('Project Index', () => {
  beforeEach((done) => {
    server.once('started', done);
    server.start();
  });

  afterEach(() => server.close());

  it('should serve client files', async () => {
    const res = await request(server).get('/index.html');
    expect(res.statusCode).toBe(200);
  });
});
