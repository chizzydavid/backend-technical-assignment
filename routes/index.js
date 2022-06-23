import express from 'express';
import StationController from '../controllers/station.controller.js';
import WeatherController from '../controllers/weather.controller.js';
import { 
  validateISOFormat as validateSnapshotTime,
  validateNumber as validateKioskId,
 } from '../middlewares/validator.js';

const router = express.Router();

router.get(
  "/api/v1/stations",
  validateSnapshotTime,
  StationController.getAllStationsSnapshot
);

router.get(
  "/api/v1/stations/:kioskId",
  validateKioskId,
  validateSnapshotTime,
  StationController.getOneStationSnapshot
);

router.get(
  "/api/v1/weather/",
  validateSnapshotTime,
  WeatherController.getWeatherSnapshot
);

export default router;
