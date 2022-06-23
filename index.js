import { config } from 'dotenv';
config();

import express from "express";
import { createServer } from 'http';
import { errorHandler, invalidPathHandler } from './middlewares/index.js'
import bodyParser from 'body-parser';
import routes from './routes/index.js'
import connectToDatabase from './utils/db/index.js';
import { getStationSnapshot } from './services/cron.service.js';
import { getWeatherSnapshot } from './services/cron.service.js';
import cronScheduler from './utils/crons/scheduler.js';
import CRON_CONFIG from './config/cron.config.js';

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)
app.use(errorHandler)
app.use(invalidPathHandler)

const server = createServer(app);

const PORT = process.env.PORT || 5000
server.listen(PORT);
server.on('listening', async () => {
  console.log(`Application is listening on port ${PORT}`);
  await connectToDatabase();
  // getStationSnapshot()
  // getWeatherSnapshot()
  cronScheduler(CRON_CONFIG);

});

server.on('close', () => {
  console.log('Application server closed');
});
