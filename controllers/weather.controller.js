import WeatherService from "../services/weather.service.js"

/**
 * Fetches Weather Snapshot for Passed Timestamp
 *
 * @param {request} request
 * @param {response} reponse
 * @param {function} next
 * @returns {void}
 */
const getWeatherSnapshot = async (req, res, next) => {
  try {
    const { at: atTime } = req.query;
    const weather = await WeatherService.findOne(atTime);
    if (!weather) {
      return res.status(404).json({ 
        error: 'weather at specified timestamp not found' 
      });
    }
    res.status(200).json({ 
      data: {
        at: weather.createdAt,
        weather
      }
     });
  } catch(error) {
    console.log(`error fetching data ${error}`)
    next(error) 
  }
}

export default {
  getWeatherSnapshot
}

