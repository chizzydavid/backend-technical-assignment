import Station from '../models/station.model.js';
import Weather from '../models/weather.model.js';
import { fetchIndegoStations, fetchWeatherData } from './data.service.js';

export const getStationSnapshot = async () => {
  try {
    const stations = await fetchIndegoStations();
    const snapshots = stations.map(async (station) => {
      await Station.create(
        { ...station.properties },
        { logging: false }
      );
    });
    await Promise.all(snapshots);
    console.log(':::: stations information pulled ')
  } catch(error) {
    console.log(error)
  }
}

export const getWeatherSnapshot = async () => {
  try {
    const data = await fetchWeatherData();
    await Weather.create({ ...data });
    console.log('::::  weather information pulled ')
  } catch(error) {
    console.log(error)
  }
}

export default {
  getStationSnapshot,
  getWeatherSnapshot
}


