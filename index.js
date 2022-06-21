import { config } from 'dotenv';
config();

import express from "express";
import { createServer } from 'http';
import { errorHandler, invalidPathHandler } from './middlewares/index.js'
import bodyParser from 'body-parser';
import routes from './routes/index.js'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)
app.use(errorHandler)
app.use(invalidPathHandler)

const server = createServer(app);

const PORT = process.env.PORT || 5000
server.listen(PORT);
server.on('listening', () => {
  console.log(`Application is listening on port ${PORT}`);
});

server.on('close', () => {
  console.log('Application server closed');
});


