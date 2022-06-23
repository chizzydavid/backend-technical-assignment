import request from 'supertest';
import app from '../app';

describe('Test Station Routes', () => {
  const route = '/api/v1/stations/';
  const timestamp = '2022-06-23T03:30:50.858Z';
  const notFoundTimestamp = '2023-06-23T03:30:50.858Z';


  test('Expects api/v1/stations to return all station snapshots', async () => {
    return request(app)
      .get(`${route}?at=${timestamp}`)
      .then((res) => {
        expect((res.statusCode)).toBe(200);
        expect((res.body.data)).toHaveProperty('stations');
      });
  });


  test(`Expects ${route}:kioskId to return valid snapshot for one station`, async () => {
    return request(app)
      .get(`${route}3265?at=${timestamp}`)
      .then((res) => {
        expect((res.statusCode)).toBe(200);
        expect((res.body.data)).toHaveProperty('station');
      });
  });


  test(`Expects ${route}:kioskId to return error if kioskId is invalid`, async () => {
    return request(app)
      .get(`${route}5a?at=${timestamp}`)
      .then((res) => {
        expect((res.statusCode)).toBe(400);
        expect((res.body.error)).toBe('KioskId must be a valid Integer');
      });
  });


  test(`Expects ${route}:kioskId to return error if kioskId does not exist`, async () => {
    return request(app)
      .get(`${route}5000000?at=${timestamp}`)
      .then((res) => {
        expect((res.statusCode)).toBe(404);
        expect((res.body)).toHaveProperty('error');
      });
  });  


  test(`Expects ${route} to return an error without timestamp`, async () => {
    return request(app)
      .get(`${route}`)
      .then((res) => {
        expect((res.statusCode)).toBe(400);
        expect((res.body)).toHaveProperty('error');
      });
  });


  test(`Expects invalid timestamp to return error`, async () => {
    return request(app)
      .get(`${route}?at=${notFoundTimestamp}`)
      .then((res) => {
        expect((res.statusCode)).toBe(404);
        expect((res.body)).toHaveProperty('error');
      });
  });  

});


