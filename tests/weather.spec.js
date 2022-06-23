import request from 'supertest';
import app from '../app';


describe('Test Weather Endpoints', () => {
  const route = '/api/v1/weather/';
  const timestamp = '2022-06-23T03:30:50.858Z';
  const notFoundTimestamp = '2023-06-23T03:30:50.858Z';

  test(`Expects ${route} to return valid weather snapshot`, async () => {
    return request(app)
      .get(`${route}?at=${timestamp}`)
      .then((res) => {
        expect((res.statusCode)).toBe(200);
        expect((res.body.data)).toHaveProperty('weather');
      });
  });


  test('Expects invalid timestamp to return error', async () => {
    return request(app)
      .get(`${route}?at=${notFoundTimestamp}`)
      .then((res) => {
        expect((res.statusCode)).toBe(404);
        expect((res.body)).toHaveProperty('error');
      });
  });

});


