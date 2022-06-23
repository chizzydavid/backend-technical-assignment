import CronService from '../../../services/cron.service.js';

const fetchStationAndWeatherData = async () => {
  await CronService.getStationSnapshot();
  await CronService.getWeatherSnapshot();
};

export default fetchStationAndWeatherData;
