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
    return result.data;
  } catch(err) {
    const error = err.response.data.message ?? err.message
    throw new Error(error)
  }
}



export const fetchWeatherData = async () => {
  try {
    const { BASE_URL: WEATHER_URL, API_KEY, CITY_COORDINATES } =  WEATHER_CONFIG;
    const { lat, long } = CITY_COORDINATES;
    const openWeatherUrl = `${WEATHER_URL}lat=${lat}&lon=${long}&appId=${API_KEY}`;
    
    const result = await axios.get(openWeatherUrl, { headers });
    return result.data;
  } catch(err) {
    const error = err.response.data.message ?? err.message
    throw new Error(error)
  }
}

