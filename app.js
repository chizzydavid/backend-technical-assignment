import express from "express";
import { errorHandler, invalidPathHandler } from './middlewares/index.js'
import bodyParser from 'body-parser';
import routes from './routes/index.js'


const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)
app.use(errorHandler)
app.use(invalidPathHandler)


export default app
