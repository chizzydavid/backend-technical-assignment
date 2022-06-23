import { config } from 'dotenv';
config();

import { createServer } from 'http';
import connectToDatabase from './utils/db/index.js';
import cronScheduler from './utils/crons/scheduler.js';
import CRON_CONFIG from './config/cron.config.js';
import app from './app.js';


const server = createServer(app);

const PORT = process.env.PORT || 5000

server.listen(PORT);

server.on('listening', async () => {
  console.log(`Application is listening on port ${PORT}`);
  await connectToDatabase();
  cronScheduler(CRON_CONFIG);
});

server.on('close', () => {
  console.log('Application server closed');
});


