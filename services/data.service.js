import axios from 'axios';
import INDEGO_CONFIG from '../config/indego.config.js';
import WEATHER_CONFIG from '../config/weather.config.js';

const headers = {
  'Content-Type': 'application/json'
}

export const fetchIndegoStations = async () => {
  try {
    const { BASE_URL, STATION } = INDEGO_CONFIG;
    const indegoUrl = `${BASE_URL}${STATION}`;
    
    const result = await axios.get(indegoUrl, { headers });
    return result.data.features;
  } catch(err) {
    const error = err.response.data.message ?? err.message
    throw new Error(`Failed to get stations data ${error}`)
  }
}

export const fetchWeatherData = async () => {
  try {
    const { BASE_URL: WEATHER_URL, API_KEY, CITY_COORDINATES } =  WEATHER_CONFIG;
    const { lat, long } = CITY_COORDINATES;
    const result = await axios.get('/data/2.5/weather', {
      baseURL: WEATHER_URL,
      params: {
        lat: lat,
        lon: long,
        appid: API_KEY,
        units: 'metric',
      },
      headers
    });

    return result.data;
  } catch(err) {
    const error = err.response.data.message ?? err.message
    throw new Error(`Failed to get weather data ${error}`)
  }
}

