import fetchStationAndWeatherData from '../utils/crons/tasks/index.js'

export default {
  FETCH_DATA: {
    taskName: 'Fetch Station and Weather Data',
    taskFrequency: '0 * * * *',
    taskHandler: fetchStationAndWeatherData
  }
}

