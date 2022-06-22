import Weather from '../models/weather.model.js';
import { fetchIndegoStations, fetchWeatherData } from './data.service.js';

export const getStationSnapshot = async () => {
  try {
    const stations = await fetchIndegoStations();

    const snapshots = stations.map(async (station) => {
      await Station.create(...station.properties);
    });
    await Promise.all(snapshots);
  } catch(err) {
    throw new Error(error)
  }
}

export const getWeatherSnapshot = async () => {
  try {
    const data = await fetchWeatherData();
    await Weather.create({ ...data });
  } catch(err) {
    throw new Error(err)
  }
}

