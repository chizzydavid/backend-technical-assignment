import express from 'express';
import WeatherController from '../controllers/weather.controller.js';

const router = express.Router();

router.get("/weather", WeatherController.getAll);

export default router;
