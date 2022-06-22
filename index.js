import { config } from 'dotenv';
config();

import express from "express";
import { createServer } from 'http';
import { errorHandler, invalidPathHandler } from './middlewares/index.js'
import bodyParser from 'body-parser';
import routes from './routes/index.js'
import connectToDatabase from './utils/db/index.js';
import { getWeatherSnapshot } from './services/cron.service.js';

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
});

server.on('close', () => {
  console.log('Application server closed');
});
