# Backend Technical Assignment @Digikraft.io
This is a technical assignment created to verify your Node.js skills for the purpose of recruitment at Digikraft.io

[Indego](https://www.rideindego.com) is Philadelphia's bike-sharing program, with many bike stations in the city.

The [Indego GeoJSON station status API](https://www.rideindego.com/stations/json/) provides a realtime snapshot of the number of bikes available, number of open docks available (not currently containing a bike), and total number of docks at every station. This API is free and requires no API key.

The [Open Weather Map API](https://openweathermap.org/current#name) provides a realtime snapshot of the current weather in a given city. Since Philadelphia is a small geographical area it is sufficient to obtain the weather for a geographical location central to Philadelphia. This API has a free plan, you will need to sign up for an API key.

Using mySQL, Node.js, Express, [Bluebird](https://npmjs.org/package/bluebird), Lodash and the Linux, Node.js and mySQL hosting of your choice (see below for hosting details including free options), create a new API server which accumulates data over time and provides access to historical data for both weather and Indego bike availability, supporting the following queries at minimum. Note that it is sufficient to store data at hourly intervals.

*Please note: historical CSV data downloads are available from Indego, however you should not rely on them.* Instead you should build your own node application that downloads fresh data at least once per hour, stores it and implements the API described below.

## Snapshot of all stations at a specified time

Data for all stations as of 11am Universal Coordinated Time on November 1st, 2017: 

`/api/v1/stations?at=2017-11-01T11:00:00`

This API should respond as follows, with the actual time of the first snapshot of data on or after the requested time and the data:

```javascript
{
  at: '2017-11-01:T11:00:01',
  stations: { /* As per the Indego API */ },
  weather: { /* as per the Open Weather Map API response for Philadelphia */ }
}
```

If no suitable data is available a 404 status code should be given.

## Snapshot of one station at a specific time

Data for a specific station (by its `kioskId`) at a specific time:

`/api/v1/stations/KIOSKIDGOESHERE?at=2017-11-01T11:00:00`

The response should be the first available on or after the given time, and should look like:

```javascript
{
  at: '2017-11-01:T11:00:01',
  station: { /* Data just for this one station as per the Indego API */ },
  weather: { /* as per the Open Weather Map API response for Philadelphia */ }
}
```

Include an `at` property in the same format indicating the actual time of the snapshot.

If no suitable data is available a 404 status code should be given.

## Unit tests

All of the APIs should have unit test coverage; invoking `npm test` should test your package. We suggest [mocha](https://npmjs.org/package/mocha) but other frameworks are fine.

## Hosting details

You'll need to make your API available on a server that we can communicate with from the office, not just on your laptop. Although this is not a system administration job, we're interested in seeing that you are comfortable with the fundamentals of installing services on Linux and/or working with cloud providers like Heroku.

You might wish to use Linode or Digital Ocean and install both Node and mySQL on a VPS yourself. Alternatively you might use a combination of Heroku and MLab, both of which have free tiers available.
 
## Criteria

Your work will be evaluated primarily on:

* Consistency of coding style
* Idiomatic use of `express`, `mySQL`, `bluebird` and `lodash`
* Correct use of promises, including proper error handling. async/await may be used
* Absence of "callback hell"
* Efficient mySQL queries
* Correct and complete unit test coverage
* General quality of code and technical communication.

## How to submit your work

Fork this project on github. When you're finished, send the URL of your public repository and the URL of your running instance of the API to <mikolaj.debicki@digikraft.io>. *Consider using `.gitignore` to avoid putting any deployment credentials or API key in your public repository.*

## Extra credit

* A simple front end React or Vue application, and/or Express-powered webpage, offering a visualization of all or part of the data utilizing the API you have built as a back end.
* Anything else you think is cool, relevant, and consistent with the other requirements.
