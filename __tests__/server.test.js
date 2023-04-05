'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the express server', () => {

  test('404 on a bad route', async () => {
    const response = await request.get('/fdgdfg');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });

  test('404 on a bad method', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });

  test('500 if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    // expect(response.body).toEqual({});
  });
  test('200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=d');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual({});
  });

  test('given an name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=a');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({"name": "a"});
  });

});